// Diez Claves · buscador del índice de artículos. Filtra la lista en el navegador; no hay ninguna conexión.
// Búsqueda tolerante: basta con que coincida alguna palabra y se muestran las guías que más coinciden;
// ignora palabras vacías («me», «han», «el»…), compara por raíz («robado», «roban», «robo») y
// entiende unos pocos sinónimos («estafa» → fraude, phishing…). Busca también en el nombre del tema.
(function(){
  "use strict";
  const caja = document.querySelector(".buscar"); if (!caja) return;
  const q = caja.querySelector("input"), out = caja.querySelector("output");
  const vacio = document.querySelector(".sin-resultados");
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const VACIAS = new Set("a al algo como con de del el ella ellos en es esta este estoy for ha han he hay la las le lo los mas me mi mis muy no o para pero por que se si sin sobre su sus te tengo ti tu tus un una uno unos y ya yo".split(" "));
  const raiz = p => p.length <= 3 ? p : p.replace(/(amientos|imientos|aciones|uciones|amiento|imiento|aciones|acion|ucion|mente|ando|iendo|ados|idos|adas|idas|ado|ido|ada|ida|ar|er|ir|an|en|as|es|os|o|a|e|s)$/, "");
  const palabras = s => norm(s).split(/[^a-z0-9ñ]+/).filter(p => p && !VACIAS.has(p));
  // sinónimos por raíz: si se busca la clave, también vale cualquiera de los valores
  const SIN_PALABRAS = {
    estafa: "fraude engaño phishing smishing vishing timo", timo: "fraude engaño",
    fraude: "phishing estafa engaño smishing vishing",
    hackeado: "suplantación robo", pirateado: "suplantación robo",
    robado: "perdido", robo: "perdido", perdido: "robo", hurto: "robo",
    certificado: "firma dnie identidad clave", firma: "certificado",
    virus: "malware maliciosos troyanos gusanos ransomware", malware: "maliciosos virus",
    acoso: "abusos amenazas odio", amenaza: "acoso abusos",
    sms: "smishing mensajes", whatsapp: "mensajes smishing suplantación", llamada: "vishing",
    clave: "contraseña passkey", contraseña: "clave passkey",
    telefono: "móvil", celular: "móvil", movil: "teléfono celular"
  };
  const SIN = {};
  for (const k in SIN_PALABRAS) SIN[raiz(norm(k))] = palabras(SIN_PALABRAS[k]).map(raiz);
  const temas = Array.from(document.querySelectorAll(".tema"));
  const items = Array.from(document.querySelectorAll(".lista li")).map(li => {
    const tema = li.closest(".tema");
    const extra = tema ? (tema.querySelector("h2")?.textContent || "") + " " + (tema.querySelector(".cab + p")?.textContent || "") : "";
    const ws = palabras(li.dataset.q || li.textContent), tw = palabras(extra);
    return { li, propio: { ws, rs: new Set(ws.map(raiz)) }, tema: { ws: tw, rs: new Set(tw.map(raiz)) } };
  });
  const coincide = (t, r) => t.rs.has(r) || (r.length >= 4 && t.ws.some(w => w.startsWith(r)));
  // cada palabra buscada suma 2 si está en la propia guía y 1 si solo está en el nombre o la descripción del tema
  const valor = (it, r) => { const cs = [r].concat(SIN[r] || []); return cs.some(c => coincide(it.propio, c)) ? 2 : cs.some(c => coincide(it.tema, c)) ? 1 : 0; };
  caja.hidden = false;
  function filtrar(){
    const rs = [...new Set(palabras(q.value).map(raiz))].filter(r => r.length >= 2);
    let mejor = 0;
    const puntos = items.map(it => {
      const p = rs.reduce((s, r) => s + valor(it, r), 0);
      if (p > mejor) mejor = p; return p;
    });
    let n = 0;
    items.forEach((it, i) => { const ok = !rs.length || (mejor > 0 && puntos[i] === mejor); it.li.hidden = !ok; if (ok && rs.length) n++; });
    temas.forEach(t => { t.hidden = !t.querySelector(".lista li:not([hidden])"); });
    const nada = rs.length > 0 && n === 0;
    if (vacio) vacio.hidden = !nada;
    out.textContent = !rs.length ? "" : (n ? n + (n === 1 ? " guía" : " guías") : "Ninguna guía coincide. Abajo tienes algunas por las que empezar.");
  }
  q.addEventListener("input", filtrar);
  // al elegir un tema, se deja de filtrar para que el tema esté visible
  document.querySelectorAll('.chips a[href^="#t-"]').forEach(a => a.addEventListener("click", () => { if (q.value) { q.value = ""; filtrar(); } }));
})();
