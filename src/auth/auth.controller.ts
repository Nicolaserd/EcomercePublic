import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LogginUserDto } from '../users/users.dto';
import { Users } from '../entities/users.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

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
}
