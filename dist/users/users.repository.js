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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../entities/users.entity");
const typeorm_2 = require("typeorm");
let UserRepository = class UserRepository {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUsers(page, limit) {
        let users = await this.usersRepository.find();
        const start = (page - 1) * limit;
        const end = start + +limit;
        users = users.slice(start, end);
        return users.map(({ password, isAdmin, ...user }) => user);
    }
    async getUser(id) {
        const user = await this.usersRepository.findOne({
            where: { id },
            relations: {
                orders: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        const { password, isAdmin, ...userWhitoutPasswordandAdmin } = user;
        return userWhitoutPasswordandAdmin;
    }
    async addUser(user) {
        const newUser = await this.usersRepository.save(user);
        const { password, isAdmin, ...userWhitoutPasswordandAdmin } = newUser;
        return userWhitoutPasswordandAdmin;
    }
    async updateUser(id, user) {
        await this.usersRepository.update(id, user);
        const updateUser = await this.usersRepository.findOneBy({ id });
        const { password, isAdmin, ...userWhitoutPasswordandAdmin } = updateUser;
        return userWhitoutPasswordandAdmin;
    }
    async deleteUser(id) {
        const user = await this.usersRepository.findOneBy({ id });
        this.usersRepository.remove(user);
        const { password, isAdmin, ...userWhitoutPasswordandAdmin } = user;
        return userWhitoutPasswordandAdmin;
    }
    async getUserByEmail(email) {
        const user = await this.usersRepository.findOneBy({ email });
        const { password, isAdmin, ...userWhitoutPasswordandAdmin } = user;
        return userWhitoutPasswordandAdmin;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
//# sourceMappingURL=users.repository.js.map