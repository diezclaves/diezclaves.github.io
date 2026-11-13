#!/usr/bin/env node
// Diez Claves · bloques generados de cada artículo.
//
// Reescribe en las guías de diez claves:
//   - «Sigue leyendo» (nav.rel): 4 guías realmente relacionadas, calculadas por el parecido del texto
//     (título, entradilla y títulos de las diez claves), con un poco de preferencia por la misma sección.
//     Se puede fijar a mano con "relacionados" en datos/practica.json.
//   - «Para ponerlo en práctica» (section.prods): hasta 3 productos por artículo, leídos de datos/practica.json.
//
// Uso (desde la raíz del proyecto, con Node 18 o posterior):
//   node scripts/articulos.js              regenera los dos bloques en todas las guías
//   node scripts/articulos.js --iniciar    crea datos/practica.json a partir de lo que ya hay en las guías (no pisa uno existente)
//   node scripts/articulos.js --pendientes lista las guías con menos de 3 productos o sin alternativa gratuita
//   node scripts/articulos.js --ver <slug> muestra qué relacionadas saldrían para una guía, con su puntuación
//
// No hay paso de compilación en la web: este script se ejecuta en local antes de publicar y deja HTML estático.
"use strict";
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const DATOS = path.join(RAIZ, "datos", "practica.json");
const MAX_PRODUCTOS = 3;
const N_RELACIONADOS = 4;

// ---------- lectura de las guías ----------
function listarGuias() {
  const out = [];
  const dir = path.join(RAIZ, "articulos");
  for (const sec of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!sec.isDirectory()) continue;
    for (const f of fs.readdirSync(path.join(dir, sec.name))) {
      if (!f.endsWith(".html") || f === "index.html") continue;
      const ruta = path.join(dir, sec.name, f);
      const html = fs.readFileSync(ruta, "utf8");
      if (!html.includes('<ol class="claves">')) continue;
      out.push({ ruta, html, seccion: sec.name, slug: f.replace(/\.html$/, ""), url: `/articulos/${sec.name}/${f}` });
    }
  }
  return out.sort((a, b) => a.url.localeCompare(b.url));
}

