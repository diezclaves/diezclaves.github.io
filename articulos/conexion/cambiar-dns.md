---
titulo_pagina: "Diez claves para cambiar tu DNS con privacidad · Diez Claves"
descripcion: "Cómo configurar DNS cifrado en Android, Windows, iPhone, Chrome y el router, comprobar que funciona y saber qué sigue siendo visible."
fecha: 2026-11-11
minutos: 8
destacado: "tu DNS con privacidad"
---

# Diez claves para cambiar tu DNS con privacidad

Cómo configurar DNS cifrado en Android, Windows, iPhone, Chrome y el router, comprobar que funciona y saber qué sigue siendo visible.

Tu dispositivo consulta servidores DNS para encontrar las páginas que usas. Normalmente emplea los de tu operador, pero puedes elegir otros: por cifrado, por filtros o por una política de privacidad distinta. La clave está en saber qué cambias. Una nueva dirección DNS no significa, por sí sola, más privacidad. Si no tienes claro qué es el DNS, empieza por [diez claves para entenderlo](/articulos/conexion/que-es-el-dns.html).

## Comprueba qué DNS usas ahora

Tu dispositivo puede tomar el DNS del router, usar uno configurado a mano o emplear otro distinto dentro de algunas aplicaciones. En Windows lo verás en los ajustes de red; en Android, en «DNS privado»; Chrome tiene su propia configuración. Anota cualquier servidor que hayas puesto a mano, para poder volver atrás. Y no cambies los ajustes de una red del trabajo o de un centro educativo sin consultar con su responsable.

## Decide qué quieres conseguir

Unos servicios se limitan a resolver dominios; otros bloquean servidores publicitarios o dominios de amenazas conocidas; otros destacan por su política de conservación de datos. Pregúntate si buscas cifrar las consultas, filtrar dominios o simplemente otro proveedor. Si lo que te preocupa es el anonimato, cambiar el DNS no basta. Define el problema antes de copiar la configuración que recomienda otra persona.

## Direcciones de algunos proveedores

| Servicio | Dirección |
|---|---|
| Cloudflare | `1.1.1.1` y `1.0.0.1` |
| Google Public DNS | `8.8.8.8` y `8.8.4.4` |
| Quad9 | `9.9.9.9` |

Son ejemplos de DNS públicos documentados por sus proveedores. Escribir una dirección IP no activa por sí solo el cifrado: consulta la documentación de cada uno para sus opciones cifradas y su política de datos.

## Android: DNS privado

En las versiones compatibles:

1. Abre **Ajustes**.
2. Entra en **Redes e Internet** o el apartado equivalente.
3. Busca **DNS privado**.
4. Elige la opción de escribir el nombre de un proveedor.
5. Escribe el nombre compatible y guarda.

Por ejemplo, Cloudflare documenta `one.one.one.one`. No escribas `1.1.1.1` en un campo que pide un nombre. Los menús cambian según fabricante y versión.

## Windows 11: DNS sobre HTTPS

Abre **Configuración**, **Red e Internet** y selecciona tu conexión. Busca la configuración de DNS y edita la asignación de servidores: ahí pones los servidores y eliges cómo se cifran las consultas. Comprueba que DNS sobre HTTPS está activado; poner solo una dirección no cifra nada. Windows puede volver a consultas sin cifrar cuando falla el servicio cifrado; revisa esa opción si quieres evitarlo. Windows 10 no tiene la misma configuración integrada.

## Chrome: DNS seguro

En **Configuración → Privacidad y seguridad → Seguridad**, busca **Usar DNS seguro**. Chrome puede usar el proveedor actual si es compatible o uno que elijas. En modo automático puede recurrir a consultas sin cifrar ante ciertos problemas; con un proveedor personalizado se comporta distinto. Otros navegadores tienen opciones parecidas. Y ojo: configurarlo en el navegador no significa que el resto de aplicaciones del dispositivo lo usen.

## iPhone: qué opción necesitas

En los dispositivos Apple hay que distinguir entre cambiar el servidor DNS de una red wifi y configurar un DNS cifrado. Cambiar las direcciones a mano en una red wifi no cifra las consultas. Apple admite DNS sobre HTTPS y sobre TLS mediante mecanismos compatibles con el sistema: sigue las instrucciones oficiales del proveedor y mira qué perfil o aplicación requiere. No instales perfiles de configuración de procedencia desconocida; pueden modificar aspectos importantes de la conexión.

## El router afecta a toda la red

Configurar el DNS en el router hace que varios dispositivos usen el mismo servicio. Necesitas entrar en su panel de administración, localizar la configuración DNS y ver qué admite: no todos permiten DNS cifrado. Algunos dispositivos y aplicaciones ignoran el DNS del router y usan el suyo. Antes de tocar nada, guarda la configuración actual, y comprueba que el cambio no rompe controles parentales ni servicios internos que dependan de ciertos servidores.

## Comprueba que funciona

Guardar la configuración no demuestra que todas tus consultas usen el proveedor elegido. Algunos servicios tienen páginas de diagnóstico; Cloudflare dispone de [1.1.1.1/help](https://1.1.1.1/help), que indica si estás conectado a sus servidores y si usas DNS cifrado (para las conexiones que puede evaluar, no para todas las aplicaciones). Si hay errores, revisa direcciones, tipo de cifrado y reglas de la red. No mantengas una configuración que te impida usar servicios esenciales sin entender la causa.

## Elige la configuración que necesitas

| Qué necesitas | Dónde empezar |
|---|---|
| Cifrar consultas en Android | Ajustes → DNS privado |
| Configurar Windows 11 | Red e Internet → Configuración DNS |
| Proteger las consultas de Chrome | Privacidad y seguridad → DNS seguro |
| Configurar un iPhone | Opciones wifi o DNS cifrado compatible |
| Varios dispositivos a la vez | Panel de administración del router |

Después, comprueba que navegas y que el proveedor responde. Cambiar el DNS no sustituye a HTTPS ni a una buena configuración de privacidad.

## Por dónde empezar

Configura DNS cifrado en un solo dispositivo, el que más uses. Comprueba el resultado antes de extenderlo al resto de la red. No hace falta pagar para usar DNS cifrado.

Revisado el 11 de noviembre de 2026. Los menús dependen del fabricante, la versión y las aplicaciones instaladas. Fuentes: [Cloudflare, configuración de 1.1.1.1](https://developers.cloudflare.com/1.1.1.1/setup/) · [Cloudflare, Android](https://developers.cloudflare.com/1.1.1.1/setup/android/) · [Microsoft, ajustes de red en Windows](https://support.microsoft.com/es-es/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows) · [Google, DNS seguro en Chrome](https://support.google.com/chrome/answer/10468685) · [Apple, configuración de DNS](https://developer.apple.com/documentation/devicemanagement/dnssettings/dnssettings-data.dictionary) · [Quad9](https://quad9.net/).

## Para ponerlo en práctica

- [Router con soporte de DNS cifrado](tienda:router+wifi+6+dns+over+https) Útil para gestionar toda la red. Antes de comprar, mira si el que ya tienes lo admite: con el router del operador suele bastar para probar en un dispositivo.

## Sigue leyendo

- [Diez claves para entender qué es el DNS](/articulos/conexion/que-es-el-dns.html)
- [Diez claves para navegar con más privacidad](/articulos/privacidad/navegar-con-privacidad.html)
- [Diez claves para proteger tu móvil, tu ordenador y tu router](/articulos/dispositivos/claves-de-dispositivos.html)
