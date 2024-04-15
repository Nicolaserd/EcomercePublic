import { OrdersRepository } from './orders.repository';
import { Products } from '../entities/products.entity';
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    addOrder(userId: string, products: Partial<Products[]>): Promise<import("src/entities/orders.entity").Orders[]>;
    getOrder(id: string): Promise<import("src/entities/orders.entity").Orders>;
}
