type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    imgUrl: string;
};
export declare class ProductRepository {
    private products;
    getProducts(): Product[];
}
export {};
