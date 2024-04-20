import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from '../entities/categories.entity';
import { Products } from '../entities/products.entity';
import { Repository } from 'typeorm';
import * as data from '../data.json';
import { CreateProductDto } from './products.dto';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async getProducts(page: number, limit: number): Promise<Products[]> {
    let products = await this.productsRepository.find({
      relations: {
        category: true,
      },
    });

    const start = (page - 1) * limit;
    const end = start + +limit;
    products = products.slice(start, end);
    return products;
  }

  getProduct(id: string) {
    const product = this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException('product not found :c');
    }
    return product;
  }

  async addProducts() {
    const categories = await this.categoriesRepository.find();
    data?.map(async (element) => {
      const category = categories.find(
        (category) => category.name === element.category,
      );

      const product = new Products();
      product.name = element.name;
      product.description = element.description;
      product.price = element.price;
      product.imgUrl = element.imgUrl;
      product.stock = element.stock;
      product.category = category;

      await this.productsRepository
        .createQueryBuilder()
        .insert()
        .into(Products)
        .values(product)
        .orUpdate(['description', 'price', 'imgUrl', 'stock'], ['name'])
        .execute();
    });

    return 'products added';
  }

  async updateProduct(id: string, product: Partial<Products>) {
    
    const updateProductFind = await this.productsRepository.findOneBy({ id });
    if (!updateProductFind) {
      throw new NotFoundException('product not found :c');
    }
    await this.productsRepository.update(id, product);
    return product;
  }

  async addProduct(product:CreateProductDto): Promise <Partial<Products>>{

    const foundProduct = await this.productsRepository.findOne({where:{name:product.name}})

    if(foundProduct){
      throw new BadRequestException(`A product with the name '${product.name}' already exists.`)
    }
    console.log(product.categoryId)
    const categoryProduct = await this.categoriesRepository.findOne({where:{id:product.categoryId}})

    if(!categoryProduct){
      throw new NotFoundException('category not found :c');
    }

    const productadd = this.productsRepository.create(product);

    productadd.category = categoryProduct

    return  await this.productsRepository.save(productadd)


  }

  async deleteProduct (id:string){
    try {
      const delProduct = await this.productsRepository.delete(id)
      return delProduct
    } catch (error) {
      throw new InternalServerErrorException("Error al eliminar el producto:", error)
    }

    
  }
}
