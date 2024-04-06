import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor (private readonly productsRepository:ProductRepository){}
    getProducts(){
        return this.productsRepository.getProducts();
    }
}
