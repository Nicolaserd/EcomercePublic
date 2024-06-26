import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { Users } from '../entities/users.entity';
import { Products } from '../entities/products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from '../entities/orderdetails.entity';
import { Orders } from '../entities/orders.entity';

@Module({
  providers: [OrdersService, OrdersRepository],
  controllers: [OrdersController],
  imports: [
    TypeOrmModule.forFeature([Products]),
    TypeOrmModule.forFeature([Users]),
    TypeOrmModule.forFeature([OrderDetails]),
    TypeOrmModule.forFeature([Orders]),
  ],
})
export class OrdersModule {}
