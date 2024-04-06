import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(page?: number, limit?: number): {
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
