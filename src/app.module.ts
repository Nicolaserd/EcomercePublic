import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { JwtModule } from '@nestjs/jwt';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

@Module({
  imports: [
    //! generar un modulo de configuracion y tiene que estar disponible de forma global dentro de app module

    ConfigModule.forRoot({
      //? utiliza como fuente  typeorm el archivo (donde se definen las propiedades de acceso a la bd)
      isGlobal: true,
      load: [typeorm],
    }),
    //! Se define el modulo de type orm solicita la inyeccion del
    TypeOrmModule.forRootAsync({
      //! archivo de configuracion
      inject: [ConfigService],
      //? utiliza el objeto de configuracion no como un objeto sino como una instancia de data source
      useFactory: (config: ConfigService) => config.get('typeorm'),
    }),
    UsersModule,
    ProductsModule,
    AuthModule,
    CategoriesModule,
    OrdersModule,
    FileUploadModule,
    JwtModule.register({
      global: true,
      //? Pasar un tiempo de vida al jwt
      signOptions: { expiresIn: '1h' },
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
