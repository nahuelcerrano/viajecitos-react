# <p style="text-align: center;">Viajecitos 🛫 </p>

Viajecitos es un sitio web donde simula es un ecommerce de viajes y turismo real donde se puede realizar, reservas de viajes, alojamiento en hoteles o compras de paquetes de guias de turismo.

En este proyecto me permitió entender más como funciona React, aprendiendo como funciona el context, las props, manejo de datos usando mocks el uso de rutas para poder hacer esta simple SPA.


> [**Ver demo**](https://viajecitos-react.vercel.app/home)

<img width="100%" alt="screenshot" src="https://i.imgur.com/ZVYMqfH.jpeg">

## Dependencias 📦

- `react-router-dom` - Una librería que nos permite especificar rutas en nuestra aplicación web usando componentes de React.
- `react-hook-form` - Librería de gestión de formularios para React que facilita el proceso de creación y validación de formularios.
- `vite` - Herramienta de compilación rápida y ágil para proyectos web modernos.
- `react-icons` - Paquete de iconos que utiliza ES6 imports para React.
- `tailwind CSS` - Potente framework css que ayuda a construir y diseñar páginas web.
- `framer-motion`- Libreria de código abierto con gran cantidad de animaciones.

## Instalación 💻

1. Clonar el repostorio desde git
>```bash
>git clone 'https://github.com/nahuelcerrano/viajecitos-react.git'
>```

2. Accedemos a la carpeta raíz del projecto

>```bash
>cd 'viajecitos-react'/
>```

3. Instalamos las dependencias

>```bash
>yarn i 
>```

4. Iniciamos la aplicación

>```bash
>yarn dev
>```

## Estructura del sitio 🌐

El sitio web consta de 7 páginas que son:

1. Inicio 
2. Viajes
2. Nosotros
3. Servicios
4. Contacto
5. Carrito
6. Destinos
7. Hoteles

###  Inicio

Dentro de inicio se muestra ofertas paquetes de viajes y parte resumida de que seria la empresa Viajecitos.

### Viajes

Consta de tres secciones, la primera 6 destinos con sus precios y un boton donde lleva a la página destinos donde muestra el resto de destinos disponibles dos filtros para precios y por continente.

Un anuncio de descuento sobre destinos especiales por una temporada

Y por ultimo una seccion con hoteles, es practicamente lo mismo que destinos.

### Nosotros

Esta página solo explicaria quienes serian Viajecitos cuales son sus servicios que ofrece y su historia.

### Servicios

Acá se muestra los paquetes de guías de turismo, algunas ofertas y cuales son los métodos de pago y bancos que aceptarían.

### Carrito

Cuando se da click comprar de algunos de los destinos se mostrará acá, se podrá agregar como tambien quitar acá mismo.
Hay dos botones, unos para seguir comprando y otro para terminar la compra, pero por el momento solo funciona para limpiar el carrito.

### Contacto

Un formulario, en teoria funcionaria para poder enviar comentario de feedback a la companía pero debito que pide tanto nombre como contraseña, seria mas logico que funcionara para registarse, en un futuro cambiaré la lógica del formulario para que funciona como registro.


## Bugs 🐛

1. Los hoteles no se agregan al carrito

## Contacto 👨‍💻
- [💼 LinkedIn](https://www.linkedin.com/in/nahuel-cerrano/) | [🚀 GitHub](https://github.com/nahuelcerrano)