import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductRepository } from './products.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/entities/products.entity';
import { Categories } from 'src/entities/categories.entity';
import { CategoriesRepository } from 'src/categories/categories.repository';

@Module({
 
  controllers: [ProductsController],
  providers: [ProductsService,ProductRepository],
  imports:[
    TypeOrmModule.forFeature([Products]),
    TypeOrmModule.forFeature([Categories])
  ]
})
export class ProductsModule {}
