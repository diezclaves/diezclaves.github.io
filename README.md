# Diez Claves

Herramientas de seguridad digital en español, para cualquier persona. Un proyecto de Gofio Design.
Web: <https://diezclaves.com>

## Estructura

- `index.html`: portada.
- `generador.html`: generador de contraseñas y frases en español.
- `medidor.html`: medidor de contraseñas.
- `articulos/`: artículos en Markdown, en una carpeta por sección (`articulos/<seccion>/<slug>.md`, se publica como `.html`). Ver `docs/estructura-articulos.md`.
- `assets/`: estilos, diccionario, iconos e imagen para redes.

La web se construye con Jekyll y se publica en GitHub Pages con GitHub Actions al fusionar en `main`. Cómo editar y publicar: `docs/editar-y-publicar.md`.

Las páginas llevan una política de seguridad de contenido que impide cualquier conexión a terceros.

## Diccionario

Las palabras de `assets/diccionario.js` proceden del diccionario de español del proyecto RLA-ES, el que distribuye LibreOffice
(<https://github.com/LibreOffice/dictionaries/tree/master/es>), publicado bajo licencia GPL 3, LGPL 3 o MPL 1.1, a elegir.
Se usan las formas base, sin nombres propios ni siglas, y se han apartado las palabras malsonantes más fuertes.
La lista del modo gamberro es propia de este proyecto.
