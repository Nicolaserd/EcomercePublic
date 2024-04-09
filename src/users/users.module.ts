import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { OrdersController } from 'src/orders/orders.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService,UserRepository],
  imports:[TypeOrmModule.forFeature([Users])]
})
export class UsersModule {}
