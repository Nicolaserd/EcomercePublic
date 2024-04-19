# README 

Este repositorio contiene el código fuente de una aplicación Node.js utilizando NestJS como framework. La aplicación cuenta con diferentes módulos y funcionalidades, las cuales se describen a continuación.

## Estructura del proyecto

El proyecto sigue la estructura de directorios recomendada por NestJS. A continuación, se presenta un resumen de los directorios más importantes:

- `src`: Contiene el código fuente de la aplicación.
  - `auth`: Módulo de autenticación y autorización.
  - `file-upload`: Módulo para cargar archivos.
  - `users`: Módulo de usuarios con sus respectivos controladores, servicios y repositorios.
  - `app.controller`: Controlador principal de la aplicación.
  - `app.module`: Módulo principal que configura la aplicación y sus dependencias.

## Módulos y funcionalidades

### Autenticación y autorización

El módulo `auth` se encarga de la autenticación y autorización de usuarios. Incluye los siguientes archivos:

- `auth.controller.ts`: Controlador para manejar rutas relacionadas con la autenticación.
- `auth.guard.ts`: Guardia de autenticación para proteger rutas.
- `auth.service.ts`: Servicio para manejar la lógica de autenticación.
- `roles.enum.ts`: Enumeración de roles de usuario.

### Carga de archivos

El módulo `file-upload` permite cargar archivos en la aplicación. Incluye los siguientes archivos:

- `file-upload.controller.ts`: Controlador para manejar rutas relacionadas con la carga de archivos.
- `file-upload.module.ts`: Módulo que configura el servicio de carga de archivos.
- `file-upload.service.ts`: Servicio para manejar la lógica de carga de archivos.
- `file-upload.repository.ts`: Repositorio para almacenar información de los archivos cargados.

### Usuarios

El módulo `users` gestiona los usuarios de la aplicación. Incluye los siguientes archivos:

- `users.controller.ts`: Controlador para manejar rutas relacionadas con los usuarios.
- `users.dto.ts`: Objetos de transferencia de datos (DTO) para definir las entradas y salidas de datos.
- `users.module.ts`: Módulo que configura el servicio de usuarios.
- `users.repository.ts`: Repositorio para almacenar y recuperar información de los usuarios.
- `users.service.ts`: Servicio para manejar la lógica de los usuarios.

## Configuración adicional

El proyecto también incluye archivos de configuración adicionales en el directorio `config` y archivos de entidades en el directorio `entities`. Además, se utilizan decoradores personalizados para extender las capacidades de NestJS.

Para obtener más información sobre la configuración y el uso de estos archivos, consulte la [documentación oficial de NestJS](https://docs.nestjs.com/).
