import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    addCategories(): Promise<string>;
    getCategories(): Promise<import("src/entities/categories.entity").Categories[]>;
}
