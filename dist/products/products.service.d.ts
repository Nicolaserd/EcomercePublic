import { ProductRepository } from './products.repository';
import { Products } from 'src/entities/products.entity';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductRepository);
    addProducts(): Promise<string>;
    getProducts(page: number, limit: number): Promise<Products[]>;
    getProduct(id: string): Promise<Products> | "product not found :c";
    updateProduct(id: string, product: Products): Promise<Products>;
}
