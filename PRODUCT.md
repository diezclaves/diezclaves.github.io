# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Una persona adulta, en cualquier país de habla hispana, con poca o media soltura digital. Llega con una duda concreta («¿puedo poner la ñ en la contraseña?», «me han robado el móvil», «cómo saco el certificado digital») y quiere resolverla sin que le hablen como a un técnico ni como a un niño. Lee en el móvil, a menudo de pie y a veces con prisa; a menudo llega desde un buscador.

No es para profesionales de la seguridad, empresas ni administradores de sistemas.

## Product Purpose

Diez Claves (diezclaves.com) ofrece herramientas y guías de seguridad digital en español, para cualquier persona, que funcionan en el navegador sin enviar nada a nadie. Es un proyecto de Gofio Design (Lanzarote, Canarias).

Hay éxito cuando:
- quien llega con una duda la resuelve en esa misma visita;
- los artículos aparecen en los buscadores cuando alguien busca su duda (medido solo con Search Console, porque la web no tiene analítica);
- la gente usa el generador y el medidor, y vuelve a ellos;
- los bloques «Para ponerlo en práctica» generan ingresos de afiliación cuando haya acuerdos, sin romper las promesas.

## Positioning

Seguridad digital explicada en español llano, con variantes por país (tratamiento y vocabulario de cada uno), y herramientas que no envían nada: sin terceros, sin cuentas, sin cookies y con el código a la vista. Todos los artículos de fondo siguen el formato fijo de «diez claves».

## Operating Context

- Lectura en el móvil, con prisa, a menudo con la duda en caliente (un robo, un fraude, un trámite).
- Entrada habitual desde buscadores; `?pais=<código>` adapta la versión por país.
- Herramientas: `generador.html` (contraseñas y frases con ñ y tildes) y `medidor.html` (medidor de contraseñas), que funcionan dentro del navegador.
- Artículos en `articulos/<seccion>/<slug>.html`, con nueve secciones; las direcciones antiguas redirigen a las nuevas. Estructura en `docs/estructura-articulos.md`.

## Capabilities and Constraints

- HTML estático publicado con GitHub Pages; sin paso de compilación.
- La política de seguridad de contenido bloquea cualquier recurso de terceros: nada de fuentes, scripts, imágenes ni analítica externas. Solo fuentes del sistema o archivos alojados en el propio sitio.
- No se recogen datos: sin formularios, sin cuentas, sin cookies.
- Tema claro y oscuro.
- No es un gestor de contraseñas, no guarda nada, no da soporte técnico ni asesoría legal y no sustituye a las fuentes oficiales.
- Sin decidir: ningún acuerdo de afiliación está activo todavía.

## Brand Commitments

- Nombre: «Diez Claves», siempre con «Diez» en letra. Tagline: «Recetas con ñ.» Descriptor: «Seguridad digital en español» (no se muestra en la portada). Firma: «Un proyecto de Gofio Design».
- Las tres promesas no se negocian: sin terceros, para cualquiera, código a la vista.
- La voz y las reglas de redacción de `docs/identidad-diezclaves.md` (secciones 3, 4, 7 y 8) son vinculantes: tú (o vos según el país), nunca usted; frases cortas; sin alarmismo; sin jerga sin explicar; honestidad por delante.
- Identidad visual abierta a rediseño: la paleta, la tipografía, el icono y los elementos visuales que describe `docs/identidad-diezclaves.md` (sección 5) son el sistema actual, no un compromiso fijo. Un rediseño puede sustituirlos, siempre dentro de la restricción de no usar recursos de terceros.

## Evidence on Hand

- 96 guías publicadas en 9 secciones, más 19 guías de identidad digital por país.
- Generador y medidor de contraseñas funcionando; diccionario de RLA-ES (LibreOffice) en `assets/diccionario.js`.
- Una única imagen genérica para compartir (`assets/og.png`); todavía no hay imagen por artículo.
- No hay testimonios, cifras de uso, opiniones de lectores ni acuerdos de afiliación: no se deben inventar.

## Product Principles

1. La duda del lector se resuelve primero; todo lo demás va después.
2. Ninguna mejora justifica romper una promesa: sin terceros, sin datos, código a la vista.
3. Decir lo que es: qué pasa y qué hacer, sin miedo como argumento y sin vender lo que no hace falta.
4. Para cualquiera de verdad: lenguaje llano, accesible y cómodo en un móvil con prisa.
5. Solo lo que tiene fuente: nada sobre trámites, precios o leyes sin fuente oficial y fecha de revisión.

## Accessibility & Inclusion

Nivel obligatorio: WCAG 2.2 AAA. Uso completo con teclado y lector de pantalla, letra grande, tema claro y oscuro, y lenguaje llano para personas con poca soltura digital.
