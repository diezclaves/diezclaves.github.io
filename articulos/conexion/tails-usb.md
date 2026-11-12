---
titulo_pagina: "Diez claves para usar Tails desde un USB · Diez Claves"
descripcion: "Tails es un sistema operativo gratuito que usa Tor y no deja rastros en el ordenador. Cómo instalarlo en una memoria USB, usarlo y conocer sus límites."
fecha: 2026-11-11
minutos: 8
destacado: "Tails desde un USB"
---

# Diez claves para usar Tails desde un USB

Tails es un sistema operativo gratuito que usa Tor y no deja rastros en el ordenador. Cómo instalarlo en una memoria USB, usarlo y conocer sus límites.

Cuando usas un ordenador, el sistema guarda archivos temporales, registros y otros datos de lo que haces. Tails propone otra forma de trabajar: arrancar un sistema operativo desde una memoria USB, usarlo y apagarlo sin que quede nada de la sesión. No sustituye las demás precauciones, pero es útil cuando necesitas reducir los rastros que deja tu actividad en un ordenador.

## Tails es un sistema operativo completo

Son las siglas de *The Amnesic Incognito Live System*. Es gratuito, se basa en Linux y está diseñado para funcionar desde una memoria USB. No es una aplicación: arranca su propio entorno, con navegador, herramientas y configuración de seguridad, pensado para actividades que requieren privacidad y anonimato sin depender de la instalación habitual del ordenador. No todo dispositivo es compatible ni todo funciona igual que en Windows o macOS; mira los requisitos antes de instalarlo.

## Usa Tor para conectarse

Las aplicaciones incluidas que necesitan red usan Tor, y las conexiones que no siguen esa regla se bloquean, para que ningún programa revele la IP de origen. Eso no significa que cualquier programa que instales después funcione de forma segura por Tor, ni elimina la necesidad de tener cuidado con tus cuentas y tus documentos. Tails reduce riesgos concretos; no garantiza anonimato absoluto frente a cualquier vigilancia.

## Arranca desde una memoria USB

Necesitas una memoria USB compatible y un ordenador que permita arrancar desde ella. El proceso: descargar Tails de [tails.net/install](https://tails.net/install/), preparar la memoria siguiendo las instrucciones del proyecto y reiniciar eligiendo el USB. La instalación borra lo que tuviera la memoria, así que no uses una con documentos importantes sin copia. Las instrucciones cambian según tu sistema operativo y tu ordenador.

## No sustituye tu sistema habitual

Tails funciona sin instalarse como sistema principal: arrancas desde el USB, trabajas en Tails, apagas y vuelves a tu ordenador de siempre. Eso permite separar ciertas actividades del entorno cotidiano. No es compatible con todo el hardware y a veces hay que tocar la configuración de arranque; algunos equipos necesitan ajustes. Consulta la documentación de compatibilidad antes de empezar.

## Intenta no conservar nada

Cada sesión empieza limpia. En condiciones normales, lo que haces no se guarda al apagar correctamente, y eso evita los rastros que dejan otros sistemas. No significa que sea imposible recuperar información en cualquier circunstancia, y los rastros externos siguen ahí: lo que guardan los servicios donde te identificas. La amnesia es del entorno local que controla Tails, no de los datos que entregas a terceros.

## Puedes guardar archivos cifrados

Tails permite crear un almacenamiento persistente cifrado en la misma memoria USB, para conservar documentos y configuraciones entre sesiones, protegido con una contraseña (hazla con el [generador](/generador.html)). No todo se puede conservar igual. Y conlleva una decisión: guardar datos es útil, pero esos datos quedan en el USB y tendrás que protegerlos. Úsalo solo cuando de verdad necesites mantener archivos.

## Un ordenador comprometido sigue siendo peligroso

Tails no arregla los problemas del equipo físico. Si el ordenador tiene componentes manipulados, un dispositivo que registra las teclas o ciertas vulnerabilidades de hardware, Tails puede no impedir que se obtenga información. Comprueba que la descarga viene de la fuente legítima y no prepares la memoria en un equipo donde sospeches que hay software malicioso. La seguridad de Tails depende de su diseño y de la confianza que tengas en el ordenador y en los dispositivos.

## Los documentos pueden delatarte

Un archivo normal puede contener datos que no ves: una foto guarda el modelo de cámara y a veces el lugar donde se tomó; un documento de oficina, el nombre del autor y fechas. Tails incluye herramientas para revisar y eliminar metadatos antes de compartir. Aun así, quitar metadatos no garantiza que el contenido no te identifique: una foto puede mostrar un sitio reconocible y un documento, referencias personales. Hay que revisar la información técnica y lo que se ve.

## No mezcles actividades que necesitas separar

Si usas Tails para distintas identidades o actividades, evita que unas se relacionen con otras: entrar en una cuenta personal y después usar otra identidad en la misma sesión crea vínculos. El proyecto recomienda mantener sesiones separadas cuando hay riesgo de vinculación, y puedes usar memorias distintas para actividades que exigen una separación estricta. No todo el mundo necesita varios USB; depende de las consecuencias de que tus actividades queden relacionadas.

## Prepara tu primera sesión

| Qué necesitas | Dónde empezar |
|---|---|
| Comprobar compatibilidad | Requisitos oficiales de Tails |
| Descargar el sistema | tails.net/install |
| Preparar la memoria USB | Instrucciones oficiales |
| Arrancar Tails | Menú de arranque del ordenador |
| Conectarte a Internet | Configuración de Tor en Tails |
| Conservar archivos | Almacenamiento persistente cifrado |

Haz una primera prueba sin documentos importantes. Familiarízate con el arranque, la conexión y el apagado antes de depender de Tails para algo delicado.

## Por dónde empezar

Entra en la web oficial de Tails y comprueba si tu ordenador es compatible. Si lo es, sigue las instrucciones de instalación y prueba el sistema antes de crear el almacenamiento persistente. Tails es gratuito: no necesitas contratar ningún servicio.

Revisado el 11 de noviembre de 2026. La compatibilidad, las instrucciones y los requisitos cambian. Fuentes: [Tails, web oficial](https://tails.net/) · [Tails, instalación](https://tails.net/install/) · [Tails, requisitos](https://tails.net/doc/about/requirements/) · [Tails, advertencias y limitaciones](https://tails.net/doc/about/warnings/) · [Tails, almacenamiento persistente](https://tails.net/doc/persistent_storage/).

## Para ponerlo en práctica

- [Memoria USB de 16 GB o más](tienda:memoria+usb+3.0+16gb) Es lo único que hace falta comprar, si no tienes una suelta. Comprueba los requisitos oficiales (capacidad y tipo) antes de elegirla; una segunda sirve para copias o para separar actividades, pero no es imprescindible.

## Sigue leyendo

- [Diez claves para entender y usar Tor Browser](/articulos/conexion/tor-browser.html)
- [Diez claves para entender VPN, Tor y Tails](/articulos/conexion/vpn-tor-tails.html)
- [Diez claves sobre los rastros que dejas en tu ordenador](/articulos/dispositivos/rastros-en-tu-ordenador.html)
