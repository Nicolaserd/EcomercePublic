import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService){}
  

    @Get("seeder")
    addProducts(){
        return this.productsService.addProducts() ;   
    }

    @Get()
    getProducts(@Query('page') page: number = 1, @Query('limit') limit: number = 5){
        return this.productsService.getProducts(page,limit);   
    }
    @Get(":id")
    getProduct(@Param("id",ParseUUIDPipe) id:string){
        return  this.productsService.getProduct(id);   
    }
    
}
