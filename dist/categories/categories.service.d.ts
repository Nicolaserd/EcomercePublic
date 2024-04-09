import { CategoriesRepository } from './categories.repository';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    addCategories(): Promise<string>;
    getCategories(): Promise<import("src/entities/categories.entity").Categories[]>;
}
