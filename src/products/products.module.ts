import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductRepository } from './products.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from '../entities/products.entity';
import { Categories } from '../entities/categories.entity';


@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository],
  imports: [
    TypeOrmModule.forFeature([Products]),
    TypeOrmModule.forFeature([Categories]),
  ],
})
export class ProductsModule {}
