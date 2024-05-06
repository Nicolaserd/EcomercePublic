import { ProductsService } from './products.service';
import { Products } from '../entities/products.entity';
import { CreateProductDto } from './products.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProducts(): Promise<string>;
    getProducts(page?: number, limit?: number): Promise<Products[]>;
    getProduct(id: string): Promise<Products>;
    updateProduct(id: string, product: CreateProductDto): Promise<Partial<Products>>;
    addProduct(product: CreateProductDto): Promise<Partial<Products>>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult>;
}
