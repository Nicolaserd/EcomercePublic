"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 3, maxLength: 50 }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, imgUrl: { required: false, type: () => String }, categoryId: { required: false, type: () => String } };
    }
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de caracteres' }),
    (0, class_validator_1.MinLength)(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El nombre no debe superar los 50 caracteres' }),
    (0, swagger_1.ApiProperty)({
        description: "El nombre debe tener al menos 3 caracteres y no superar los 50 caracteres",
        example: "Producto ejemplo"
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La descripción es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser una cadena de caracteres' }),
    (0, swagger_1.ApiProperty)({
        description: "La descripción del producto",
        example: "Descripción del producto"
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El precio es obligatorio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio debe ser un número' }),
    (0, swagger_1.ApiProperty)({
        description: "El precio del producto",
        example: 10.99
    }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El stock es obligatorio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El stock debe ser un número' }),
    (0, swagger_1.ApiProperty)({
        description: "La cantidad de stock disponible del producto",
        example: 100
    }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'La URL de la imagen debe ser una cadena de caracteres' }),
    (0, swagger_1.ApiProperty)({
        description: "La URL de la imagen del producto (opcional)",
        example: "https://example.com/product-image.jpg"
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "imgUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)("4", { message: 'El ID de la categoría debe ser un UUID válido' }),
    (0, swagger_1.ApiProperty)({
        description: "El ID de la categoría del producto",
        example: "1e2de1cf-204f-4913-8846-763c5ab6a6fc"
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);
//# sourceMappingURL=products.dto.js.map