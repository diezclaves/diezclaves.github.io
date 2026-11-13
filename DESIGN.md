---
name: Diez Claves
description: Seguridad digital en español, dibujada a rotulador. Recetas con ñ.
colors:
  papel: "#ffffff"
  tinta: "#161616"
  tinta-suave: "#404040"
  trazo-fino: "#c9c9c4"
  rotulador-limon: "#ffe45c"
  rotulador-chicle: "#ff8fb8"
  rotulador-turquesa: "#3cc6b5"
  naranja-butano: "#ffab57"
  lavanda: "#c5a6ff"
  lima: "#b9e35d"
  coral: "#ff8d7a"
  celeste: "#86c8ff"
  melocoton: "#ffc8a0"
  menta: "#93e8c9"
  verde-botella: "#0b5f57"
  verde-bien: "#145c35"
  ocre-aviso: "#7a4a00"
  pizarra: "#151515"
  pizarra-hoja: "#1d1d1d"
  pizarra-bloque: "#262624"
  tiza: "#f4f4f0"
  tiza-suave: "#c8c8c2"
  trazo-fino-noche: "#4a4a46"
typography:
  display:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, Chalkboard SE, system-ui, sans-serif"
    fontSize: "clamp(38px, 10.5vw, 74px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, Chalkboard SE, system-ui, sans-serif"
    fontSize: "clamp(32px, 8vw, 52px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, Chalkboard SE, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, Chalkboard SE, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 800
    lineHeight: 1.25
  lede:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(18px, 4.4vw, 21px)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.4
  tag:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, Chalkboard SE, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1.2
  clave:
    fontFamily: "ui-monospace, Cascadia Mono, SF Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(19px, 5vw, 26px)"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  trazo-1: "255px 14px 225px 14px / 14px 225px 14px 255px"
  trazo-2: "14px 225px 14px 255px / 255px 14px 225px 14px"
  trazo-3: "225px 18px 255px 12px / 12px 255px 18px 225px"
  circulo-a-mano: "50% 45% 52% 48% / 48% 52% 45% 50%"
  codigo: "5px"
  selector: "10px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "18px"
  xl: "22px"
  seccion: "36px"
  margen: "16px"
components:
  button-primary:
    backgroundColor: "{colors.rotulador-limon}"
    textColor: "{colors.tinta}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.trazo-1}"
    padding: "12px 20px"
    height: "48px"
  button-ghost:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.trazo-1}"
    padding: "12px 20px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.rotulador-limon}"
    textColor: "{colors.tinta}"
  cta:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.trazo-1}"
    padding: "13px 18px 13px 22px"
    height: "52px"
  chip:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.trazo-1}"
    padding: "8px 16px"
    height: "44px"
  chip-active:
    backgroundColor: "{colors.rotulador-turquesa}"
    textColor: "{colors.tinta}"
  ficha-seccion:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.trazo-1}"
    padding: "16px 18px"
  numero-clave:
    backgroundColor: "{colors.rotulador-limon}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.trazo-1}"
    size: "46px"
  input-buscar:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.trazo-1}"
    padding: "10px 16px"
    height: "52px"
  tag:
    backgroundColor: "{colors.rotulador-chicle}"
    textColor: "{colors.tinta}"
    typography: "{typography.tag}"
    rounded: "{rounded.trazo-3}"
    padding: "2px 8px"
  bloque-pizarra:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.tiza}"
    rounded: "{rounded.trazo-2}"
    padding: "22px 20px"
---

# Design System: Diez Claves

## Overview

**Creative North Star: "El recetario con ñ"**

Diez Claves se ve como un recetario escrito a mano por alguien que sabe del tema y te lo quiere contar bien: papel blanco, tinta de rotulador negra y diez rotuladores fluorescentes para marcar lo importante. Cada guía es una receta con sus diez pasos numerados dentro de un círculo a mano; la portada es el índice del recetario, con los temas unidos a su número de guías por una línea de puntos. Los titulares están rotulados (Shantell Sans 800, alojada en el propio sitio) y el texto de lectura va en la letra del sistema, para que leer en un móvil viejo y con prisa sea cómodo.

