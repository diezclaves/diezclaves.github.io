# Diez Claves

Herramientas de seguridad digital en español, para cualquier persona. Un proyecto de Gofio Design.

## Generador de claves

`generador.html` genera frases de palabras y contraseñas en español, con ñ, tildes y diéresis.

- Todo ocurre en el navegador. La página lleva una política de seguridad de contenido que impide cualquier conexión: ni servidor, ni fuentes externas, ni analítica.
- El azar procede del generador criptográfico del navegador (`crypto.getRandomValues`).
- Es un único archivo, sin dependencias. Se puede guardar y usar sin conexión.

## Diccionario

Las palabras proceden del diccionario de español del proyecto RLA-ES, el que distribuye LibreOffice
(<https://github.com/LibreOffice/dictionaries/tree/master/es>), publicado bajo licencia GPL 3, LGPL 3 o MPL 1.1, a elegir.
Se usan las formas base, sin nombres propios ni siglas, y se han apartado las palabras malsonantes más fuertes.

La lista del modo gamberro es propia de este proyecto.
