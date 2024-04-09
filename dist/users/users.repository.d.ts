import { Orders } from "src/entities/orders.entity";
import { Users } from "src/entities/users.entity";
import { Repository } from "typeorm";
export declare class UserRepository {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    getUsers(page: number, limit: number): Promise<Partial<Users>[]>;
    getUser(id: string): Promise<"user not found" | {
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: Orders[];
    }>;
    addUser(user: Users): Promise<Partial<Users>>;
    updateUser(id: string, user: Users): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: Orders[];
    }>;
    deleteUser(id: string): Promise<Partial<Users>>;
    getUserByEmail(email: string): Promise<Users>;
}
