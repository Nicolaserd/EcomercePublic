import { ProductsService } from './products.service';
import { Products } from '../entities/products.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProducts(): Promise<string>;
    getProducts(page?: number, limit?: number): Promise<Products[]>;
    getProduct(id: string): Promise<Products>;
    updateProduct(id: string, product: any): Promise<Partial<Products>>;
}
