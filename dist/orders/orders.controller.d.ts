import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly orderService;
    constructor(orderService: OrdersService);
    addOrder(order: any): Promise<import("src/entities/orders.entity").Orders[] | "user not found">;
    getOrder(id: string): Promise<import("src/entities/orders.entity").Orders | "order not found">;
}
