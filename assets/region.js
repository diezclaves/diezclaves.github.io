// Diez Claves · región y tienda. Todo ocurre en el navegador: no hay ninguna conexión.
(function(){
  "use strict";
  const REGIONES = {
    es: { nombre: "España (general)", tienda: "es", corto: "España" },
    ic: { nombre: "Canarias", tienda: "es", corto: "Canarias" },
    mx: { nombre: "México", tienda: "mx", corto: "México" },
    cl: { nombre: "Chile", tienda: "cl", corto: "Chile" },
    ar: { nombre: "Argentina", tienda: "ar", corto: "Argentina" },
    uy: { nombre: "Uruguay", tienda: "uy", corto: "Uruguay" },
    co: { nombre: "Colombia", tienda: "co", corto: "Colombia" },
    cr: { nombre: "Costa Rica", tienda: "us", corto: "Costa Rica" },
    pa: { nombre: "Panamá", tienda: "us", corto: "Panamá" },
    pr: { nombre: "Puerto Rico", tienda: "us", corto: "Puerto Rico" },
    do: { nombre: "República Dominicana", tienda: "us", corto: "R. Dominicana" },
    py: { nombre: "Paraguay", tienda: "us", corto: "Paraguay" },
    pe: { nombre: "Perú", tienda: "pe", corto: "Perú" },
    ec: { nombre: "Ecuador", tienda: "us", corto: "Ecuador" },
    gt: { nombre: "Guatemala", tienda: "us", corto: "Guatemala" },
    sv: { nombre: "El Salvador", tienda: "us", corto: "El Salvador" },
    ni: { nombre: "Nicaragua", tienda: "us", corto: "Nicaragua" },
    bo: { nombre: "Bolivia", tienda: "bo", corto: "Bolivia" },
    hn: { nombre: "Honduras", tienda: "us", corto: "Honduras" },
    cu: { nombre: "Cuba", tienda: "us", corto: "Cuba" },
    us: { nombre: "Estados Unidos", tienda: "us", corto: "EE. UU." }
  };
  const TIENDAS = {
    es: { nombre: "Amazon España", url: t => "https://www.amazon.es/s?k=" + t, tag: "" },
    mx: { nombre: "Amazon México", url: t => "https://www.amazon.com.mx/s?k=" + t, tag: "" },
    us: { nombre: "Amazon (Estados Unidos)", url: t => "https://www.amazon.com/s?k=" + t, tag: "" },
    cl: { nombre: "Mercado Libre Chile", url: t => "https://listado.mercadolibre.cl/" + t.replace(/\+/g, "-"), tag: "" },
    ar: { nombre: "Mercado Libre Argentina", url: t => "https://listado.mercadolibre.com.ar/" + t.replace(/\+/g, "-"), tag: "" },
    uy: { nombre: "Mercado Libre Uruguay", url: t => "https://listado.mercadolibre.com.uy/" + t.replace(/\+/g, "-"), tag: "" },
    co: { nombre: "Mercado Libre Colombia", url: t => "https://listado.mercadolibre.com.co/" + t.replace(/\+/g, "-"), tag: "" },
    pe: { nombre: "Mercado Libre Perú", url: t => "https://listado.mercadolibre.com.pe/" + t.replace(/\+/g, "-"), tag: "" },
    bo: { nombre: "Mercado Libre Bolivia", url: t => "https://listado.mercadolibre.com.bo/" + t.replace(/\+/g, "-"), tag: "" }
  };
  const KEY = "dc:region";
  const html = document.documentElement;

  function leer(){ try { return localStorage.getItem(KEY) || ""; } catch(e){ return ""; } }
  function guardar(r){ try { localStorage.setItem(KEY, r); } catch(e){} }

  function deducir(){ // por idioma y zona horaria del navegador, sin consultar a nadie
    let tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch(e){}
    const langs = (navigator.languages || [navigator.language || ""]).map(l => l.toLowerCase());
    if (tz === "Atlantic/Canary") return "ic";
    if (/^America\/(Mexico|Cancun|Merida|Monterrey|Chihuahua|Tijuana|Hermosillo|Mazatlan|Matamoros|Ojinaga|Bahia_Banderas)/.test(tz)) return "mx";
    if (/^America\/(Santiago|Punta_Arenas)|^Pacific\/Easter/.test(tz)) return "cl";
    if (/^America\/(Argentina|Buenos_Aires|Cordoba|Mendoza)/.test(tz)) return "ar";
    if (tz === "America/Montevideo") return "uy";
    if (tz === "America/Bogota") return "co"; if (tz === "America/Costa_Rica") return "cr"; if (tz === "America/Panama") return "pa";
    if (tz === "America/Puerto_Rico") return "pr"; if (tz === "America/Santo_Domingo") return "do";
    if (tz === "America/Asuncion") return "py"; if (tz === "America/Lima") return "pe"; if (/^America\/Guayaquil|^Pacific\/Galapagos/.test(tz)) return "ec"; if (tz === "America/Guatemala") return "gt"; if (tz === "America/El_Salvador") return "sv"; if (tz === "America/Managua") return "ni"; if (tz === "America/La_Paz") return "bo"; if (tz === "America/Tegucigalpa") return "hn"; if (tz === "America/Havana") return "cu";
    if (/^(Europe\/Madrid|Africa\/Ceuta)/.test(tz)) return "es";
    for (const l of langs){
      if (l === "es-mx") return "mx"; if (l === "es-cl") return "cl"; if (l === "es-ar") return "ar"; if (l === "es-uy") return "uy"; if (l === "es-co") return "co"; if (l === "es-cr") return "cr"; if (l === "es-pa") return "pa"; if (l === "es-pr") return "pr"; if (l === "es-do") return "do"; if (l === "es-py") return "py"; if (l === "es-pe") return "pe"; if (l === "es-ec") return "ec"; if (l === "es-gt") return "gt"; if (l === "es-sv") return "sv"; if (l === "es-ni") return "ni"; if (l === "es-bo") return "bo"; if (l === "es-hn") return "hn"; if (l === "es-cu") return "cu";
      if (l === "es-es") return "es"; if (l === "es-us" || l === "en-us") return "us";
    }
    if (/^America\//.test(tz) && langs.some(l => l.startsWith("es"))) return "us";
    if (/^America\//.test(tz)) return "us";
    return "";
  }

  function regionActual(){ return leer() || "es"; }
  function aplicar(r){
    const reg = REGIONES[r] || REGIONES.es;
    html.dataset.region = r; html.dataset.tienda = reg.tienda;
    document.querySelectorAll("[data-region-nombre]").forEach(e => { e.textContent = reg.corto; });
    // enlaces de productos: cada <a data-busca="..."> apunta a la tienda de la región
    const tienda = TIENDAS[reg.tienda];
    document.querySelectorAll("a[data-busca]").forEach(a => {
      let u = tienda.url(encodeURIComponent(a.dataset.busca).replace(/%20/g, "+"));
      if (tienda.tag) u += (u.includes("?") ? "&" : "?") + "tag=" + tienda.tag;
      a.href = u; a.rel = "noopener sponsored";
    });
    document.querySelectorAll("[data-tienda-nombre]").forEach(e => { e.textContent = tienda.nombre; });
  }

  // versiones de la página actual por región: <body data-variantes='{"ic":"/articulos/x-canarias.html","es":"/articulos/x.html"}'>
  function variantes(){ try { return JSON.parse(document.body.dataset.variantes || "{}"); } catch(e){ return {}; } }
  function paginaDe(r){ const v = variantes(); if (v[r]) return v[r]; if (r === "ic" && v.ic) return v.ic; return (r !== "ic" && v.es) ? v.es : null; }

  let tarjeta = null, ultimoFoco = null;
  function abrir(sugerida, motivo){
    if (tarjeta) return;
    ultimoFoco = document.activeElement;
    const r = sugerida || regionActual();
    tarjeta = document.createElement("section");
    tarjeta.className = "region-card"; tarjeta.setAttribute("role", "region"); tarjeta.setAttribute("aria-label", "Elegir región");
    const opciones = Object.entries(REGIONES).map(([k, v]) => `<option value="${k}"${k === r ? " selected" : ""}>${v.nombre}</option>`).join("");
    tarjeta.innerHTML = `
      <p class="region-t">${motivo === "auto" ? "Creemos que nos visitas desde" : "¿Desde dónde nos visitas?"}</p>
      <label class="region-sel"><span class="sr">Región</span><select id="region-select">${opciones}</select></label>
      <p class="region-x">Con tu región elegimos los trámites y las tiendas que aparecen en los artículos. Se guarda solo en tu navegador.</p>
      <div class="region-b">
        <button type="button" class="btn primary" id="region-ok"></button>
        <button type="button" class="btn ghost" id="region-no">${motivo === "auto" ? "Seguir en la versión general" : "Cancelar"}</button>
      </div>`;
    document.body.appendChild(tarjeta);
    const sel = tarjeta.querySelector("#region-select"), ok = tarjeta.querySelector("#region-ok");
    const pinta = () => { const k = sel.value; const dest = paginaDe(k);
      ok.textContent = dest && dest !== location.pathname ? "Ir a la versión para " + REGIONES[k].corto : "Usar " + REGIONES[k].corto; };
    pinta(); sel.addEventListener("change", pinta);
    ok.addEventListener("click", () => { const k = sel.value; guardar(k); aplicar(k); const dest = paginaDe(k);
      cerrar(); if (dest && dest !== location.pathname) location.href = dest; });
    tarjeta.querySelector("#region-no").addEventListener("click", () => { if (motivo === "auto"){ guardar("es"); aplicar("es"); } cerrar(); });
    tarjeta.addEventListener("keydown", e => { if (e.key === "Escape"){ if (motivo === "auto"){ guardar("es"); aplicar("es"); } cerrar(); } });
    sel.focus();
  }
  function cerrar(){ if (!tarjeta) return; tarjeta.remove(); tarjeta = null; if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus(); }

  function montarControles(){
    const nav = document.querySelector("nav.by");
    if (nav){ const b = document.createElement("button"); b.type = "button"; b.className = "region-btn";
      b.innerHTML = '<span aria-hidden="true">🌐</span> <span data-region-nombre></span><span class="sr">. Cambiar región</span>';
      b.addEventListener("click", () => abrir(regionActual(), "manual")); nav.appendChild(b); }
    const foot = document.querySelector("footer");
    if (foot){ const b = document.createElement("button"); b.type = "button"; b.className = "region-link";
      b.innerHTML = 'Región: <span data-region-nombre></span> · cambiar'; b.addEventListener("click", () => abrir(regionActual(), "manual")); foot.appendChild(b); }
  }

  // «He visto un error»: el correo se monta al pulsar, a partir de trozos, para que los robots no lo lean en el HTML
  const CORREO = { u: [104,111,108,97], d: [100,105,101,122,99,108,97,118,101,115], t: "com" }; // cambia u (usuario) y d (dominio) por códigos de carácter
  function correo(){ const s = a => String.fromCharCode.apply(null, a); return s(CORREO.u) + "@" + s(CORREO.d) + "." + CORREO.t; }
  function montarError(){
    const foot = document.querySelector("footer"); if (!foot) return;
    const a = document.createElement("a"); a.href = "#"; a.className = "region-link error-link"; a.textContent = "He visto un error";
    a.addEventListener("click", e => { e.preventDefault();
      const asunto = "He visto un error en " + document.title.replace(/ · Diez Claves$/, "");
      const cuerpo = "Página: " + location.href + "\n\nQué he visto:\n";
      location.href = "mailto:" + correo() + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo); });
    foot.appendChild(a);
  }
  function inicio(){
    montarControles(); montarError();
    const guardada = leer();
    if (guardada){ aplicar(guardada); const dest = paginaDe(guardada); if (dest && dest !== location.pathname && document.body.dataset.variantesAuto === "1") location.replace(dest); return; }
    aplicar("es");
    const d = deducir();
    if (d && d !== "es") abrir(d, "auto");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inicio); else inicio();
})();
