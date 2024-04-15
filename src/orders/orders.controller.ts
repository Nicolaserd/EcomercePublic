import {
  Body,
  Controller,
  Get,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './orders.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Orders")
@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}
  @Post()
  @UseGuards(AuthGuard)
  addOrder(@Body() order: CreateOrderDto) {
    const { userId, products } = order;
    return this.orderService.addOrder(userId, products);
  }

  @Get('')
  @UseGuards(AuthGuard)
  getOrder(@Query('id', ParseUUIDPipe) id: string) {
    return this.orderService.getOrder(id);
  }
}
