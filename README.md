# README  📝

Este repositorio contiene el código fuente de una aplicación Node.js utilizando NestJS como framework. La aplicación cuenta con diferentes módulos y funcionalidades, las cuales se describen a continuación.

## Estructura del proyecto

El proyecto sigue la estructura de directorios recomendada por NestJS. A continuación, se presenta un resumen de los directorios más importantes:

- Estructura del proyecto:
  - `auth`: Maneja los servicios de signin y signup.
  - `file-upload`: Se usa Cloudinary para la carga de archivos y generar un URL.
  - `users`: Controla la lógica de usuarios, protege rutas según la autenticación, y utiliza DTO.
  - `decorators`: Es un decorador personalizado donde se define el rol del usuario (admin o user).
  - `middlewares`: Se utiliza un middleware global para indicar la ruta, fecha y hora.
  - `products`: Controla la lógica de los productos y protege las rutas según la autenticación.
  - `orders`: Controla la lógica de las órdenes que realizan los usuarios, protege las rutas según la autenticación y utiliza DTO.
  - `categories`: Agrega categorías de productos.
 

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

### Productos

El módulo `products` gestiona los productos de la aplicación. Incluye los siguientes archivos:

- `products.controller.ts`: Controlador para manejar rutas relacionadas con los productos.
- `products.dto.ts`: Objetos de transferencia de datos (DTO) para definir las entradas y salidas de datos.
- `products.module.ts`: Módulo que configura el servicio de productos.
- `products.repository.ts`: Repositorio para almacenar y recuperar información de los productos.
- `products.service.ts`: Servicio para manejar la lógica de los productos.

### Ordenes

El módulo `orders` gestiona los ordenes de la aplicación. Incluye los siguientes archivos:

- `orders.controller.ts`: Controlador para manejar rutas relacionadas con los Ordenes.
- `orders.dto.ts`: Objetos de transferencia de datos (DTO) para definir las entradas y salidas de datos.
- `orders.module.ts`: Módulo que configura el servicio de Ordenes.
- `orders.repository.ts`: Repositorio para almacenar y recuperar información de los Ordenes.
- `orders.service.ts`: Servicio para manejar la lógica de los Ordenes.


## Endpoints

#### Autenticación

- POST https://ecomerce-public.vercel.app/auth/login: Realiza el inicio de sesión de un usuario.
- POST https://ecomerce-public.vercel.app/auth/register: Registra un nuevo usuario.

#### Usuarios

- GET https://ecomerce-public.vercel.app/users: Obtiene una lista de usuarios.
- GET https://ecomerce-public.vercel.app/users/:id: Obtiene un usuario específico por su ID.
- PUT https://ecomerce-public.vercel.app/users/:id: Actualiza un usuario específico por su ID.
- DELETE https://ecomerce-public.vercel.app/users/:id: Elimina un usuario específico por su ID.

#### Productos

- GET https://ecomerce-public.vercel.app/products: Obtiene una lista de productos.
- GET https://ecomerce-public.vercel.app/products/:id: Obtiene un producto específico por su ID.
- POST https://ecomerce-public.vercel.app/products: Crea un nuevo producto.
- PUT https://ecomerce-public.vercel.app/products/:id: Actualiza un producto específico por su ID.
- DELETE https://ecomerce-public.vercel.app/products/:id: Elimina un producto específico por su ID.

#### Órdenes

- GET https://ecomerce-public.vercel.app/orders: Obtiene una lista de órdenes.
- GET https://ecomerce-public.vercel.app/orders/:id: Obtiene una orden específica por su ID.
- POST https://ecomerce-public.vercel.app/orders: Crea una nueva orden.
- PUT https://ecomerce-public.vercel.app/orders/:id: Actualiza una orden específica por su ID.
- DELETE https://ecomerce-public.vercel.app/orders/:id: Elimina una orden específica por su ID.

## Configuración adicional

El proyecto también incluye archivos de configuración adicionales en el directorio `config` (typeorm y cloudinary) y archivos de entidades en el directorio `entities`. Además, se utilizan decoradores personalizados para extender las capacidades de NestJS.

Para obtener más información sobre la configuración y el uso de estos archivos, consulte la [documentación oficial de NestJS](https://docs.nestjs.com/).

## Información de Contacto

- **Teléfono:** +573057139607
- **Correo Electrónico:** [530nicolas@gmail.com](mailto:530nicolas@gmail.com)