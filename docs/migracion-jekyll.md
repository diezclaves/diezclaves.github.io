# Migración a Jekyll (12 de noviembre de 2026)

## Copia de seguridad

La última versión en HTML estático es el commit `24bfca4` de `main` (fusión del PR #3). Para volver a ella basta con revertir el PR de la migración: los HTML originales siguen en el historial.

## Inventario antes de migrar

- 110 páginas HTML: portada, generador, medidor, aviso legal, privacidad, índice de artículos, 9 páginas de sección y 95 artículos (94 con el formato de diez claves y «Dónde pedir ayuda, por país»).
- 21 artículos de identidad digital por país con `data-variantes`; 35 con enlaces de tienda (`data-busca`) que adapta `region.js`.
- `sitemap.xml` con 110 URL; `robots.txt`, `CNAME`, `assets/` sin cambios.

## Qué se ha convertido

- Los 94 artículos de diez claves pasan a Markdown (`articulos/<seccion>/<slug>.md`), con el formato de los borradores.
- «Dónde pedir ayuda» sigue en HTML, con la cabecera en el front matter.
- Portada, índice, páginas de sección, «Siguiente en…», versiones por país y sitemap se generan con Jekyll.
- Generador, medidor, aviso legal, privacidad y `assets/` se copian tal cual.

## Comprobación

`herramientas/migracion/comparar.py` compara la web original con la generada, página a página, ignorando solo espacios entre etiquetas, orden de atributos y formato del JSON-LD. Resultado: 107 de 110 páginas idénticas, el sitemap igual (mismas URL y fechas) y el resto de ficheros igual byte a byte.

Las 3 diferencias son intencionadas. En `cambiar-dns`, `vpn-teletrabajo` y `vpn-wifi-publico` había una lista numerada dentro de un párrafo, que no es HTML válido. Ahora salen párrafo, lista y párrafo, que es como ya lo pintaba el navegador.

Ya no se publican `README.md` ni `docs/` (antes se servían como ficheros sueltos).
