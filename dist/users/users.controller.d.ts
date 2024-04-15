import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';
import { Users } from '../entities/users.entity';
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
        orders: import("src/entities/orders.entity").Orders[];
    }>;
    updateUser(id: string, user: Partial<CreateUserDto>): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: import("src/entities/orders.entity").Orders[];
    }>;
    deleteUser(id: string): Promise<Partial<Users>>;
    getUserByEmail(email: string): Promise<Partial<Users>>;
}