Todo está dibujado, nada está ilustrado. Los recuadros tienen esquinas irregulares de trazo grueso, las fichas se inclinan un grado al pasar el ratón y se rellenan con su rotulador, y las flechas son trazos SVG que se dibujan solos. La personalidad está en el trazo, no en dibujos añadidos: no hay mascotas, ni fotos de archivo, ni iconos de seguridad. La densidad es de lectura: una columna de 720 px para los artículos y un índice ancho de 1080 px para la portada.

El sistema rechaza la estética de «ciberseguridad»: candados, escudos, hackers con capucha y paletas azul marino nocturnas. La seguridad se explica en una cocina, no en un centro de operaciones.

**Key Characteristics:**
- Papel blanco puro y tinta casi negra; en oscuro, pizarra y tiza.
- Diez rotuladores fluorescentes, todos con contraste AAA bajo la tinta negra.
- Titulares rotulados a mano; lectura en la letra del sistema.
- Esquinas irregulares en tres variantes que se alternan.
- Profundidad con trazo, relleno de rotulador y pequeños giros, no con sombras.
- WCAG 2.2 AAA en claro y en oscuro.

## Colors

Una paleta de papel y tinta con diez rotuladores fluorescentes que solo sirven para marcar, rellenar y señalar.

### Primary
- **Rotulador limón** (`rotulador-limon`): el rotulador principal. Subraya a doble trazo la parte clave del titular, rellena el botón principal, la ñ de la marca, la selección de texto y el estado activo de la navegación. Es el color por defecto de cualquier relleno al pasar el ratón.

### Secondary
- **Rotulador chicle** (`rotulador-chicle`): lo urgente y lo nuevo. Marca el carril «¿Te acaba de pasar?», la franja de «¿Ya has caído?», las etiquetas («Sigue leyendo», «nuevo», «En preparación») y lo pendiente.
- **Rotulador turquesa** (`rotulador-turquesa`): el subrayado de los enlaces (3 px), el halo del foco, las viñetas de las listas y el cierre de cada artículo.

### Tertiary
Los otros siete rotuladores completan la serie de diez: **Naranja butano** (`naranja-butano`), **Lavanda** (`lavanda`), **Lima** (`lima`), **Coral** (`coral`), **Celeste** (`celeste`), **Melocotón** (`melocoton`) y **Menta** (`menta`). Cada elemento de una serie (viñetas, pasos, claves, «Lo último») recorre los diez en orden, y cada tema tiene su rotulador fijo allá donde aparezca: contraseñas limón, dispositivos chicle, privacidad turquesa, amenazas naranja butano, redes sociales lavanda, trámites lima, fraudes coral, conexión celeste, acoso menta.

### Neutral
- **Papel blanco** (`papel`): fondo y superficie en claro. No hay grises de fondo; el papel es blanco puro.
- **Tinta de rotulador** (`tinta`): texto, trazos de los recuadros, reglas gruesas de cabecera y pie, y la tinta que va siempre encima de un rotulador. También es el fondo del bloque pizarra en claro.
- **Tinta suave** (`tinta-suave`): entradillas de fichas, metadatos y textos secundarios (AAA sobre papel).
- **Trazo fino** (`trazo-fino`): separadores finos de tablas, bordes de `code` y filas de cuaderno.
- **Verde botella** (`verde-botella`), **verde bien** (`verde-bien`) y **ocre aviso** (`ocre-aviso`): acentos de texto y estados del generador y el medidor, todos AAA sobre papel. Uso escaso.
- **Pizarra** (`pizarra`), **pizarra hoja** (`pizarra-hoja`) y **pizarra bloque** (`pizarra-bloque`): fondo, superficies y bloque oscuro del tema oscuro.
- **Tiza** (`tiza`), **tiza suave** (`tiza-suave`) y **trazo fino de noche** (`trazo-fino-noche`): texto, texto secundario y separadores en oscuro.

### Named Rules
**La regla del rotulador detrás.** Un rotulador nunca es color de texto sobre papel: va detrás de la tinta negra, como relleno, subrayado de doble trazo o borde. Si algo lleva texto encima de un rotulador, ese texto es `tinta`, en claro y en oscuro.

