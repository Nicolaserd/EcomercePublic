import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LogginUserDto } from 'src/users/users.dto';
import { Users } from 'src/entities/users.entity';

interface UserWithConfirmation extends CreateUserDto {
    confirmPassword?: string;
  }

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Get()
    getUsers(){
        return this.authService.getAuth() ;   
    }
    @Post("/singin")
    singIn(@Body()credentials:LogginUserDto){
        const{email,password} = credentials;
        return this.authService.signIn(email,password);
    }
    @Post("/signup")
    singUp(@Body() user:UserWithConfirmation){
       
        return this.authService.singUp(user);
    }
    

}
