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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../users/users.repository");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    getAuth() {
        return "Todos las Auth";
    }
    async signIn(email, password) {
        const userdb = await this.userRepository.getUserByEmail(email);
        if (!userdb) {
            throw new common_1.BadRequestException("Invalid credentials");
        }
        if (userdb.password !== password) {
            throw new common_1.BadRequestException("invalid credentials \-(uwu)-/");
        }
        const userPayload = {
            sub: userdb.id,
            id: userdb.id,
            email: userdb.email
        };
        const token = this.jwtService.sign(userPayload);
        return { success: "user logged in successfully", token };
    }
    async singUp(user) {
        if (!user) {
            throw new common_1.BadRequestException("Invalid user");
        }
        const userdb = await this.userRepository.getUserByEmail(user.email);
        if (userdb) {
            throw new common_1.BadRequestException("Email already exist in DB");
        }
        if (user.password !== user.confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const { confirmPassword, ...userData } = user;
        const userWithoutPassword = await this.userRepository.addUser(userData);
        return userWithoutPassword;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map