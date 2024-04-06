type User = {
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country?: string | undefined;
    city?: string | undefined;
};
export declare class UserRepository {
    private users;
    getUsers(page: number, limit: number): {
        id: string;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    }[];
    getById(id: string): {
        id: string;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    };
    addUser(user: User): {
        id: string;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
    };
    updateUser(id: string, user: User): string;
    deleteUser(id: string): string;
    getUsersByEmail(email: string): User;
}
export {};
