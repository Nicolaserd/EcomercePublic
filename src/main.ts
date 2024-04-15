import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(loggerGlobal);
  app.useGlobalPipes(new ValidationPipe());
  const swaggerConfig = new DocumentBuilder()
    .setTitle("Ecommerce API")
    .setDescription("La API de eCommerce la especialización en backend es una herramienta integral diseñada para facilitar la integración de funcionalidades clave en plataformas de comercio electrónico. Esta API proporciona un conjunto de endpoints y funciones que permiten a los desarrolladores acceder y manipular datos relacionados con productos, clientes, pedidos y transacciones dentro de un entorno de comercio electrónico.")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app,swaggerConfig)
    SwaggerModule.setup("api",app,document)
  await app.listen(3000);
}

bootstrap();
