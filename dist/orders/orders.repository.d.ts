import { OrderDetails } from '../entities/orderdetails.entity';
import { Orders } from '../entities/orders.entity';
import { Products } from '../entities/products.entity';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
export declare class OrdersRepository {
    private ordersRepository;
    private ordersDetailsRepository;
    private userRepository;
    private productsRepository;
    constructor(ordersRepository: Repository<Orders>, ordersDetailsRepository: Repository<OrderDetails>, userRepository: Repository<Users>, productsRepository: Repository<Products>);
    addOrder(userId: string, products: Partial<Products[]>): Promise<Orders[]>;
    getOrder(id: string): Promise<Orders>;
}
