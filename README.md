<a name="readme-top"></a>
<p align="center">
  <a href="http://TotalGlow.com/" target="blank"><img src="https://res.cloudinary.com/johntzulik/image/upload/v1684452916/TotalGlow-sombra_wz5qkf.png" width="70%" alt="Total Glow" /></a>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li>
      <a href="#totalglow">Acerca del Proyecto</a>
      <ul>
        <li><a href="#construido-con">Realizado con</a></li>
      </ul>
    </li>
    <li>
      <a href="#para-comenzar">Para Comenzar</a>
      <ul>
        <li><a href="#prerequisitos">Prerequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#postman">Postman</a>
      <ul>
        <li><a href="#sign-up">Sign Up</a></li>
        <li><a href="#sign-in">Sign In</a></li>
      </ul>
    </li>
    <li><a href="#subir-cambios-a-produccion">Subir Cambios a produccion</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## TotalGlow
_Esta App permite revisar un basto catálogo de opciones para poder adquirir servicios de belleza tales como maquillaje, uñas y varios mas sin salir de casa_

<p align="right">(<a href="#readme-top">Subir</a>)</p>

### Construido con
En esta seccion encontraras una lista con los Frameworks o librerias utilizados en este proyecto

[![Node.js][nodejs-badge]][nodejs-url] 

[![Nestjs][nestjs-badge]][nestjs-url] 

[![JWT][jwt-badge]][jwt-url]

[![PNpm][pnpm-badge]][pnpm-url]

[![Prisma][prisma-badge]][prisma-url]

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Para Comenzar
### Prerequisitos

Se debera utilizar Node 16 al menos

Necesitaras instalar previamente [pnpm](https://pnpm.io/installation)

usuando NPM podras instalar de la siguiente manera:
```
npm install -g pnpm
```

Puedes utilizar NVM para actualizar a la version 16 de una forma rapida

<p align="right">(<a href="#readme-top">Subir</a>)</p>

### Instalación

#### Cambiando a Node 16 con NVM
```sh
nvm use 16
```

#### Deberas instalar todos los paquetes necesarios con el siguiente comando
```
pnpm install
```
Para poder correr en el ambiente local deberas crear un archivo llamado `.env` en el folder raiz y ahi deberas poner los siguientes parametros
```js
DATABASE_URL="postgresql://user:password@url.to.the.database.com/dabatase?schema=public"
JWT_SECRET="mifrasesecreta"
```
Esto tambien te lo puede proporcionar [Jesus](https://github.com/jarriaga)

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Uso
#### Finalmente deberas poder correr tu aplicacion en el puerto 3000 con el siguiente comando
```sh
# modo de desarrollo
$ pnpm run start

# modo de desarrollo guardando cambios
$ pnpm run start:dev

# modo de produccion
$ pnpm run start:prod
```

Recuerda que puedes abrir directamente desde

[localhost:3000](http://localhost:3000/)


<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Postman 

[![Postman][postman-badge]][postman-url] 

Para poder consumir esta API, puedes utilizar POSTMAN
### Sign Up
```js 
http://localhost:3000/auth/signup
```
<p align="center">
  <a href="#postman"><img src="https://res.cloudinary.com/johntzulik/image/upload/v1684475870/0518235547-localhost_3000_auth_signup_-_My_Workspace_yvutim.jpg" width="50%" alt="postman" /></a>
</p>

Recuerda que dentro del `Body` podras agregar en la parte de  `x-www-form-urlencoded` los `key`  y `value` del `email` y `password`  como se muestra en la imagen anterior

Los parametros `firstName` y `lastName` son opcionales

### Sign In

```js 
http://localhost:3000/auth/signup
```
<p align="center">
  <a href="#postman"><img src="https://res.cloudinary.com/johntzulik/image/upload/v1684476359/0519230543-localhost_3000_auth_signin_-_My_Workspace_g3wbna.jpg" width="50%" alt="postman" /></a>
</p>

Recuerda que dentro del `Body` podras agregar en la parte de  `x-www-form-urlencoded` los `key`  y `value` del `email` y `password`  como se muestra en la imagen anterior

Recuerda que para generar tu `access_token`, el `email` y el `password` son requeridos


<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Subir Cambios a produccion

Para poder subir tus cambios a produccion deberas seguir las siguientes instrucciones


[product-screenshot]: https://res.cloudinary.com/johntzulik/image/upload/v1684452916/TotalGlow-sombra_wz5qkf.png
[postman-image-1]: https://res.cloudinary.com/johntzulik/image/upload/v1684475870/0518235547-localhost_3000_auth_signup_-_My_Workspace_yvutim.jpg
[nestjs-badge]: https://img.shields.io/badge/nestjs-%234a4a4a.svg?style=for-the-badge&logo=nestjs&logoColor=E0234E
[nestjs-url]: https://docs.nestjs.com/
[jwt-badge]: https://img.shields.io/badge/JWT-%234a4a4a.svg?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=d63aff
[jwt-url]: https://jwt.io/
[pnpm-badge]: https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220
[pnpm-url]: https://pnpm.io/
[nodejs-badge]: https://img.shields.io/badge/node.js-%234a4a4a.svg?style=for-the-badge&logo=node.js&logoColor=6DA55F
[nodejs-url]:https://nodejs.org/en
[prisma-badge]: https://img.shields.io/badge/Prisma-%234a4a4a.svg?style=for-the-badge&logo=Prisma&logoColor=3982CE
[prisma-url]:https://www.prisma.io/
[postman-badge]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[postman-url]:https://www.postman.com/
