import { ProductRepository } from './products.repository';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductRepository);
    addProducts(): Promise<string>;
}
