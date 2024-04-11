import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor (private readonly productsRepository:ProductRepository){}
   
    addProducts(){
        return this.productsRepository.addProducts();
    }

    getProducts(page:number, limit:number){
        return this.productsRepository.getProducts(page,limit);
    }
    getProduct(id:string){
        return this.productsRepository.getProduct(id);
    }
}