**La regla de la pizarra.** En oscuro, los subrayados de fondo a doble trazo pasan a ser subrayados de línea (`text-decoration`, 4–5 px, del color del rotulador), porque un relleno fluorescente sobre pizarra deslumbra. Los rellenos de botones y fichas al pasar el ratón se mantienen, con tinta negra encima.

**La regla del color fijo.** Cada tema tiene un único rotulador en toda la web: en la portada, en el índice, en las fichas y en el título de su sección. No se reasigna por estética.

## Typography

**Display Font:** Shantell Sans 800, alojada en `/assets/fonts/` (con Comic Sans MS, Segoe Print y Chalkboard SE de respaldo)
**Body Font:** la letra del sistema (`system-ui`, -apple-system, Segoe UI, Roboto)
**Label/Mono Font:** la monoespaciada del sistema (`ui-monospace`, Cascadia Mono, SF Mono), solo para contraseñas y frases generadas

**Character:** un rotulador gordo para titular y la letra de siempre para leer. Shantell da la voz de alguien que escribe a mano; la letra del sistema garantiza la lectura cómoda, rápida y sin descargas en cualquier móvil.

### Hierarchy
- **Display** (800, `clamp(38px, 10.5vw, 74px)`, 1.02): solo el titular de la portada, con 13 caracteres de ancho como máximo.
- **Headline** (800, `clamp(32px, 8vw, 52px)`, 1.05): el `h1` de artículos, índices y herramientas, con `text-wrap: balance`. Una parte del titular va subrayada con rotulador limón.
- **Title** (800, 24px, 1.2): `h2` de sección. Los de cada clave en un artículo bajan a 21px.
- **Subtitle** (800, 19px, 1.25): `h3`, nombres de fichas, enlaces de listas y botones (16–18px).
- **Lede** (400–600, `clamp(18px, 4.4vw, 21px)`, 1.45): entradilla bajo el titular, 58 caracteres de ancho como máximo.
- **Body** (400, 17px, 1.55): texto de lectura, con 68 caracteres de ancho como máximo (64 dentro de una clave).
- **Label** (400, 14–15px): metadatos, notas y avisos, en tinta suave. Las etiquetas rotuladas (`tag`) van en Shantell 800 a 13px sobre rotulador chicle.

### Named Rules
**La regla de las dos letras.** Shantell solo titula, numera y etiqueta: nunca escribe un párrafo. El texto de lectura siempre va en la letra del sistema.

**La regla de una sola descarga.** Solo se aloja un archivo de letra (Shantell Sans 800, subconjunto latino). No se añade otro peso, otra familia ni una fuente externa.

## Layout

Una columna centrada con 16 px de margen lateral. Los artículos, las herramientas y las páginas legales usan 720 px de ancho como máximo; la portada y los índices se abren a 1080 px. Las secciones de una página se separan con 36 px y los elementos dentro de un bloque con 14 px.

Todo se diseña primero para el móvil, con un único salto importante a 860 px: la portada pasa de una columna a una rejilla de dos (titular y servilleta), las viñetas de 2 a 4 columnas, el carril urgente a 4 columnas separadas por rayas discontinuas y el índice de temas a dos columnas. Las rejillas de fichas usan `auto-fill` con mínimos de 220, 300 o 420 px. Por debajo de 560 px, el número de cada clave se coloca al lado del título y el texto ocupa todo el ancho.

Los separadores son de rotulador: 3 px continuos bajo la cabecera y sobre el pie, 2–3 px discontinuos entre temas y filas del índice, y una línea de puntos de 4 px entre el nombre del tema y su número de guías. Todos los objetivos táctiles miden 44 px como mínimo (48–52 px en botones y campos).

## Elevation & Depth

El sistema es plano: papel y tinta. La profundidad no viene de sombras, sino de lo que haría un rotulador: trazos gruesos (2,5–4 px), rellenos de color al pasar el ratón, giros de medio a dos grados, y tiras de cinta adhesiva de colores pegadas en la esquina de un recuadro. Cada elemento de una serie lleva su propio rotulador de los diez, y eso basta para separar unas fichas de otras sin levantar nada del papel.

