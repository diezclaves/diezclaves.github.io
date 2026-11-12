// Diez Claves · buscador del índice de artículos. Filtra la lista en el navegador; no hay ninguna conexión.
(function(){
  "use strict";
  const caja = document.querySelector(".buscar"); if (!caja) return;
  const q = caja.querySelector("input"), out = caja.querySelector("output");
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const items = Array.from(document.querySelectorAll(".lista li")).map(li => ({ li, t: norm(li.dataset.q || li.textContent) }));
  const temas = Array.from(document.querySelectorAll(".tema"));
  caja.hidden = false;
  function filtrar(){
    const ps = norm(q.value).split(/\s+/).filter(Boolean); let n = 0;
    items.forEach(i => { const ok = ps.every(p => i.t.includes(p)); i.li.hidden = !ok; if (ok) n++; });
    temas.forEach(t => { t.hidden = !t.querySelector(".lista li:not([hidden])"); });
    out.textContent = ps.length ? (n ? n + (n === 1 ? " guía" : " guías") : "Ninguna guía coincide. Prueba con otra palabra.") : "";
  }
  q.addEventListener("input", filtrar);
})();
