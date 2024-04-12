import { Categories } from "src/entities/categories.entity";
import { Products } from "src/entities/products.entity";
import { Repository } from "typeorm";
export declare class ProductRepository {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: Repository<Products>, categoriesRepository: Repository<Categories>);
    getProducts(page: number, limit: number): Promise<Products[]>;
    getProduct(id: string): Promise<Products> | "product not found :c";
    addProducts(): Promise<string>;
    updateProduct(id: string, product: Products): Promise<Products>;
}
