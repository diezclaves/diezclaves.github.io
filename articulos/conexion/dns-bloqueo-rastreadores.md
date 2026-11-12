---
titulo_pagina: "Diez claves sobre DNS y bloqueo de rastreadores · Diez Claves"
descripcion: "Algunos servicios DNS bloquean dominios peligrosos y ciertos rastreadores. Cómo funcionan, qué filtran de verdad y cuáles son sus límites."
fecha: 2026-11-11
minutos: 7
destacado: "y bloqueo de rastreadores"
---

# Diez claves sobre DNS y bloqueo de rastreadores

Algunos servicios DNS bloquean dominios peligrosos y ciertos rastreadores. Cómo funcionan, qué filtran de verdad y cuáles son sus límites.

Cuando una aplicación quiere hablar con un servidor, antes suele consultar su nombre de dominio. Algunos servicios DNS aprovechan ese paso para impedir la conexión con dominios de sus listas de bloqueo. Es una protección que funciona junto a las del navegador, aunque no las sustituye. Si no sabes qué es el DNS, empieza por [este artículo](/articulos/conexion/que-es-el-dns.html).

## El DNS ayuda a encontrar servidores

Al escribir una dirección, tu dispositivo pide a un resolvedor DNS (el de tu operador u otro) la información para localizar el servidor. Los resolvedores convencionales responden con lo que hay. Otros aplican reglas: si el dominio está en sus listas de bloqueo, no devuelven la dirección y la conexión no se establece.

## El bloqueo funciona con listas

Los proveedores de DNS con filtros mantienen listas de dominios que bloquear: programas maliciosos, páginas fraudulentas, ciertos rastreadores, categorías de contenido. Cuando el dispositivo consulta uno de ellos, el resolvedor responde de forma que impide seguir. El mecanismo exacto depende del proveedor. Y la protección vale lo que valen las listas: su calidad, su actualidad y sus criterios. Ninguna lista incluye todas las amenazas.

## Bloquear malware no es bloquear publicidad

Los servicios DNS tienen objetivos muy distintos. Quad9 bloquea dominios maliciosos, y su documentación aclara que no está hecho para bloquear publicidad ni rastreadores comerciales. Cloudflare ofrece variantes que bloquean amenazas y, opcionalmente, ciertas categorías de contenido. Otros servicios aplican listas de bloqueo publicitario. No asumas que un DNS anunciado como «seguro» quita la publicidad: comprueba qué categorías bloquea y con qué información lo decide.

## Los filtros DNS no lo bloquean todo

Trabajan con nombres de dominio: impiden conexiones a ciertos servidores, pero no distinguen todos los recursos de una misma página. Si una web sirve contenido legítimo y rastreadores desde el mismo dominio, el filtro no puede separarlos. Hay aplicaciones que resuelven nombres por su cuenta y conexiones que no pasan por el DNS controlado. Por eso el bloqueo DNS no sustituye las protecciones del navegador; se complementan.

## Servicios que bloquean dominios peligrosos

| Servicio | Direcciones IPv4 | Función declarada |
|---|---|---|
| Quad9 | `9.9.9.9` y `149.112.112.112` | Bloqueo de dominios maliciosos |
| Cloudflare Families | `1.1.1.2` y `1.0.0.2` | Bloqueo de malware y phishing |
| Cloudflare Families | `1.1.1.3` y `1.0.0.3` | Malware y contenido para adultos |

Son ejemplos documentados por sus propios proveedores. Escribir estas direcciones en un campo de configuración no activa el DNS cifrado: para eso hay que usar un protocolo compatible, como explicamos en [diez claves para cambiar tu DNS](/articulos/conexion/cambiar-dns.html).

## Listas personalizadas

