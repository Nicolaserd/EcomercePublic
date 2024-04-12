import { UsersService } from './users.service';
import { Users } from 'src/entities/users.entity';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(page?: number, limit?: number): Promise<Partial<Users>[]>;
    getUser(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders: import("src/entities/orders.entity").Orders[];
    }>;
    updateUser(id: string, user: any): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders: import("src/entities/orders.entity").Orders[];
    }>;
    deleteUser(id: string): Promise<Partial<Users>>;
    getUserByEmail(email: string): Promise<Users>;
}
