import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Get()
    getUsers(){
        return this.authService.getAuth() ;   
    }
    @Post("/singin")
    singIn(@Body()credentials:any){
        const{email,password} = credentials;
        return this.authService.signIn(email,password);
    }
    

}
