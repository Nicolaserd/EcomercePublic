import { UserRepository } from './users.repository';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UserRepository);
    getUsers(page: number, limit: number): {
        id: string;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    }[];
    getUser(id: string): {
        id: string;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    };
    addUser(user: any): {
        id: string;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    };
    updateUser(id: string, user: any): string;
    deleteUser(id: string): string;
}