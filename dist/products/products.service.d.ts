import { ProductRepository } from './products.repository';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductRepository);
    addProducts(): Promise<string>;
    getProducts(page: number, limit: number): Promise<import("src/entities/products.entity").Products[]>;
    getProduct(id: string): Promise<import("src/entities/products.entity").Products> | "product not found :c";
}
