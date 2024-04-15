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
exports.LogginUserDto = exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 3, maxLength: 80 }, email: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 8, maxLength: 15, pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z\\d!@#$%^&*]*$/" }, address: { required: true, type: () => String, minLength: 3, maxLength: 80 }, phone: { required: true, type: () => Number }, country: { required: true, type: () => String, minLength: 5, maxLength: 20 }, city: { required: true, type: () => String, minLength: 5, maxLength: 20 }, isAdmin: { required: true, type: () => Boolean } };
    }
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de caracteres' }),
    (0, class_validator_1.MinLength)(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
    (0, class_validator_1.MaxLength)(80, { message: 'El nombre no debe superar los 80 caracteres' }),
    (0, swagger_1.ApiProperty)({
        description: "El nombre debe tener al menos 3 caracteres <br/>El nombre no debe superar los 80 caracteres ",
        example: "Nicolás"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo electrónico es obligatorio' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El correo electrónico debe ser válido' }),
    (0, swagger_1.ApiProperty)({
        description: "El correo electrónico debe ser válido",
        example: "correo@example.com"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La contraseña es obligatoria' }),
    (0, class_validator_1.MinLength)(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
    (0, class_validator_1.MaxLength)(15, { message: 'La contraseña no debe superar los 15 caracteres' }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]*$/, {
        message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*',
    }),
    (0, swagger_1.ApiProperty)({
        description: "La contraseña debe tener al menos 8 caracteres y contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*",
        example: "$2b$10$QKi"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La dirección es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La dirección debe ser una cadena de caracteres' }),
    (0, class_validator_1.MinLength)(3, { message: 'La dirección debe tener al menos 3 caracteres' }),
    (0, class_validator_1.MaxLength)(80, { message: 'La dirección no debe superar los 80 caracteres' }),
    (0, swagger_1.ApiProperty)({
        description: "La dirección debe tener al menos 3 caracteres y no superar los 80 caracteres",
        example: "Calle Principal 123"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El número de teléfono es obligatorio' }),
    (0, swagger_1.ApiProperty)({
        description: "El número de teléfono debe ser un número",
        example: 123456789
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El país es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El país debe ser una cadena de caracteres' }),
    (0, class_validator_1.MinLength)(5, { message: 'El país debe tener al menos 5 caracteres' }),
    (0, class_validator_1.MaxLength)(20, { message: 'El país no debe superar los 20 caracteres' }),
    (0, swagger_1.ApiProperty)({
        description: "El país debe tener al menos 5 caracteres y no superar los 20 caracteres",
        example: "Estados Unidos"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La ciudad es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La ciudad debe ser una cadena de caracteres' }),
    (0, class_validator_1.MinLength)(5, { message: 'La ciudad debe tener al menos 5 caracteres' }),
    (0, class_validator_1.MaxLength)(20, { message: 'La ciudad no debe superar los 20 caracteres' }),
    (0, swagger_1.ApiProperty)({
        description: "La ciudad debe tener al menos 5 caracteres y no superar los 20 caracteres",
        example: "Nueva York"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Indica si el usuario es administrador",
        example: false
    }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isAdmin", void 0);
class LogginUserDto extends (0, swagger_1.PickType)(CreateUserDto, [
    'password',
    'email',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.LogginUserDto = LogginUserDto;
//# sourceMappingURL=users.dto.js.map