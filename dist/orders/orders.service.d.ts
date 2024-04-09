import { OrdersRepository } from './orders.repository';
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    addOrder(userId: string, products: any): Promise<import("src/entities/orders.entity").Orders[] | "user not found">;
    getOrder(id: string): Promise<import("src/entities/orders.entity").Orders | "order not found">;
}
