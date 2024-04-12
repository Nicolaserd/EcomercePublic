import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  //! recibe una instancia de Reflector. Esto permite al guardia acceder a los metadatos agregados a las clases y métodos utilizando decoradores.
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //! Utiliza el Reflector para obtener los roles requeridos para acceder a la ruta actual. Esto se hace buscando los metadatos
    //!con la clave "roles" en el manejador de la solicitud (context.getHandler()) y en la clase controladora (context.getClass()).
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const hasRole = () =>
      requiredRoles.some((role) => user?.roles?.includes(role));
    const valid = user && user.roles && hasRole();
    if (!valid) {
      throw new ForbiddenException(
        'you do not have permission and are not allowed to access this route',
      );
    }
    return true;
  }
}
