import { AuthService } from './auth.service';
import { CreateUserDto, LogginUserDto } from 'src/users/users.dto';
import { Users } from 'src/entities/users.entity';
interface UserWithConfirmation extends CreateUserDto {
    confirmPassword?: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getUsers(): string;
    singIn(credentials: LogginUserDto): Promise<{
        success: string;
        token: string;
    }>;
    singUp(user: UserWithConfirmation): Promise<Partial<Users>>;
}
export {};
