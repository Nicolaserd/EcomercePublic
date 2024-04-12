import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
export declare class UserRepository {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    getUsers(page: number, limit: number): Promise<Partial<Users>[]>;
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
    addUser(user: Partial<Users>): Promise<Partial<Users>>;
    updateUser(id: string, user: Users): Promise<{
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
