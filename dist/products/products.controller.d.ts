import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProducts(): Promise<string>;
    getProducts(page?: number, limit?: number): Promise<import("src/entities/products.entity").Products[]>;
    getProduct(id: string): Promise<import("src/entities/products.entity").Products> | "product not found :c";
}