### Shadow Vocabulary
- **Pegatina** (`box-shadow: 3px 3px 0 -0.5px var(--slab-ink), 3px 3px 0 1.5px var(--on-hl)`): sombra dura desplazada, solo en el botón principal amarillo, como un recorte pegado.
- **Tarjeta flotante** (`box-shadow: 0 14px 36px rgba(0,0,0,.28)`): solo en la tarjeta de región fija en la parte inferior, la única pieza que flota sobre el contenido.
- **Franja interior** (`box-shadow: inset 0 6px 0 var(--rotulador-chicle)`): borde superior rosa de la caja «¿Ya has caído?».
- **Halo de foco** (`outline: 3px solid tinta; box-shadow: 0 0 0 7px rotulador-turquesa`): foco de teclado en todo el sitio.

### Named Rules
**La regla del papel plano.** Nada flota salvo la tarjeta de región. Si un elemento necesita destacar, se rellena con su rotulador o se le engorda el trazo; no se le añade sombra.

## Shapes

Ninguna esquina es recta ni redonda: todas parecen trazadas a mano. Hay tres trazos de esquina irregular (`trazo-1`, `trazo-2`, `trazo-3`, hechos con radios elípticos asimétricos) que se alternan en los elementos vecinos (`nth-child`) para que dos recuadros seguidos nunca tengan la misma forma. Los números van en círculos imperfectos (`circulo-a-mano`), y en la portada cada paso tiene su propio círculo y su propio giro.

Los bordes son de rotulador: 2,5 px por defecto (`--stroke`), 3 px en recuadros destacados y cabecera, y 4 px cuando el borde lleva el color del tema. El trazo discontinuo indica algo secundario o en borrador: la servilleta, el bloque de productos, el índice plegable de claves y la tercera ficha de una serie. La ñ de la marca y de los titulares va dentro de un recuadro de rotulador inclinado unos −5 o −6 grados. Las únicas esquinas suaves y regulares son el `code` en línea (5px) y el selector nativo de país (10px).

## Components

### Buttons
Dibujados y a mano: un recuadro de rotulador que, al tocarlo, se rellena y se mueve un poco.
- **Shape:** esquinas irregulares (`trazo-1`), trazo de 2,5 px en tinta, 48 px de alto como mínimo.
- **Primary:** relleno de rotulador limón, tinta negra, Shantell 800 a 16 px, con la sombra «pegatina». Al pulsar se desplaza 1 px y gira −0,4°.
- **Ghost:** transparente, con trazo y texto del color del fondo contrario. Al pasar el ratón se rellena de limón (sobre papel) o de tiza (sobre pizarra).
- **CTA de portada:** recuadro de papel con trazo de tinta, Shantell 18 px, 52 px de alto. Al pasar el ratón o con el foco se rellena con su rotulador (limón o chicle) y aparece una flecha que entra deslizándose 8 px.
- **Disabled:** sin relleno, trazo discontinuo y texto en tinta suave; nunca baja la opacidad.

### Chips
- **Style:** fichas de tema con borde de 4 px del color fijo del tema, sobre papel, en la letra del sistema a 16px y peso 700, de 44 px de alto.
- **State:** al pasar el ratón, con el foco o en la página actual (`aria-current`), se rellenan con el rotulador del tema y el borde pasa a tinta.

### Cards / Containers
- **Corner Style:** `trazo-1/2/3`, alternados.
- **Background:** papel, salvo el bloque pizarra (tinta con texto de tiza).
- **Shadow Strategy:** ninguna (ver «La regla del papel plano»).
- **Border:** 2,5 px de tinta, o 4 px del color del tema en las fichas de «Sigue leyendo».
- **Internal Padding:** 14–22 px (16 × 18 px es el caso más habitual).
- **Ficha de sección:** número de guías dentro de una pastilla de rotulador a la izquierda, nombre en Shantell 19px y descripción en tinta suave. Al pasar el ratón toda la ficha se rellena con su rotulador, gira −0,6° y la pastilla pasa a papel blanco.
- **Caja con cinta** (`.box`): recuadro con una tira de cinta limón de 46 × 14 px pegada en la esquina superior izquierda a −3°. Si es urgente, la cinta es chicle.

