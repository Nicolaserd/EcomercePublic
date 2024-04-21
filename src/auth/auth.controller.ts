import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LogginUserDto } from '../users/users.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

interface CustomRequest extends Request {
  oidc?: {
    user: any; 
  }
}

class UserWithConfirmation extends CreateUserDto {
  @ApiProperty({
    description:"La contraseña debe tener al menos 8 caracteres y contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*",
    example:"$2b$10$QKi"
  })
  confirmPassword?: string;
}
@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/singin')
  singIn(@Body() credentials: LogginUserDto) {
    const { email, password } = credentials;
    return this.authService.signIn(email, password);
  }
  @Post('/signup')
  singUp(@Body() user: UserWithConfirmation) {
    return this.authService.singUp(user);
  }
  @Get("/Auth0/protected")
  getAuth0Protected(@Req() req: CustomRequest){
   
    return  this.authService.Auth0(req?.oidc?.user)
  }
}
