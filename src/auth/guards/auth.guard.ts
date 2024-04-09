import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
const validate = (request)=>{
   const email = request.headers.email;
   const password = request.headers.password;

   console.log(email, password);

   if (!email || !password) {
       return false;
   }
  return true
}
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   const request = context.switchToHttp().getRequest();
   return validate(request)
}
}