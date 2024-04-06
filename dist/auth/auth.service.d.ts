import { UserRepository } from 'src/users/users.repository';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getAuth(): string;
    signIn(email: string, password: string): "email and password required" | "user not found" | "you are loggin :D con token (deberia enviarse)" | "invalid credentials -(uwu)-/";
}
