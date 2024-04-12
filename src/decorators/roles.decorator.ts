import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/auth/roles.enum';
//* Esta función toma un número variable de argumentos (usando el operador ...) de tipo Role[] el enum
//* se llama a otra función llamada SetMetadata con dos argumentos: el primer argumento es una cadena "roles" es la clave para identificar estos metadatos
//* y el segundo argumento es el arreglo de roles que se pasa a la función Roles.
//!SetMetadata es una función proporcionada por NestJS que se utiliza para agregar metadatos a las clases, métodos, propiedades, etc. de una aplicación NestJS
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
