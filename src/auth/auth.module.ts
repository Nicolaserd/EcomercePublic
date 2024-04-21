import { Module,MiddlewareConsumer } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../users/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { requiresAuth } from 'express-openid-connect';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
  imports: [TypeOrmModule.forFeature([Users])],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    
    consumer.apply(requiresAuth()).forRoutes('Auth/Auth0/protected');
   
  }
}
