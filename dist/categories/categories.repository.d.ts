import { Categories } from "src/entities/categories.entity";
import { Repository } from "typeorm";
export declare class CategoriesRepository {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Categories>);
    getCategories(): Promise<Categories[]>;
    addCategories(): Promise<string>;
}
