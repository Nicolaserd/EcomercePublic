import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserRepository } from '../users/users.repository';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../entities/users.entity';
import { CreateUserDto } from 'src/users/users.dto';

interface UserWithConfirmation extends CreateUserDto {
  confirmPassword?: string;
}

describe('AuthService', () => {
  let service: AuthService;
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

    let mockUserRepository : Partial<UserRepository>

  

  beforeEach(async () => {
      mockUserRepository = {
      getUserByEmail:()=>Promise.resolve(undefined),
      addUser:(user:Partial<Users>):Promise<Partial<Users>>=> Promise.resolve({
        ...user,
        isAdmin:false,
        id:"dc760c34-6fd7-4821-b26d-7b10b7b1ee42"
      })

    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService,JwtService,{
        provide:UserRepository,
        useValue:mockUserRepository
      }],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('singUp() creates a new user with an encripted password', async() => {
    const user = await service.singUp(mockUser);
    expect(user).toBeDefined();
    expect(user.password).not.toEqual(mockUser.password)
  });

  it('singUp() throws an eroor if the email is already in use', async() => {
    mockUserRepository.getUserByEmail=(email: string)=> Promise.resolve(mockUser as Partial<Users>)
    try{
      await service.singUp(mockUser as UserWithConfirmation)
    }
    catch(error){

      expect(error.message).toEqual('Email already exist in DB')
    }
    
  });

  it('singIn() throws an eroor if password  is invalid', async() => {
    mockUserRepository.getUserByEmail=(email: string)=> Promise.resolve(mockUser as Partial<Users>)
    try{
      await service.signIn(mockUser.email,"INVALID PASSWORD >:c")
    }
    catch(error){

      expect(error.message).toEqual('Invalid credentials (uwu)')
    }
    
  });
  
});
