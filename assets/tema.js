/* Diez Claves · tema claro u oscuro.
   Por defecto sigue al sistema («automático»). El botón de la cabecera permite fijar
   claro u oscuro; la elección se guarda solo en este navegador. Se carga en <head>,
   sin defer, para que la página se pinte ya con el tema correcto. */
(function () {
  var KEY = "dc-tema";            // "claro" | "oscuro" | ausente = automático
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function leer() { try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; } }
  function guardar(v) { try { if (v) localStorage.setItem(KEY, v); else localStorage.removeItem(KEY); } catch (e) {} }

  function oscuroEfectivo(pref) {
    if (pref === "oscuro") return true;
    if (pref === "claro") return false;
    return !!(media && media.matches);
  }

  function aplicar(pref) {
    var oscuro = oscuroEfectivo(pref);
    root.setAttribute("data-theme", oscuro ? "dark" : "light");
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      metas[i].setAttribute("content", oscuro ? "#151515" : "#ffffff");
      metas[i].removeAttribute("media");
    }
  }

  aplicar(leer());
  if (media) {
    var alCambiar = function () { if (!leer()) aplicar(""); };
    if (media.addEventListener) media.addEventListener("change", alCambiar);
    else if (media.addListener) media.addListener(alCambiar);
  }

  /* Un solo botón que dice lo que hará: con el tema claro muestra una luna («Cambiar a modo oscuro»);
     con el oscuro, un sol («Cambiar a modo claro»). Al pulsar se pasa al tema contrario del que se ve;
     si la elección coincide con la del sistema, se borra y se vuelve a seguir al sistema. */
  var LUNA = '<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M16.5 12.6A7 7 0 0 1 7.4 3.5a7 7 0 1 0 9.1 9.1z" fill="var(--luna, none)" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>';
  var SOL = '<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M10 1.8v2.4M10 15.8v2.4M1.8 10h2.4M15.8 10h2.4M4.2 4.2l1.7 1.7M14.1 14.1l1.7 1.7M4.2 15.8l1.7-1.7M14.1 5.9l1.7-1.7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
  var btn = null;

  function pintar() {
    if (!btn) return;
    var oscuro = oscuroEfectivo(leer());
    var texto = oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
    btn.innerHTML = (oscuro ? SOL : LUNA) + '<span class="sr">' + texto + '</span>';
    btn.title = texto;
  }

  if (media) {
    var repintar = function () { pintar(); };
    if (media.addEventListener) media.addEventListener("change", repintar);
    else if (media.addListener) media.addListener(repintar);
  }

  function boton() {
    var nav = document.querySelector("nav.by");
    if (!nav || nav.querySelector(".tema-btn")) return;
    var b = btn = document.createElement("button");
    b.type = "button";
    b.className = "tema-btn";
    pintar();
    b.addEventListener("click", function () {
      var quiereOscuro = !oscuroEfectivo(leer());
      var sistemaOscuro = !!(media && media.matches);
      var nuevo = quiereOscuro === sistemaOscuro ? "" : (quiereOscuro ? "oscuro" : "claro");
      guardar(nuevo);
      aplicar(nuevo);
      pintar();
    });
    var region = nav.querySelector(".region-btn");
    if (region) nav.insertBefore(b, region); else nav.appendChild(b);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boton);
  else boton();
})();
