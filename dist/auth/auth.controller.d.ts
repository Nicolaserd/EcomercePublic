import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getUsers(): string;
    singIn(credentials: any): "email and password required" | "user not found" | "you are loggin :D con token (deberia enviarse)" | "invalid credentials -(uwu)-/";
}
