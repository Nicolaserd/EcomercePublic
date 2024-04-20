import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products.repository';
import { Products } from '../entities/products.entity';
import { CreateProductDto } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductRepository) {}

  addProducts() {
    return this.productsRepository.addProducts();
  }

  getProducts(page: number, limit: number) {
    return this.productsRepository.getProducts(page, limit);
  }
  getProduct(id: string) {
    return this.productsRepository.getProduct(id);
  }
  updateProduct(id: string, product: Partial<Products>) {
    return this.productsRepository.updateProduct(id, product);
  }
  addProduct(product:CreateProductDto){
    return this.productsRepository.addProduct(product)
  }
}
