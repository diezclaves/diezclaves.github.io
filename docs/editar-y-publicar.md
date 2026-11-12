# Editar y publicar artículos

Desde noviembre de 2026 la web se construye con **Jekyll**. Los artículos son ficheros Markdown con el mismo formato que los borradores de `articulos-ineditos/`. Al fusionar en `main`, GitHub Actions construye la web y la publica en GitHub Pages. Las URL no cambian: `articulos/<seccion>/<slug>.md` se publica como `/articulos/<seccion>/<slug>.html`.

## Publicar un borrador

1. Copia el `.md` del borrador a `articulos/<seccion>/<slug>.md` (la sección según `docs/estructura-articulos.md`).
2. Comprueba el front matter. Hacen falta `titulo_pagina`, `descripcion` y `fecha` (AAAA-MM-DD, la de publicación). Los demás campos del borrador (`id`, `estado`, `tanda`…) se pueden dejar: no se publican.
3. Si quieres que la guía ocupe un sitio concreto dentro de su sección, añade su slug en `_data/secciones.yml`. Si no, aparece al final de la sección.
4. Abre un pull request. GitHub construye la web para comprobar que todo compila. Al fusionar, se publica.

No hace falta tocar nada más. La portada («N guías en N temas», «Lo último»), el índice, la página de la sección, el bloque «Siguiente en…» de todos los artículos de la sección y `sitemap.xml` se generan solos.

## Formato del artículo

```markdown
---
titulo_pagina: "Diez claves frente al racismo en Internet · Diez Claves"
descripcion: "Entradilla de 120 a 155 caracteres. Es la meta descripción y la que se ve bajo el título."
fecha: 2026-11-12
---

# Diez claves frente al racismo en Internet

Entradilla (el mismo texto que «descripcion»).

Párrafos de introducción, si los hay.

## Primera clave

Texto de la clave.

## … hasta la décima clave

| Qué necesitas | Dónde empezar |
|---|---|
| Comprobar una afirmación | Fuente, fecha y población |

## Por dónde empezar

Cierre. Cualquier título vale: la sección número 11 es el cierre.

Revisado el 12 de noviembre de 2026. Fuentes: [Organismo, página](https://…) · [Otro](https://…).

## Para ponerlo en práctica

Frase de introducción.

- **Producto o servicio gratuito.** Para qué sirve.
- [Lector de tarjetas USB](tienda:lector+tarjetas+inteligentes+usb) Para qué sirve.

## Sigue leyendo

- [Protege tu identidad](/articulos/privacidad/proteger-tu-identidad.html)
- [Generador de contraseñas](/generador.html)
```

Reglas que aplica la web al construir:

- Las 10 primeras secciones `##` son las claves; la 11.ª, el cierre. «Para ponerlo en práctica» y «Sigue leyendo» se reconocen por su título y son opcionales. Si un artículo no tiene 10 claves, la construcción avisa.
- El párrafo del cierre que empieza por «Revisado» sale en gris.
- `tienda:` crea un enlace de producto que `region.js` adapta a la tienda del país del lector (`?pais=`). Si la guía tiene alguno, el aviso de afiliación lo dice; si no, dice que no hay enlaces a tiendas. Los párrafos que empiezan por «No hay acuerdos» se omiten (son notas del borrador).
- Los enlaces internos pueden ir en el formato antiguo (`https://diezclaves.com/articulos/<slug>.html`): se convierten a la ruta con sección.
- Los enlaces externos llevan `rel="noopener"` automáticamente.
- El título en grande resalta lo que va detrás de «Diez claves». Para resaltar otra parte, indica `destacado: "texto exacto del título"`.
- Si no indicas `minutos`, el tiempo de lectura se calcula (200 palabras por minuto).

Campos opcionales del front matter:

| Campo | Para qué |
|---|---|
| `actualizado` | Fecha de la última revisión (va al JSON-LD y al sitemap). Si falta, es `fecha`. |
| `minutos` | Minutos de lectura, si no quieres el cálculo automático. |
| `destacado` | Parte del título que va resaltada. |
| `titulo_compartir` | Título para redes y buscadores, si es distinto del titular. |
| `imagen` | Imagen para redes, por ejemplo `/assets/articulos/vpn.webp`. Por defecto `/assets/og.png`. |
| `variantes`, `pais` | Versiones por país de una misma guía (ver `_data/variantes.yml`). |

Se puede usar HTML dentro del Markdown cuando haga falta algo especial, y añadir una clase a un párrafo con `{: .muted}` en la línea siguiente.

## Páginas especiales

`articulos/acoso/donde-pedir-ayuda.html` está escrita en HTML. Su cabecera (título, fecha, descripción) va en el front matter y el resto se edita como HTML.

## Probar en local

Con Ruby 3 instalado:

```
bundle install
bundle exec jekyll serve
```

y abre `http://localhost:4000`. La web construida queda en `_site/`, que no se sube al repositorio.

## Dónde está cada cosa

| Fichero | Qué es |
|---|---|
| `_config.yml` | Configuración de Jekyll. |
| `_data/secciones.yml` | Secciones, su descripción y el orden de las guías. |
| `_data/portada.yml` | Atajos «¿Qué necesitas ahora?» y ruta «Si empiezas de cero». |
| `_data/variantes.yml` | Grupos de versiones por país. |
| `_layouts/` | Plantillas: `articulo`, `articulo_html` y `seccion`. |
| `_includes/` | Trozos comunes: `<head>`, cabecera, pie, «Siguiente en…». |
| `_plugins/diezclaves.rb` | Parte el Markdown en claves y genera listas, páginas de sección y «Siguiente en…». |
| `index.html`, `articulos/index.html`, `sitemap.xml` | Portada, índice y sitemap, con plantilla. |
| `generador.html`, `medidor.html`, `aviso-legal.html`, `privacidad.html` | HTML tal cual; Jekyll los copia sin tocarlos. |
| `herramientas/migracion/` | Scripts usados para pasar de HTML a Markdown y comprobar que la web generada es igual. |
