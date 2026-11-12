---
titulo_pagina: "Diez claves para entender los sitios .onion · Diez Claves"
descripcion: "Las direcciones .onion dan acceso a servicios dentro de Tor sin revelar dónde están sus servidores. Cómo funcionan, cómo verificarlas y qué precauciones tomar."
fecha: 2026-11-11
minutos: 7
destacado: "los sitios .onion"
---

# Diez claves para entender los sitios .onion

Las direcciones .onion dan acceso a servicios dentro de Tor sin revelar dónde están sus servidores. Cómo funcionan, cómo verificarlas y qué precauciones tomar.

Casi todas las páginas que visitas usan dominios como `.com`, `.org` o `.es`. Hay servicios que funcionan dentro de la red Tor y terminan en `.onion`. No son necesariamente ilegales ni peligrosos: algunos sirven para compartir información, comunicarse en privado o publicar donde hay censura. Para usarlos bien hay que entender en qué se diferencian de una página normal.

## Onion significa cebolla

Los servicios onion, o servicios cebolla, permiten publicar páginas y otros recursos accesibles solo a través de Tor. El nombre viene de las mismas capas de protección que dan nombre a Tor. Su rasgo principal: pueden ocultar la IP del servidor que ofrece el servicio, así que es difícil localizar desde dónde se publica. Sirven para webs, para comunicación entre personas y para otras aplicaciones compatibles, y no tienen por qué ser públicos ni estar siempre disponibles.

## Una dirección .onion no funciona como una normal

Las páginas convencionales se resuelven por el [DNS](/articulos/conexion/que-es-el-dns.html). Los servicios onion usan un mecanismo propio, integrado en Tor. Sus direcciones actuales son 56 letras y números seguidos de `.onion`, y están relacionadas criptográficamente con la identidad del servicio. No tienes que memorizarla, pero sí comprobar que corresponde al servicio que buscas: un solo carácter cambiado y la conexión no funciona, o te lleva a otro sitio.

## Necesitas Tor para entrar

Un navegador normal no se conecta a un servicio onion. La forma más accesible es [Tor Browser](/articulos/conexion/tor-browser.html), gratuito en [torproject.org](https://www.torproject.org/): una vez conectado, escribes la dirección onion en la barra. No necesitas VPN ni pagar nada. Existen intermediarios web que prometen mostrar páginas onion desde un navegador normal, pero rompen las propiedades de privacidad y autenticación de la conexión.

## La dirección autentica el servicio

En una web normal, HTTPS usa certificados para comprobar la identidad del servidor y cifrar. Los servicios onion traen su propia autenticación: al conectarte, Tor comprueba que el servicio controla la identidad criptográfica de esa dirección, y la comunicación va cifrada de extremo a extremo por el protocolo de Tor. Lo que eso no demuestra es que quien publica sea honrado: una página fraudulenta también puede tener una dirección onion válida. Autenticar el servicio y confiar en su contenido son cosas distintas.

## Onion no es sinónimo de delincuencia

Los servicios onion salen en las noticias por mercados ilegales. Esa asociación no describe todos sus usos: también sirven para que las fuentes contacten con periodistas, para compartir archivos y para acceder a información donde hay restricciones. El Proyecto Tor documenta usos de periodismo, privacidad y acceso a servicios. Una tecnología que protege la identidad se usa para fines legítimos e ilícitos; lo que se evalúa es el servicio concreto y la actividad, no a todas las personas que usan Tor.

## Algunas organizaciones publican su versión onion

Una organización puede ofrecer su web habitual y, además, una versión accesible por Tor, para que la gente consulte información sin revelar su IP al servidor convencional. Hay también servicios creados solo para Tor. El Proyecto Tor mantiene los suyos en [onion.torproject.org](https://onion.torproject.org/). Cuando una organización publica su dirección onion en su página oficial, tienes una referencia fiable para comprobar que vas al destino previsto.

## Desconfía de los directorios desconocidos

Como las direcciones son largas, mucha gente las busca en directorios que recopilan enlaces. Un directorio puede tener enlaces caducados, páginas fraudulentas e imitaciones. Antes de escribir una contraseña o compartir nada, comprueba de dónde salió la dirección: si el sitio tiene una versión convencional oficial, busca allí la referencia. Tor Browser avisa cuando un sitio ha configurado una versión onion. Encontrar un enlace no es haberlo verificado.

## Las páginas onion también tienen riesgos

Que un servicio use Tor no garantiza que su contenido sea seguro: puede ofrecer archivos maliciosos, intentar engañarte o pedir datos que no necesita. No descargues programas desconocidos ni compartas contraseñas solo porque la dirección acabe en onion. Mantén Tor Browser actualizado y usa sus niveles de seguridad cuando corresponda. Y si descargas documentos, recuerda que abrirlos con otras aplicaciones puede generar conexiones fuera de Tor.

## Onion no es anonimato absoluto

Los servicios onion protegen a quien visita y a quien publica, pero no impiden que una persona se identifique sola. Si escribes tu nombre, tu correo personal o tu dirección en un formulario, se lo estás diciendo al servicio. También delatan los archivos que compartes, las cuentas que usas y los metadatos de tus documentos. Una cosa es la protección de la infraestructura de Tor y otra las decisiones que tomas mientras navegas.

## Cómo usar una dirección onion

| Qué necesitas | Qué hacer |
|---|---|
| Abrir un sitio onion | Usar Tor Browser |
| Encontrar una dirección fiable | La web oficial del servicio |
| Verificar que es auténtica | Comprobar la dirección completa |
| Evitar páginas fraudulentas | No fiarse de directorios desconocidos |
| Mantener tu identidad aparte | No escribir datos personales |
| Entender por qué no carga | Revisar la dirección y la conexión Tor |

Si una página onion deja de funcionar, comprueba que has escrito bien la dirección; algunos servicios también están desconectados temporalmente.

## Por dónde empezar

Instala Tor Browser y consulta la documentación oficial de los servicios onion. No necesitas explorar directorios desconocidos para aprender cómo funcionan estas páginas.

Revisado el 11 de noviembre de 2026. Los servicios onion cambian de dirección o dejan de estar disponibles. Fuentes: [Tor Project, qué son los sitios .onion](https://support.torproject.org/es/about-tor/onion-services/what-is-a-dot-onion/) · [Tor Project, cómo funcionan los servicios onion](https://community.torproject.org/onion-services/overview/) · [Tor Project, problemas con servicios onion](https://support.torproject.org/es/tor-browser/encountering-issues/troubleshooting-onion-services/) · [Tor Project, servicios oficiales](https://onion.torproject.org/).

## Sigue leyendo

- [Diez claves para entender y usar Tor Browser](/articulos/conexion/tor-browser.html)
- [Diez claves para usar Tails desde un USB](/articulos/conexion/tails-usb.html)
- [Diez claves para proteger tu identidad al navegar](/articulos/privacidad/proteger-tu-identidad.html)
