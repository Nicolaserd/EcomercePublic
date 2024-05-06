import { AuthService } from './auth.service';
import { CreateUserDto, LogginUserDto } from '../users/users.dto';
interface CustomRequest extends Request {
    oidc?: {
        user: any;
    };
}
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
    singUp(user: UserWithConfirmation): Promise<Partial<import("src/entities/users.entity").Users>>;
    getAuth0Protected(req: CustomRequest): Promise<{
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
