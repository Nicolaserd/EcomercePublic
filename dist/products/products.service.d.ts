import { ProductRepository } from './products.repository';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductRepository);
    getProducts(): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[];
}
