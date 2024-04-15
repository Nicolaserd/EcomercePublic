import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CreateUserDto, LogginUserDto } from '../users/users.dto';
import { Users } from 'src/entities/users.entity';

interface UserWithConfirmation extends CreateUserDto {
    confirmPassword?: string;
  }

describe('AuthController', () => {
  let controller: AuthController;
  let mockAuthService: Partial<AuthService>
  const mockUser : UserWithConfirmation={
    
    name: "Maria Garcia",
    email: "maria@example.com",
    password: "SecurePassword456!",
    confirmPassword: "SecurePassword456!",
    address: "Avenida Central 456",
    phone: 9876543210,
    country: "España",
    city: "Madrid",
    isAdmin:true
  }

  beforeEach(async () => {
    mockAuthService ={
        signIn:(email:string,password:string)=>Promise.resolve({token:'dijlsjdijsiljj28u89du8fu89u89ojc8u',success:"user logged in successfully"} ),
        singUp:(user:UserWithConfirmation)=>Promise.resolve(user as Partial<Users>)
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers:[
        {
            provide:AuthService,
            useValue:mockAuthService
        }
      ]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it("signIn() test", async()=>{
    const userIn = await controller.singIn({email:mockUser.email,password:mockUser.password})
    expect(userIn.success).toEqual((await mockAuthService.signIn(mockUser.email,mockUser.password)).success)
 
  })
});
