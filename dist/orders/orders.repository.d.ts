import { OrderDetails } from "src/entities/orderdetails.entity";
import { Orders } from "src/entities/orders.entity";
import { Products } from "src/entities/products.entity";
import { Users } from "src/entities/users.entity";
import { Repository } from "typeorm";
export declare class OrdersRepository {
    private ordersRepository;
    private ordersDetailsRepository;
    private userRepository;
    private productsRepository;
    constructor(ordersRepository: Repository<Orders>, ordersDetailsRepository: Repository<OrderDetails>, userRepository: Repository<Users>, productsRepository: Repository<Products>);
    addOrder(userId: string, products: any): Promise<Orders[] | "user not found">;
    getOrder(id: string): Promise<Orders | "order not found">;
}
