import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { OrdersRepository } from './orders.repository';
import { Orders } from '../entities/orders.entity';
import { NotFoundException } from '@nestjs/common';

describe('OrdersService', () => {
  let service: OrdersService;
  let repository: OrdersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: OrdersRepository,
          useValue: {
            addOrder: jest.fn(),
            getOrder: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    repository = module.get<OrdersRepository>(OrdersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addOrder', () => {
    it('should add an order', async () => {
      const userId = 'user-id';
      const products = [{
        id: 'e9c33a3e-34cb-4cb5-a98c-4f8b25b31d8f',
        name: 'Producto de ejemplo',
        description: 'Esta es una descripción de ejemplo para el producto.',
        price: 49.99,
        stock: 100,
        imgUrl: 'https://ejemplo.com/imagen.jpg',
        category:null,
        orderDetails:[]
      }];

      await service.addOrder(userId, products);

      expect(repository.addOrder).toHaveBeenCalledWith(userId, products);
    });
  });

  describe('getOrder', () => {
    it('should return an order', async () => {
      const orderId = 'order-id';
      const order = { id: orderId };

      jest.spyOn(repository, 'getOrder').mockResolvedValue(order as Orders);

      const result = await service.getOrder(orderId);

      expect(result).toEqual(order);
      expect(repository.getOrder).toHaveBeenCalledWith(orderId);
    });

    it('should throw NotFoundException if order not found', async () => {
        const orderId = 'non-existent-order-id';
    
        jest.spyOn(repository, 'getOrder').mockRejectedValue(new NotFoundException('order not found'));
    
        await expect(service.getOrder(orderId)).rejects.toThrowError(NotFoundException);
        expect(repository.getOrder).toHaveBeenCalledWith(orderId);
      });
  });
});
