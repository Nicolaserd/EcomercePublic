import { Categories } from '../entities/categories.entity';
import { Products } from '../entities/products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './products.dto';
export declare class ProductRepository {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: Repository<Products>, categoriesRepository: Repository<Categories>);
    getProducts(page: number, limit: number): Promise<Products[]>;
    getProduct(id: string): Promise<Products>;
    addProducts(): Promise<string>;
    updateProduct(id: string, product: Partial<Products>): Promise<Partial<Products>>;
    addProduct(product: CreateProductDto): Promise<Partial<Products>>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult>;
}