### Inputs / Fields
- **Style:** el buscador es un recuadro de papel con trazo de 2,5 px, esquinas `trazo-1`, letra del sistema a 17px y 52 px de alto; el texto de ejemplo va en tinta suave a opacidad completa.
- **Focus:** contorno de tinta de 3 px más un halo turquesa de 7 px.
- **Controles del generador:** las casillas y deslizadores son nativos, con `accent-color` en tinta; los conmutadores segmentados se rellenan de limón cuando están activos.

### Navigation
- **Cabecera de marca:** llave dibujada (66 px; 80 px en el móvil), «Diez Claves» en Shantell 19px y el lema «Recetas con ñ.» con la ñ en su recuadro limón. Los enlaces de navegación van en la letra del sistema a 15px y peso 700, y la cabecera se cierra con una regla de tinta de 3 px.
- **Estados:** al pasar el ratón, subrayado turquesa de 3 px. La página actual lleva un subrayado limón de doble trazo, que en oscuro pasa a ser un subrayado de línea de 4 px.
- **Móvil:** por debajo de 560 px, la marca va primero y los botones de tema y región se colocan a su lado; los enlaces bajan a 14px.
- **Pie:** una regla de tinta de 3 px y enlaces centrados de 44 px de alto. Al final, el monograma de Gofio Design, con la firma en un bocadillo de tinta al pasar el ratón (y a la vista en las pantallas táctiles).

### Número de clave (Signature)
El número de cada una de las diez claves va en una pastilla de 46 × 46 px (40 en el móvil) rellena con su rotulador de la serie: Shantell 800 a 22px en tinta, trazo de 2,5 px y una de las tres esquinas irregulares. Es la firma del formato «diez claves» y aparece igual en todos los artículos.

### Subrayado de doble trazo (Signature)
Dos degradados lineales desplazados que imitan dos pasadas de rotulador detrás de la tinta (`4%–54%` y `44%–97%`), con `box-decoration-break: clone` para que funcione en varias líneas. Se usa en la parte destacada del titular, en el título de cada tema del índice y en la página actual de la navegación. En oscuro pasa a ser un subrayado de línea (ver «La regla de la pizarra»).

### Servilleta (Signature)
Un recuadro discontinuo, girado +0,6°, con un ejemplo de frase de contraseña en monoespaciada sobre un bloque pizarra; la ñ y las tildes van resaltadas en limón. Es la demostración visual del lema «Recetas con ñ.».

## Do's and Don'ts

### Do:
- **Do** pon siempre tinta negra (`tinta`) encima de cualquier rotulador, en claro y en oscuro.
- **Do** da a cada elemento de una serie su rotulador de los diez, en orden, y a cada tema su rotulador fijo en toda la web.
- **Do** alterna `trazo-1`, `trazo-2` y `trazo-3` entre los recuadros vecinos.
- **Do** rellena con su rotulador cualquier ficha, botón o fila enlazada al pasar el ratón y con el foco, y pasa a papel blanco lo que ya tenía color dentro.
- **Do** limita los giros a ±2° en las fichas (hasta −6° en la ñ y los números), y desactiva giros, transiciones y el trazado de flechas con `prefers-reduced-motion`.
- **Do** cumple el contraste AAA: 7:1 para el texto normal y 4,5:1 para el grande, en los dos temas.
- **Do** aloja en el sitio cualquier letra, imagen o icono nuevo, y dibuja los iconos en SVG en línea con trazo de rotulador.

### Don't:
- **Don't** uses candados, escudos, hackers con capucha, códigos binarios ni paletas azul marino nocturnas para hablar de seguridad.
- **Don't** uses un rotulador como color de texto sobre papel.
- **Don't** escribas un párrafo en Shantell Sans, ni añadas un segundo peso o una segunda familia rotulada.
- **Don't** añadas sombras difusas a recuadros o fichas; la única sombra suave es la de la tarjeta de región.
- **Don't** uses esquinas rectas o redondeadas regulares en botones, fichas o recuadros.
- **Don't** cargues fuentes, scripts, imágenes ni iconos de terceros.
