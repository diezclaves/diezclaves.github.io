---
titulo_pagina: "Diez claves para entender cómo entramos hoy en las cuentas: de la contraseña a la passkey · Diez Claves"
descripcion: "De la contraseña de 1961 a la passkey de 2022: qué fallo arregla cada sistema de acceso, qué protege cada uno y cuál activar en cada cuenta."
fecha: 2026-11-11
minutos: 9
destacado: "cómo entramos hoy en las cuentas"
titulo_compartir: "Diez claves para entender cómo entramos hoy en las cuentas: de la contraseña a la passkey"
---

# Diez claves para entender cómo entramos hoy en las cuentas

De la contraseña de 1961 a la passkey de 2022: qué fallo arregla cada sistema de acceso, qué protege cada uno y cuál activar en cada cuenta.

Las contraseñas tienen más de sesenta años y siguen aquí, pero ya no están solas. Cada capa nueva apareció para tapar un fallo de la anterior. Entender ese recorrido es la mejor forma de saber qué activar en cada cuenta y por qué.

## 1961: algo que sabes

Las primeras contraseñas informáticas se usaron en un ordenador compartido del MIT para que cada persona tuviera sus propios archivos. El primer robo llegó enseguida: un usuario imprimió el archivo donde estaban todas. Desde entonces el problema es el mismo: la contraseña se guarda en algún sitio, y ese sitio se puede robar.

## Años setenta: no guardar la contraseña, sino una huella de ella

Un *hash* es una huella matemática de la que no se puede volver atrás, con una «sal» aleatoria por usuario para que dos contraseñas iguales no se parezcan en la base de datos. Hoy los algoritmos buenos (bcrypt, Argon2) son además lentos a propósito. El [medidor](/medidor.html) muestra la diferencia: la misma contraseña aguanta siglos o segundos según cómo la guarde el servicio.

## Algo que tienes: el doble factor

Ningún hash arregla que la contraseña se adivine, se repita o se entregue a una web falsa. El doble factor añade un aparato: las empresas usaban desde los ochenta llaveros con un número cambiante; la versión para todos llegó con el código por SMS.

## El SMS fue el primero y es el más flojo

Viaja por una red pensada en los años noventa, se puede desviar con un duplicado de SIM y se le puede pedir a la víctima con un simple «dinos el código que te acaba de llegar». Mejor que nada; peor que todo lo que vino después.

## 2011: apps de códigos (TOTP)

Google Authenticator, Aegis, Ente Auth y otras usan un estándar abierto: la app y el servicio comparten un secreto y generan el mismo número de seis cifras cada 30 segundos, sin red. Ya no se puede desviar, pero sigue siendo un número que una persona puede teclear en una web falsa.

## Las notificaciones y la fatiga

«¿Estás intentando entrar? Sí / No» es más cómodo, con un fallo propio: si te llegan veinte seguidas a las tres de la mañana, acabas pulsando «sí» para que paren. Se ha usado en ataques reales contra empresas.

## 2014-2019: la llave física que no se deja engañar

Las llaves FIDO (YubiKey, Nitrokey) firman el inicio de sesión con una clave que nunca sale de ellas, y en la firma va el nombre del sitio. Si estás en una web que imita a tu banco, la firma no sirve aunque no hayas notado la diferencia. Es la primera defensa que vence al phishing por diseño, no por atención del usuario. El estándar empezó como U2F en 2014 y los navegadores lo adoptaron como WebAuthn en 2019.

## 2022: la passkey, la llave está en tu móvil

Es lo mismo que la llave física, pero guardada en el teléfono, el ordenador o el gestor, y protegida por el bloqueo del aparato. No hay nada que teclear ni recordar, no se puede filtrar porque el servicio solo guarda la parte pública, y no funciona en una web falsa. Apple, Google y Microsoft las adoptaron a la vez en 2022. Sus límites: no todos los servicios las ofrecen aún y, si pierdes todos tus aparatos, necesitas otra vía de entrada.

## El otro camino: que una sola cuenta responda por ti

El inicio de sesión único: «Iniciar sesión con Google / Apple», sobre estándares abiertos (OAuth, OpenID Connect). En España, Cl@ve, el certificado digital y el DNI electrónico son la versión pública para todas las administraciones. Menos contraseñas y una cuenta central mejor vigilada, a cambio de un único punto de fallo que hay que proteger con lo mejor que haya.

## Qué protege cada uno, en una tabla

| Sistema | Contraseña filtrada | Web falsa | Duplicado de SIM | Pierdes el aparato |
|---|---|---|---|---|
| Solo contraseña | No | No | No le afecta | No le afecta |
| Contraseña + SMS | Sí | No | No | Recuperable con la SIM |
| Contraseña + app de códigos | Sí | No | Sí | Necesitas códigos de recuperación |
| Contraseña + notificación | Sí | A medias | Sí | Necesitas otra vía |
| Llave física | Sí | Sí | Sí | Necesitas una segunda llave |
| Passkey | Sí | Sí | Sí | Copia en la nube o en el gestor |

## Entonces, ¿qué activo?

Correo, banco y la cuenta de Google o Apple: passkey o llave física si lo ofrecen; si no, app de códigos; nunca solo SMS si hay alternativa. Todo lo demás: contraseña única en un gestor y el doble factor que haya. Y siempre, los códigos de recuperación en papel y una segunda vía antes de que haga falta.

Las fechas son las de publicación de cada estándar o anuncio; la adopción real fue, en todos los casos, años después. Qué métodos ofrece cada servicio cambia con frecuencia.
{: .muted}

## Para ponerlo en práctica

- [Llave de seguridad FIDO2 (USB-C y NFC)](tienda:llave+seguridad+fido2+usb+c+nfc) Vale para el ordenador y para el móvil. Es el doble factor que resiste a las webs falsas. Compra dos.
- [Lector de DNI electrónico](tienda:lector+dni+electronico+usb) Si vas a usar el DNIe para la administración desde el ordenador. Los móviles con NFC no lo necesitan.

## Sigue leyendo

- [Diez claves sobre tu correo y tu usuario](/articulos/contrasenas/identificadores-y-contrasenas.html)
- [Diez claves para usar Cl@ve, el certificado digital y el DNIe](/articulos/tramites/clave-certificado-digital-dnie.html)
- [Medidor de contraseñas](/medidor.html)
