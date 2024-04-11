import { AuthService } from './auth.service';
import { LogginUserDto } from 'src/users/users.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getUsers(): string;
    singIn(credentials: LogginUserDto): string;
}
