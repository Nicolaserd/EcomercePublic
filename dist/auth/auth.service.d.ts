import { UserRepository } from 'src/users/users.repository';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getAuth(): string;
    signIn(email: string, password: string): string;
}
