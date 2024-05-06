import { Users } from '../entities/users.entity';
import { UserRepository } from '../users/users.repository';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/users.dto';
declare class UserWithConfirmation extends CreateUserDto {
    confirmPassword?: string;
}
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signIn(email: string, password: string): Promise<{
        success: string;
        token: string;
    }>;
    singUp(user: UserWithConfirmation): Promise<Partial<Users>>;
    Auth0(req: any): Promise<{
        success: string;
        token: string;
    } | {
        success: string;
        userReturn: {
            email: any;
            password: any;
        };
    }>;
}
export {};
