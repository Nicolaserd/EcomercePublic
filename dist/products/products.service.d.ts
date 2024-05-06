import { ProductRepository } from './products.repository';
import { Products } from '../entities/products.entity';
import { CreateProductDto } from './products.dto';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductRepository);
    addProducts(): Promise<string>;
    getProducts(page: number, limit: number): Promise<Products[]>;
    getProduct(id: string): Promise<Products>;
    updateProduct(id: string, product: Partial<Products>): Promise<Partial<Products>>;
    addProduct(product: CreateProductDto): Promise<Partial<Products>>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult>;
}
