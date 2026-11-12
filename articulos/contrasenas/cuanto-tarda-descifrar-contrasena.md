---
titulo_pagina: "Diez claves sobre cuánto tarda en descifrarse una contraseña · Diez Claves"
descripcion: "Bits, fuerza bruta, diccionarios, filtraciones, cómo la guarda el servicio y qué pasa con el ordenador cuántico: lo que de verdad decide cuánto aguanta una contraseña."
fecha: 2026-11-11
minutos: 8
destacado: "cuánto tarda en descifrarse"
---

# Diez claves sobre cuánto tarda en descifrarse una contraseña

Bits, fuerza bruta, diccionarios, filtraciones, cómo la guarda el servicio y qué pasa con el ordenador cuántico: lo que de verdad decide cuánto aguanta una contraseña.

«Tardarían 300 años en descifrarla» es una frase que aparece en muchos medidores y que casi nunca viene con la letra pequeña. Estas diez claves son la letra pequeña.

## Se mide en bits, y cada bit dobla el trabajo

La fuerza de una contraseña se expresa en bits de entropía: cuántas contraseñas distintas podría haber generado el mismo método. 40 bits son un billón de posibilidades; 41, el doble; 50, mil veces más que 40. Por eso los tiempos de la tabla crecen tan deprisa.

## Por internet, casi nadie puede probar muchas

Si el atacante teclea contraseñas en la web del banco, el servicio le frena: bloquea tras unos fallos o le obliga a esperar. A diez intentos por segundo, hasta una contraseña mediana aguanta siglos. El peligro ahí no es la fuerza bruta: es que la contraseña sea de las comunes y acierte a la primera.

## El ataque serio es con la base de datos robada

Cuando una web sufre una filtración, el atacante se lleva la copia cifrada de las contraseñas y la ataca en su propio ordenador, sin límite de intentos. Entonces sí cuenta la velocidad: una gráfica de gama alta prueba decenas de miles de millones de candidatos por segundo contra una contraseña guardada con un algoritmo rápido.

## Cómo la guarda el servicio cambia el resultado un millón de veces

Con MD5 o SHA-256 sin más, la gráfica va a toda velocidad. Con bcrypt o Argon2, diseñados para ser lentos a propósito, prueba decenas de miles por segundo, no miles de millones. La misma contraseña aguanta segundos o siglos según esta decisión del servicio, que tú no controlas. Por eso la longitud es tu única defensa segura.

## Primero prueban lo que ya saben

Nadie empieza por la fuerza bruta. Se prueban primero las contraseñas de filtraciones anteriores, los diccionarios de todos los idiomas, nombres, fechas, equipos de fútbol, y combinaciones de todo eso con números y símbolos al final. Si tu contraseña está en una de esas listas, el tiempo es cero.

## Cambiar la a por un 4 no engaña a nadie

Las sustituciones habituales (a→4, e→3, i→1, o→0, s→5) están en las reglas de todos los programas de ataque. «P4ssw0rd» cae tan rápido como «Password». Lo que el atacante no tiene de serie son las palabras en español con tilde y la ñ; de ahí la ventaja del [generador](/generador.html).

## Una palabra con un número detrás es una palabra

«Elefante1985» parece larga, pero para el ataque es una palabra del diccionario más un año: dos piezas de las primeras que se prueban. Una frase de cuatro palabras al azar sin relación entre sí («Leña-Cigüeña-Ámbar-Podón») son cuatro piezas de entre 50.000 cada una: 60 bits solo con eso.

## La longitud gana a la complejidad

Ocho caracteres de todos los tipos dan unos 52 bits. Dieciséis letras minúsculas dan 75. Añadir un carácter multiplica; cambiar un tipo por otro, apenas. Antes de complicarla, alárgala. Lo ideal es las dos cosas: larga y variada, como una frase de palabras con un número y un símbolo.

## ¿Y el ordenador cuántico?

Hoy no existe ninguno capaz de esto. En teoría, el algoritmo de Grover reduciría los bits efectivos a la mitad: una contraseña de 100 bits se comportaría como una de 50. La regla práctica, si quieres prepararte: dobla los bits. Una frase de ocho palabras del diccionario pasa de 125 bits a 62 efectivos, que siguen siendo muchos.

## Qué tiempo es «suficiente»

Depende de qué protege. Para un foro, 50 bits. Para el correo, el banco y el gestor, 80 o más, y además doble factor, que vuelve irrelevante el tiempo de descifrado. Mide la tuya en el [medidor](/medidor.html): te da los bits, los fallos y la tabla de tiempos completa.

## La tabla que lo resume

| Bits | Ejemplo | Gráfica potente, guardada mal | Igual, guardada bien |
|---|---|---|---|
| 30 | Palabra y dos cifras | al instante | 7 horas |
| 50 | 8 caracteres variados | 16 horas | 900 años |
| 70 | 4 palabras al azar | 1.900 años | más de un millón de años |
| 100 | 6 palabras con número y símbolo | más que la edad del universo | más que la edad del universo |

Tiempos estimados a 10.000 millones de intentos por segundo (guardada mal) y 20.000 (guardada bien), acertando a mitad de camino. Son órdenes de magnitud, no cifras exactas.
{: .muted}

## Para ponerlo en práctica

- [Llave de seguridad FIDO2](tienda:llave+seguridad+fido2+usb+c+nfc) El doble factor que hace irrelevante el tiempo de descifrado: sin la llave, la contraseña no sirve.

## Sigue leyendo

- [Medidor de contraseñas](/medidor.html)
- [Diez claves sobre la ñ y las tildes en las contraseñas](/articulos/contrasenas/ene-y-tildes-en-contrasenas.html)
- [Diez claves para elegir gestor de contraseñas](/articulos/contrasenas/elegir-gestor-de-contrasenas.html)
