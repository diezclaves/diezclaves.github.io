// Diez Claves · direcciones antiguas. Lleva a la nueva conservando ?pais= y el #ancla.
(function(){
  "use strict";
  var c = document.querySelector('link[rel="canonical"]');
  if (c) location.replace(new URL(c.href).pathname + location.search + location.hash);
})();
