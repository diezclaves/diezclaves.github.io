---
titulo_pagina: "Diez claves sobre los rastros que dejas en tu ordenador · Diez Claves"
descripcion: "Borrar el historial no elimina todos los rastros. Qué conservan el navegador, la caché DNS y el sistema operativo, y cómo limpiarlo sin romper nada."
fecha: 2026-11-11
minutos: 8
destacado: "que dejas en tu ordenador"
---

# Diez claves sobre los rastros que dejas en tu ordenador

Borrar el historial no elimina todos los rastros. Qué conservan el navegador, la caché DNS y el sistema operativo, y cómo limpiarlo sin romper nada.

Al visitar páginas, descargar archivos y usar aplicaciones, el ordenador guarda información para facilitar lo siguiente. Parte queda en el navegador; otra en el sistema operativo, en aplicaciones o en servicios externos. Incluso en modo incógnito hay rastros fuera de la sesión privada. Saber dónde están explica qué significa de verdad «borrar el historial» y qué límites tienen las herramientas de privacidad.

## El historial es solo una parte

El navegador guarda un historial de páginas para que puedas volver a ellas; se consulta, se busca y se borra desde la configuración. Pero no es el único sitio donde queda información: también hay cookies, archivos temporales, registros de descargas y datos guardados por las páginas, y otras aplicaciones y componentes del sistema conservan lo suyo. Borrar el historial no es eliminar todos los rastros. Para saber qué queda, hay que distinguir cada forma de almacenamiento.

## La caché del navegador guarda recursos

Al visitar una página, el navegador guarda temporalmente imágenes, hojas de estilo y otros archivos para cargarla más rápido la próxima vez. Es la caché, y se elimina desde las opciones de datos de navegación. Borrarla no quita las cookies, ni los archivos descargados, ni lo que guardan otros programas, ni las copias que tienen los servidores que has visitado. Es una herramienta de funcionamiento, no un historial completo.

## La caché DNS conserva dominios

Para localizar un servidor, el ordenador consulta el [DNS](/articulos/conexion/que-es-el-dns.html), y algunos sistemas guardan un tiempo esos resultados. En Windows existe una caché del cliente DNS con los nombres de dominio resueltos hace poco. Para verla, abre Símbolo del sistema o PowerShell y ejecuta `ipconfig /displaydns`. Aparecen dominios relacionados con tu navegación, también de sesiones privadas. No es un historial completo: hay consultas de otras aplicaciones y no están todas las páginas visitadas.

## Puedes vaciar la caché DNS

En Windows, con `ipconfig /flushdns` en Símbolo del sistema o PowerShell. Elimina las entradas dinámicas de la caché del cliente DNS y sirve también para resolver algunos problemas de conexión. Sus límites: no borra el historial ni las cookies, ni los archivos descargados, ni los registros de servidores externos. Y algunos navegadores y aplicaciones usan su propia resolución y su propia caché DNS. Vaciarla no es borrar todos los rastros de Internet.

## El modo incógnito no borra todo

La ventana privada evita que el navegador guarde ciertos datos de la sesión en su historial habitual. No elimina lo que conserva el sistema operativo: los archivos descargados siguen ahí, hay consultas DNS resueltas fuera del navegador, y los programas de supervisión o los sistemas de una red administrada guardan sus propios registros. Cerrar una ventana privada no garantiza que la actividad no se pueda reconstruir; su función es limitar ciertos datos locales del navegador. Más en [diez claves sobre el modo incógnito](/articulos/privacidad/modo-incognito.html).

## Las descargas se quedan donde las guardaste

Descargar un documento en una sesión privada no lo hace desaparecer al cerrar: sigue en la carpeta elegida. Igual con imágenes, documentos de oficina y lo que guardes a propósito. El navegador quita la referencia de su historial de descargas, pero no borra el archivo. Además, algunas aplicaciones crean copias temporales o guardan una lista de documentos abiertos recientemente. En un ordenador compartido, antes de nada, averigua dónde van las descargas y qué programas vas a usar para abrirlas.

## El sistema operativo registra actividad

Windows, macOS y Linux anotan acontecimientos del sistema: errores, conexiones, ejecución de procesos y otros datos técnicos, con contenido y duración que dependen de la configuración y las aplicaciones. No hay un registro universal que reconstruya toda la navegación de cualquier ordenador, pero tampoco el navegador controla todos los datos de tu actividad. Los equipos administrados por empresas y organizaciones pueden tener herramientas adicionales. La privacidad depende también del dispositivo y de quién lo administra.

## Los discos conservan datos borrados

Al borrar un archivo, el sistema suele quitar su referencia visible sin sobrescribir enseguida los datos. Que se pueda recuperar depende del sistema de archivos, del tipo de almacenamiento y de lo que se haga después; en los SSD intervienen mecanismos como TRIM y la gestión interna del dispositivo. No hay un procedimiento único de borrado seguro. Si vas a vender, donar o tirar un ordenador, sigue las instrucciones del fabricante para restablecerlo o borrarlo. El cifrado completo del disco protege frente al acceso físico; lo explicamos en [diez claves para proteger tu móvil, tu ordenador y tu router](/articulos/dispositivos/claves-de-dispositivos.html).

## Otros dispositivos también guardan información

Lo que haces no queda solo en el ordenador. El router, el servidor DNS, la red de una organización y los servicios de Internet conservan registros independientes, según sus funciones, configuraciones y políticas: algunos routers traen supervisión, otros apenas registros técnicos; los proveedores de páginas guardan información de las conexiones. Borrar datos locales no toca esos registros externos. La privacidad exige distinguir quién conserva cada información y qué puedes controlar.

## Revisa qué rastros quieres controlar

| Qué necesitas | Qué hacer |
|---|---|
| Eliminar el historial | Ajustes del navegador |
| Borrar cookies y datos de páginas | Configuración de privacidad |
| Vaciar la caché del navegador | Eliminar archivos almacenados |
| Ver la caché DNS en Windows | `ipconfig /displaydns` |
| Vaciar la caché DNS en Windows | `ipconfig /flushdns` |
| Revisar archivos descargados | Carpeta Descargas y otras ubicaciones |
| Proteger lo almacenado | Cifrado del dispositivo |
| No dejar rastros locales de una sesión | Evaluar Tails y sus límites |

No borres registros del sistema ni uses programas de limpieza desconocidos sin entender las consecuencias: algunos datos hacen falta para diagnosticar problemas y mantener las aplicaciones funcionando.

## Por dónde empezar

Mira primero el historial y la caché de tu navegador. Después, si usas Windows, observa qué aparece con `ipconfig /displaydns`. La conclusión: borrar el historial no equivale a eliminar todas las evidencias de actividad. Cada componente guarda algo distinto y necesita su propia medida. No hace falta pagar ningún programa de limpieza.

Revisado el 11 de noviembre de 2026. Dónde se guardan los datos y cómo se eliminan depende del sistema, el navegador y las aplicaciones. Fuentes: [Microsoft, comando ipconfig](https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/ipconfig) · [Google, eliminar caché y cookies](https://support.google.com/accounts/answer/32050) · [Apple, datos de sitios en Safari](https://support.apple.com/en-gb/guide/safari/sfri11471/mac) · [Mozilla, soporte sobre privacidad](https://support.mozilla.org/) · [Tails](https://tails.net/).

## Sigue leyendo

- [Diez claves sobre el modo incógnito](/articulos/privacidad/modo-incognito.html)
- [Diez claves para entender qué es el DNS](/articulos/conexion/que-es-el-dns.html)
- [Diez claves para usar Tails desde un USB](/articulos/conexion/tails-usb.html)
