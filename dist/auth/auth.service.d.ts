import { Users } from 'src/entities/users.entity';
import { UserRepository } from 'src/users/users.repository';
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    getAuth(): string;
    signIn(email: string, password: string): Promise<{
        success: string;
        token: string;
    }>;
    singUp(user: Users): Promise<void>;
}
