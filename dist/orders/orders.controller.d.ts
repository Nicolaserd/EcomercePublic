import { OrdersService } from './orders.service';
import { CreateOrderDto } from './orders.dto';
export declare class OrdersController {
    private readonly orderService;
    constructor(orderService: OrdersService);
    addOrder(order: CreateOrderDto): Promise<import("src/entities/orders.entity").Orders[] | "user not found">;
    getOrder(id: string): Promise<import("src/entities/orders.entity").Orders | "order not found">;
}
