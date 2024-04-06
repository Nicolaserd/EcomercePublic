"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository {
    constructor() {
        this.users = [{
                id: "1",
                email: "usuario1@example.com",
                name: "Usuario 1",
                password: "contraseña1",
                address: "123 Calle Principal",
                phone: "123456789",
                country: "País 1",
                city: "Ciudad 1"
            },
            {
                id: "2",
                email: "usuario2@example.com",
                name: "Usuario 2",
                password: "contraseña2",
                address: "456 Calle Secundaria",
                phone: "987654321",
                country: "País 2",
                city: "Ciudad 2"
            },
            {
                id: "3",
                email: "usuario3@example.com",
                name: "Usuario 3",
                password: "contraseña3",
                address: "789 Calle Terciaria",
                phone: "123123123",
                country: "País 3",
                city: "Ciudad 3"
            },
            {
                id: "4",
                email: "usuario4@example.com",
                name: "Usuario 4",
                password: "contraseña4",
                address: "321 Calle Cuaternaria",
                phone: "456456456",
                country: "País 4",
                city: "Ciudad 4"
            },
            {
                id: "5",
                email: "usuario5@example.com",
                name: "Usuario 5",
                password: "contraseña5",
                address: "987 Calle Quinaria",
                phone: "789789789",
                country: "País 5",
                city: "Ciudad 5"
            },
            {
                id: "6",
                email: "usuario6@example.com",
                name: "Usuario 6",
                password: "contraseña6",
                address: "654 Calle Senaria",
                phone: "321321321",
                country: "País 6",
                city: "Ciudad 6"
            },
            {
                id: "7",
                email: "usuario7@example.com",
                name: "Usuario 7",
                password: "contraseña7",
                address: "234 Calle Septenaria",
                phone: "654654654",
                country: "País 7",
                city: "Ciudad 7"
            },
            {
                id: "8",
                email: "usuario8@example.com",
                name: "Usuario 8",
                password: "contraseña8",
                address: "543 Calle Octonaria",
                phone: "987987987",
                country: "País 8",
                city: "Ciudad 8"
            },
            {
                id: "9",
                email: "usuario9@example.com",
                name: "Usuario 9",
                password: "contraseña9",
                address: "765 Calle Novenaria",
                phone: "789123789",
                country: "País 9",
                city: "Ciudad 9"
            },
            {
                id: "10",
                email: "usuario10@example.com",
                name: "Usuario 10",
                password: "contraseña10",
                address: "876 Calle Decenaria",
                phone: "456789123",
                country: "País 10",
                city: "Ciudad 10"
            }];
    }
    getUsers(page, limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        const users = this.users.slice(start, end);
        return users.map(({ password, ...user }) => user);
    }
    getById(id) {
        const user = this.users.find((user) => user.id === id);
        const { password, ...userWhitoutPassword } = user;
        return userWhitoutPassword;
    }
    addUser(user) {
        const id = this.users.length + 1;
        user.id = id.toString();
        this.users.push(user);
        const { password, ...userWhitoutPassword } = user;
        return userWhitoutPassword;
    }
    updateUser(id, user) {
        const oldUser = this.users.find((user) => user.id === id);
        if (!oldUser) {
            return "No se encontro usuario :c";
        }
        const updatedUser = { ...oldUser, ...user };
        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = updatedUser;
        return updatedUser.id;
    }
    deleteUser(id) {
        const index = this.users.findIndex((user) => user.id === id);
        const user = this.users[index];
        this.users.splice(index, 1);
        return user.id;
    }
    getUsersByEmail(email) {
        return this.users.find((user) => user.email === email);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)()
], UserRepository);
//# sourceMappingURL=users.repository.js.map