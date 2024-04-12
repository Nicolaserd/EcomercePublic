import { ProductsService } from './products.service';
import { Products } from 'src/entities/products.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProducts(): Promise<string>;
    getProducts(page?: number, limit?: number): Promise<Products[]>;
    getProduct(id: string): "product not found :c" | Promise<Products>;
    updateProduct(id: string, product: Products): Promise<Products>;
}