const sinEtiquetas = s => s.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").replace(/ ([:;,.])/g, "$1").trim();
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function titulosDelIndice() {
  // nombre corto de cada guía, tal y como sale en el índice de artículos
  const h = fs.readFileSync(path.join(RAIZ, "articulos", "index.html"), "utf8");
  const m = new Map();
  for (const x of h.matchAll(/<li data-q="[^"]*"><a href="([^"]+)">([^<]+)<\/a>/g)) m.set(x[1], x[2].trim());
  return m;
}

function leerGuia(g, cortos) {
  const h = g.html;
  const h1 = sinEtiquetas((h.match(/<h1>([\s\S]*?)<\/h1>/) || [, ""])[1]);
  const lede = sinEtiquetas((h.match(/<p class="lede[^"]*">([\s\S]*?)<\/p>/) || [, ""])[1]);
  const claves = [...h.matchAll(/<li id="clave-\d+"><h2>([^<]*)<\/h2>/g)].map(x => x[1]);
  const sig = (h.match(/<nav class="sig"[\s\S]*?<a class="s" href="([^"]+)"/) || [, ""])[1];
  let variantes = [];
  const v = h.match(/data-variantes='([^']+)'/);
  if (v) { try { variantes = Object.values(JSON.parse(v[1])); } catch (e) {} }
  // páginas de un país concreto: solo la versión general (es) entra en «Sigue leyendo» de otros temas
  let general = "";
  if (v) { try { general = JSON.parse(v[1]).es || ""; } catch (e) {} }
  const dePais = !!general && general !== g.url;
  const contrasenas = (norm(h1 + " " + lede + " " + claves.join(" ")).match(/contrasen/g) || []).length;
  const corto = cortos.get(g.url) || h1.replace(/^Diez claves (para|sobre|de)\s+/i, "").replace(/^./, c => c.toUpperCase());
  return { ...g, h1, lede, claves, sig, variantes, corto, dePais, contrasenas };
}

// ---------- parecido entre guías ----------
const VACIAS = new Set(("a al algo ante antes como con contra cual cuando de del desde donde dos el ella en entre es esa ese eso esta este esto hay la las le lo los mas me mi mismo muy no o otra otro para pero poco por porque puede pueden que se sea segun ser si sin sobre solo son su sus tambien te tiene tu tus un una uno unos y ya claves diez cada hacer saber forma").split(" "));
const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const raiz = p => p.length <= 4 ? p : p.replace(/(amientos|imientos|aciones|uciones|amiento|imiento|acion|ucion|mente|ando|iendo|ados|idos|adas|idas|ado|ido|ada|ida|es|as|os|ar|er|ir|o|a|e|s)$/, "");
const fichas = s => norm(s).split(/[^a-z0-9]+/).filter(p => p.length > 2 && !VACIAS.has(p)).map(raiz);

function vectores(guias) {
  const docs = guias.map(g => {
    // el título y la entradilla pesan más que los títulos de las claves
    const t = [].concat(fichas(g.h1), fichas(g.h1), fichas(g.corto), fichas(g.lede), fichas(g.lede), fichas(g.claves.join(" ")));
    const tf = new Map(); t.forEach(w => tf.set(w, (tf.get(w) || 0) + 1)); return tf;
  });
  const df = new Map(); docs.forEach(tf => tf.forEach((_, w) => df.set(w, (df.get(w) || 0) + 1)));
  const N = docs.length;
  return docs.map(tf => {
    const v = new Map(); let n = 0;
    tf.forEach((c, w) => { const x = (1 + Math.log(c)) * Math.log(N / df.get(w)); v.set(w, x); n += x * x; });
    n = Math.sqrt(n) || 1; v.forEach((x, w) => v.set(w, x / n)); return v;
  });
}
const coseno = (a, b) => { let s = 0; for (const [w, x] of a) { const y = b.get(w); if (y) s += x * y; } return s; };

function relacionadas(i, guias, vs, fijas) {
  const g = guias[i];
  if (fijas && fijas.length) return fijas.map(s => guias.find(x => x.slug === s)).filter(Boolean);
  const excluir = new Set([g.url, g.sig, ...g.variantes]);
  return guias
    .map((o, j) => ({ o, p: coseno(vs[i], vs[j]) + (o.seccion === g.seccion ? 0.05 : 0) }))
    .filter(x => !excluir.has(x.o.url) && !(x.o.dePais && x.o.seccion !== g.seccion) && !(g.variantes.length && x.o.variantes.length && x.o.variantes.some(u => g.variantes.includes(u))))
    .sort((a, b) => b.p - a.p)
    .slice(0, N_RELACIONADOS)
    .map(x => Object.assign(x.o, { _p: x.p }));
}

// ---------- «Para ponerlo en práctica» ----------
function extraerPractica(h) {
  const s = h.match(/<section class="prods"[\s\S]*?<\/section>/);
  if (!s) return { intro: "", productos: [] };
  const intro = sinEtiquetas((s[0].match(/<\/h2>\s*<p>([\s\S]*?)<\/p>/) || [, ""])[1]);
  const productos = [...s[0].matchAll(/<li>([\s\S]*?)<\/li>/g)].map(x => {
    const li = x[1];
    const a = li.match(/<a data-busca="([^"]*)"[^>]*>([\s\S]*?)<\/a>/);
    const b = li.match(/<b>([\s\S]*?)<\/b>/);
    const texto = sinEtiquetas((li.match(/<p>([\s\S]*?)<\/p>/) || [, ""])[1]);
    return a
      ? { nombre: sinEtiquetas(a[2]), texto, tipo: "", busca: a[1], afiliado: false }
      : { nombre: sinEtiquetas(b ? b[1] : li), texto, tipo: "", afiliado: false };
  });
  return { intro, productos };
}

function htmlPractica(p) {
  const prods = (p.productos || []).slice(0, MAX_PRODUCTOS);
  if (!prods.length) return "";
  const enTienda = prods.some(x => x.busca);
  const afiliado = prods.some(x => x.afiliado && (x.busca || x.url));
  const lis = prods.map(x => {
    const etiqueta = x.tipo === "gratis" ? ' <span class="precio gratis">Gratis</span>' : x.tipo === "incluido" ? ' <span class="precio gratis">Ya lo tienes</span>' : x.tipo === "pago" ? ' <span class="precio">De pago</span>' : "";
    let nombre;
    if (x.busca) nombre = `<a data-busca="${esc(x.busca)}" href="https://www.amazon.es/s?k=${encodeURIComponent(x.busca).replace(/%20/g, "+")}" rel="noopener${x.afiliado ? " sponsored" : ""}">${esc(x.nombre)}</a>`;
    else if (x.url) nombre = `<a href="${esc(x.url)}" rel="noopener${x.afiliado ? " sponsored" : ""}">${esc(x.nombre)}</a>`;
    else nombre = `<b>${esc(x.nombre)}</b>`;
    return `<li>${nombre}${etiqueta}<p>${esc(x.texto)}</p></li>`;
  }).join("");
  const aviso = [
    enTienda ? 'Enlaces a <span data-tienda-nombre>Amazon España</span> según tu región.' : (prods.some(x => x.url) ? "" : "En esta guía no hay enlaces a tiendas."),
    afiliado ? "Algunos enlaces son de afiliación: si compras a través de ellos, Diez Claves recibe una pequeña comisión y a ti no te cuesta más. Eso no decide qué recomendamos." : "Diez Claves no tiene por ahora acuerdo de afiliación con ninguna tienda; cuando lo tenga, lo dirá aquí.",
    "Las alternativas gratuitas van siempre junto a las de pago."
  ].filter(Boolean).join(" ");
  return `<section class="prods" aria-labelledby="h-prods">
      <h2 id="h-prods">Para ponerlo en práctica</h2>
${p.intro ? `      <p>${esc(p.intro)}</p>\n` : ""}      <ul>
      ${lis}
      </ul>
      <p class="aviso">${aviso}</p>
    </section>`;
}

function htmlRelacionadas(lista, g) {
  // las guías que hablan mucho de contraseñas terminan con la herramienta
  const herramienta = g.contrasenas >= 3 ? `<a href="/generador.html">Generador de contraseñas</a>` : "";
  return `<nav class="rel" aria-label="Relacionado">
      <span class="tag">Sigue leyendo</span>
      ${lista.map(o => `<a href="${o.url}">${esc(o.corto)}</a>`).join("")}${herramienta}
    </nav>`;
}

// ---------- órdenes ----------
function cargarDatos() {
  if (!fs.existsSync(DATOS)) { console.error("No existe datos/practica.json. Créalo con: node scripts/articulos.js --iniciar"); process.exit(1); }
  return JSON.parse(fs.readFileSync(DATOS, "utf8"));
}

function iniciar(guias) {
  if (fs.existsSync(DATOS)) { console.error("datos/practica.json ya existe; no lo piso."); process.exit(1); }
  const d = {
    "_leeme": [
      "Productos de «Para ponerlo en práctica» y guías de «Sigue leyendo», por artículo (clave = slug del archivo).",
      "productos: hasta 3. Campos: nombre, texto, tipo (gratis | pago | incluido), y opcionalmente busca (búsqueda en la tienda de la región) o url (enlace directo), y afiliado (true si el enlace lleva comisión).",
      "Regla de la casa: si hay algo de pago, al menos una alternativa gratuita o ya incluida junto a ello.",
      "relacionados: opcional, lista de slugs para fijar «Sigue leyendo» a mano; si falta, se calcula por parecido.",
      "Después de editar: node scripts/articulos.js"
    ]
  };
  for (const g of guias) d[g.slug] = { ...extraerPractica(g.html), relacionados: [] };
  fs.mkdirSync(path.dirname(DATOS), { recursive: true });
  fs.writeFileSync(DATOS, JSON.stringify(d, null, 2) + "\n");
  console.log(`Creado datos/practica.json con ${guias.length} guías.`);
}

function pendientes(guias, d) {
  let n = 0;
  for (const g of guias) {
    const p = (d[g.slug] || {}).productos || [];
    const faltan = MAX_PRODUCTOS - p.length;
    const pago = p.some(x => x.tipo === "pago"), gratis = p.some(x => x.tipo === "gratis" || x.tipo === "incluido");
    const avisos = [];
    if (faltan > 0) avisos.push(`faltan ${faltan}`);
    if (p.some(x => !x.tipo)) avisos.push("sin tipo (gratis, pago o incluido)");
    if (pago && !gratis) avisos.push("sin alternativa gratuita");
    if (avisos.length) { n++; console.log(`${g.url}  ${avisos.join(", ")}`); }
  }
  console.log(`\n${n} de ${guias.length} guías con algo pendiente.`);
}

function generar(guias, vs, d) {
  let cambiadas = 0;
  guias.forEach((g, i) => {
    const dato = d[g.slug] || { productos: [] };
    let h = g.html;
    const rel = htmlRelacionadas(relacionadas(i, guias, vs, dato.relacionados), g);
    h = h.replace(/<nav class="rel" aria-label="Relacionado">[\s\S]*?<\/nav>/, () => rel);
    const prac = htmlPractica(dato);
    if (/<section class="prods"[\s\S]*?<\/section>/.test(h)) h = h.replace(/<section class="prods"[\s\S]*?<\/section>/, () => prac);
    else if (prac) h = h.replace('<nav class="rel"', () => prac + '\n    <nav class="rel"');
    h = h.replace(/\n\s*\n(\s*<nav class="rel")/, "\n$1");
    if (h !== g.html) { fs.writeFileSync(g.ruta, h); cambiadas++; }
  });
  console.log(`Guías actualizadas: ${cambiadas} de ${guias.length}.`);
}

const cortos = titulosDelIndice();
const guias = listarGuias().map(g => leerGuia(g, cortos));
const orden = process.argv[2];
if (orden === "--iniciar") iniciar(guias);
else if (orden === "--pendientes") pendientes(guias, cargarDatos());
else if (orden === "--ver") {
  const i = guias.findIndex(g => g.slug === process.argv[3]);
  if (i < 0) { console.error("No encuentro esa guía."); process.exit(1); }
  const vs = vectores(guias);
  console.log(guias[i].corto + "\n" + relacionadas(i, guias, vs, []).map(o => `  ${o._p.toFixed(3)}  ${o.corto}  (${o.seccion})`).join("\n"));
} else generar(guias, vectores(guias), cargarDatos());
