# Estructura de los artículos

Pensada para crecer a cientos de artículos sin cambiar URL. Definida el 12 de noviembre de 2026, antes de que la web esté indexada.

## Regla de URL

`/articulos/<seccion>/<slug>.html`

- **Sección:** una carpeta por temática amplia. Cada artículo pertenece a una sola sección. Cada sección tiene su página `index.html`, que lista sus guías.
- **Slug:** único en toda la web, aunque las secciones sean distintas. Va en minúsculas, sin tildes ni ñ, con palabras separadas por guiones, y cuantas menos palabras mejor (de 2 a 6). No lleva fechas ni números de tanda. Que sea único permite cambiar un artículo de sección sin tener que renombrarlo.
- **Variantes por país:** son artículos de la misma sección, con el país como sufijo. Por ejemplo, `identidad-digital-peru.html`. Se enlazan entre sí con `data-variantes`.
- **Otros idiomas, en el futuro:** un prefijo de idioma (`/en/...`) con las mismas secciones traducidas. No se mezclan idiomas en una misma carpeta.
- No se crean subcarpetas dentro de una sección. Si una sección pasa de unos 60 artículos, se divide en dos secciones hermanas.

## Secciones

| Carpeta | Nombre | Qué entra |
|---|---|---|
| `contrasenas` | Contraseñas y cuentas | Contraseñas, gestores, passkeys, doble factor, cuentas robadas |
| `dispositivos` | Móvil y dispositivos | Móvil, ordenador, router, permisos, copias, sistemas alternativos, depender menos de Google |
| `privacidad` | Privacidad al navegar | Navegadores, cookies, huella digital, incógnito, rastreo |
| `conexion` | Conexión: DNS, VPN y Tor | DNS, VPN, wifi, Tor, Tails, P2P, ataques de intermediario |
| `amenazas` | Programas maliciosos | Virus, troyanos, ransomware, botnets, gusanos, honeypots |
| `tramites` | Identidad digital y trámites | Certificado digital, DNIe, identidad digital por país |
| `fraudes` | Fraudes y engaños | Phishing, vishing, smishing, QR, ingeniería social, suplantación |
| `redes-sociales` | Redes sociales | Algoritmos, granjas de bots, desinformación |
| `acoso` | Abusos y acoso | Abusos, odio, racismo, ciberacoso, protección de menores; incluye la página «Dónde pedir ayuda, por país» |

Secciones previstas, que se crean al publicar su primer artículo:

| Carpeta | Nombre | Qué entra |
|---|---|---|
| `bienestar` | Bienestar digital y familias | Salud mental, sueño, pantallas por edad, juegos |

## Al publicar un artículo

1. Elegir la sección de la tabla. Si no encaja en ninguna, proponer una nueva antes de publicar.
2. Crear `articulos/<seccion>/<slug>.html` con canonical, `og:url` y `mainEntityOfPage` apuntando a esa URL.
3. Escribir en la línea `meta` el enlace a la sección.
4. Añadirlo a `articulos/<seccion>/index.html`, al índice general si procede y a `sitemap.xml`.
5. Los enlaces internos siempre con la ruta completa (`/articulos/<seccion>/<slug>.html`).

## País de entrada

Cualquier URL admite `?pais=<código>`, por ejemplo `?pais=mx`. Al entrar, `region.js` guarda ese país, quita el parámetro de la barra de direcciones y aplica la tienda y el código de afiliado de ese país en todas las páginas de la visita. Las URL de los artículos no cambian, así que no hay contenido duplicado. Los códigos son los de `REGIONES` en `assets/region.js`: `es`, `ic`, `mx`, `ar`, `us`…

## Portada, índice y secciones

La portada, el índice de artículos, las páginas de sección y el bloque «Siguiente en esta sección» de cada artículo se generan a partir de la lista de secciones. Después de publicar artículos nuevos, hay que volver a generarlos para que aparezcan en todas partes.