Algunas herramientas permiten administrar filtros propios. Pi-hole, por ejemplo, funciona dentro de la red doméstica y aplica las listas que tú elijas; hay también servicios externos con configuraciones personalizadas. Son útiles para gestionar varios dispositivos o saber qué dominios se consultan. Exigen más mantenimiento que un servicio público, y generan registros de actividad que tendrás que proteger. Poder filtrar conexiones no obliga a guardar un historial detallado de lo que consulta cada persona de tu red.

## Bloquear de más rompe páginas

Muchas páginas dependen de servicios externos para vídeos, formularios o verificar sesiones. Si bloqueas un dominio necesario, parte del sitio deja de funcionar, y eso no demuestra que la página sea peligrosa: puede ser un bloqueo demasiado amplio o una clasificación errónea. Antes de desactivar los filtros, identifica qué dominio se bloquea y decide si permitirlo. Algunos servicios admiten avisos de clasificación incorrecta. No añadas excepciones a dominios que no conoces solo para quitar un aviso.

## Cifrado y filtrado son cosas distintas

Un DNS con filtros puede recibir consultas cifradas o sin cifrar. DNS sobre HTTPS y sobre TLS protegen el transporte entre el dispositivo y el resolvedor; el filtrado decide qué responde para ciertos dominios. Puedes tener DNS cifrado sin filtros y filtros sin cifrado. Si quieres las dos cosas, comprueba expresamente que tu configuración incluye ambas; una no implica la otra.

## El proveedor ve tus consultas

Para filtrar, el resolvedor necesita saber qué dominios consultas, y eso lo sitúa en una posición delicada para tu privacidad. Antes de elegirlo, mira qué registra, cuánto tiempo lo conserva y para qué. Si montas un servidor propio, sus registros también hablan de la actividad de tu red: no conviertas una herramienta de privacidad en vigilancia innecesaria. La confianza y el tratamiento de datos importan tanto como la capacidad de bloquear.

## Elige el filtro que necesitas

| Qué necesitas | Qué puedes usar |
|---|---|
| Bloquear dominios maliciosos | DNS con protección frente a amenazas |
| Bloquear ciertos rastreadores | DNS con listas específicas |
| Reglas propias en casa | Pi-hole u otra solución administrable |
| Cifrar las consultas | DNS sobre HTTPS o TLS |
| Evitar bloqueos erróneos | Revisar excepciones y documentación |
| Cuidar la privacidad | Leer la política de registros |

Empieza con una configuración sencilla y mira qué cambia antes de añadir herramientas.

## Por dónde empezar

Si quieres bloquear dominios peligrosos, evalúa un servicio público con filtros de seguridad. Si quieres bloquear rastreadores, comprueba que el proveedor ofrece expresamente esa función. No hace falta comprar nada para probarlo en un dispositivo.

Revisado el 11 de noviembre de 2026. Las listas de bloqueo y las categorías de cada proveedor cambian. Fuentes: [Quad9, documentación de servicios](https://docs.quad9.net/services/) · [Quad9, bloqueo de amenazas](https://www.quad9.org/service/threat-blocking/) · [Cloudflare, configuración de 1.1.1.1](https://developers.cloudflare.com/1.1.1.1/setup/) · [Cloudflare, direcciones disponibles](https://developers.cloudflare.com/1.1.1.1/ip-addresses/) · [Pi-hole](https://pi-hole.net/).

## Para ponerlo en práctica

- [Raspberry Pi para montar Pi-hole](tienda:raspberry+pi+kit) Solo si quieres filtros propios para toda la casa y te apetece administrarlos. Pi-hole es gratuito y también corre en un ordenador viejo o en un NAS que ya tengas; para probar un DNS público con filtros no necesitas comprar nada.

## Sigue leyendo

- [Diez claves para entender qué es el DNS](/articulos/conexion/que-es-el-dns.html)
- [Diez claves para cambiar tu DNS con privacidad](/articulos/conexion/cambiar-dns.html)
- [Diez claves sobre cookies y rastreadores](/articulos/privacidad/cookies-y-rastreadores.html)
