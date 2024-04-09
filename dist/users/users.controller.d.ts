import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(page?: number, limit?: number): Promise<Partial<import("src/entities/users.entity").Users>[]>;
    getUser(id: string): Promise<"user not found" | {
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: import("src/entities/orders.entity").Orders[];
    }>;
    addUser(user: any): Promise<Partial<import("src/entities/users.entity").Users>>;
    updateUser(id: string, user: any): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: import("src/entities/orders.entity").Orders[];
    }>;
    deleteUser(id: string): Promise<Partial<import("src/entities/users.entity").Users>>;
    getUserByEmail(email: string): Promise<import("src/entities/users.entity").Users>;
}
