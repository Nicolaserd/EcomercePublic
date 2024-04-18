"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(logger_middleware_1.loggerGlobal);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle("Ecommerce API")
        .setDescription("La API de eCommerce la especialización en backend es una herramienta integral diseñada para facilitar la integración de funcionalidades clave en plataformas de comercio electrónico. Esta API proporciona un conjunto de endpoints y funciones que permiten a los desarrolladores acceder y manipular datos relacionados con productos, clientes, pedidos y transacciones dentro de un entorno de comercio electrónico.")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map