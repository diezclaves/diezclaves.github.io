#!/usr/bin/env node
// Diez Claves · imágenes para compartir (Open Graph, 1200 × 630).
//
// Genera con Chrome sin ventana, a partir de scripts/og-plantilla.html:
//   - assets/og.png                      la general (portada, herramientas, páginas legales…)
//   - assets/og/seccion-<seccion>.png    una por sección, con su color
//   - assets/og/<slug>.png               una por guía, con su título y el color de su tema
// y apunta og:image (y la imagen del JSON-LD) de cada página a la suya, con og:image:alt.
//
// Uso, con el servidor local en marcha (python -m http.server 8765 --bind 127.0.0.1):
//   node scripts/og.js            genera las que falten y actualiza las páginas
//   node scripts/og.js --todas    vuelve a generarlas todas (tras cambiar la plantilla o un título)
"use strict";
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const RAIZ = path.resolve(__dirname, "..");
const SITIO = "https://diezclaves.com";
const LOCAL = process.env.OG_SERVIDOR || "http://127.0.0.1:8765";
const TODAS = process.argv.includes("--todas");

const SECCIONES = {
  contrasenas: ["Contraseñas y cuentas", "#ffe45c"],
  dispositivos: ["Móvil y dispositivos", "#ff8fb8"],
  privacidad: ["Privacidad al navegar", "#3cc6b5"],
  amenazas: ["Programas maliciosos", "#ffab57"],
  "redes-sociales": ["Redes sociales", "#c5a6ff"],
  tramites: ["Identidad digital y trámites", "#b9e35d"],
  fraudes: ["Fraudes y engaños", "#ff8d7a"],
  conexion: ["Conexión: DNS, VPN y Tor", "#86c8ff"],
  acoso: ["Abusos y acoso", "#93e8c9"]
};

function chrome() {
  const c = [
    process.env.CHROME,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome", "/usr/bin/chromium"
  ].filter(Boolean).find(p => fs.existsSync(p));
  if (!c) { console.error("No encuentro Chrome. Indica la ruta con la variable CHROME."); process.exit(1); }
  return c;
}

function paginas() {
  const out = [];
  (function recorrer(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.name.startsWith(".") || ["scripts", "node_modules", "articulos-ineditos", "docs"].includes(e.name)) continue;
      const r = path.join(dir, e.name);
      if (e.isDirectory()) recorrer(r);
      else if (e.name.endsWith(".html")) {
        const html = fs.readFileSync(r, "utf8");
        if (html.includes('property="og:image"')) out.push({ ruta: r, rel: path.relative(RAIZ, r).replace(/\\/g, "/"), html });
      }
    }
  })(RAIZ);
  return out;
}

const desEsc = s => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const esc = s => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function tarjeta(p) {
  const titulo = desEsc((p.html.match(/property="og:title" content="([^"]*)"/) || [, ""])[1]);
  const m = p.rel.match(/^articulos\/([^/]+)\/([^/]+)\.html$/);
  if (m && SECCIONES[m[1]]) {
    const [tema, c] = SECCIONES[m[1]];
    if (m[2] === "index") return { archivo: `assets/og/seccion-${m[1]}.png`, q: { t: titulo, tema, c }, alt: `${tema}, en Diez Claves` };
    if (p.html.includes('<ol class="claves">')) return { archivo: `assets/og/${m[2]}.png`, q: { t: titulo, tema, c, diez: 1 }, alt: titulo };
  }
  return { archivo: "assets/og.png", q: { pie: "Guías y herramientas que no envían nada a nadie" }, alt: "Diez Claves: seguridad digital en español, para cualquier persona" };
}

function generar(nav, t) {
  const destino = path.join(RAIZ, t.archivo);
  if (!TODAS && fs.existsSync(destino) && !t.forzar) return false;
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  const url = `${LOCAL}/scripts/og-plantilla.html?` + new URLSearchParams(t.q).toString();
  execFileSync(nav, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    "--window-size=1200,630", "--virtual-time-budget=3000", `--screenshot=${destino}`, url], { stdio: "ignore" });
  if (!fs.existsSync(destino)) throw new Error("Chrome no ha escrito " + t.archivo + ". ¿Está el servidor local en marcha?");
  return true;
}

function actualizar(p, t) {
  const url = `${SITIO}/${t.archivo}`;
  let h = p.html
    .replace(/(<meta property="og:image" content=")[^"]*(">)/, (_, a, b) => a + url + b)
    .replace(/("image": *")https:\/\/diezclaves\.com\/assets\/og[^"]*(")/g, (_, a, b) => a + url + b);
  const alt = `<meta property="og:image:alt" content="${esc(t.alt)}">`;
  if (/<meta property="og:image:alt"[^>]*>/.test(h)) h = h.replace(/<meta property="og:image:alt"[^>]*>/, () => alt);
  else h = h.replace(/(<meta property="og:image:height"[^>]*>)/, (x) => x + "\n" + alt);
  if (h !== p.html) { fs.writeFileSync(p.ruta, h); return true; }
  return false;
}

const nav = chrome();
const lista = paginas();
let hechas = 0, cambiadas = 0;
const vistas = new Set();
for (const p of lista) {
  const t = tarjeta(p);
  if (!vistas.has(t.archivo)) { vistas.add(t.archivo); if (generar(nav, t)) { hechas++; process.stdout.write("."); } }
  if (actualizar(p, t)) cambiadas++;
}
console.log(`\nImágenes generadas: ${hechas} (de ${vistas.size}). Páginas actualizadas: ${cambiadas} de ${lista.length}.`);
