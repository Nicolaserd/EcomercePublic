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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const users_dto_1 = require("../users/users.dto");
const swagger_1 = require("@nestjs/swagger");
class UserWithConfirmation extends users_dto_1.CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "La contraseña debe tener al menos 8 caracteres y contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*",
        example: "$2b$10$QKi"
    }),
    __metadata("design:type", String)
], UserWithConfirmation.prototype, "confirmPassword", void 0);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    singIn(credentials) {
        const { email, password } = credentials;
        return this.authService.signIn(email, password);
    }
    singUp(user) {
        return this.authService.singUp(user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/singin'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.LogginUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "singIn", null);
__decorate([
    (0, common_1.Post)('/signup'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserWithConfirmation]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "singUp", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map