import { AuthService } from './auth.service';
import { CreateUserDto, LogginUserDto } from '../users/users.dto';
import { Users } from '../entities/users.entity';
declare class UserWithConfirmation extends CreateUserDto {
    confirmPassword?: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    singIn(credentials: LogginUserDto): Promise<{
        success: string;
        token: string;
    }>;
    singUp(user: UserWithConfirmation): Promise<Partial<Users>>;
}
export {};
