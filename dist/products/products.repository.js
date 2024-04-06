"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductRepository = class ProductRepository {
    constructor() {
        this.products = [
            {
                id: 1,
                name: "Laptop Dell Inspiron 15",
                description: "Laptop de 15 pulgadas con procesador Intel Core i5, 8 GB de RAM y 512 GB de almacenamiento SSD.",
                price: 899.99,
                stock: true,
                imgUrl: "https://example.com/laptop_dell_inspiron_15.jpg"
            },
            {
                id: 2,
                name: "Smartphone Samsung Galaxy S21",
                description: "Smartphone Android de gama alta con pantalla AMOLED de 6.2 pulgadas, procesador Exynos 2100 y cámara principal de 108 MP.",
                price: 999.99,
                stock: true,
                imgUrl: "https://example.com/samsung_galaxy_s21.jpg"
            },
            {
                id: 3,
                name: "Tablet Apple iPad Air",
                description: "Tablet de 10.9 pulgadas con chip A14 Bionic, compatible con Apple Pencil y teclado Magic Keyboard.",
                price: 599.99,
                stock: false,
                imgUrl: "https://example.com/apple_ipad_air.jpg"
            },
            {
                id: 4,
                name: "Monitor LG UltraWide 34\"",
                description: "Monitor UltraWide de 34 pulgadas con resolución QHD, tecnología IPS y frecuencia de actualización de 144 Hz.",
                price: 799.99,
                stock: true,
                imgUrl: "https://example.com/lg_ultrawide_monitor.jpg"
            },
            {
                id: 5,
                name: "Cámara Canon EOS R5",
                description: "Cámara mirrorless de 45 MP con grabación de vídeo 8K, estabilización de imagen de 5 ejes y enfoque automático avanzado.",
                price: 3899.99,
                stock: true,
                imgUrl: "https://example.com/canon_eos_r5.jpg"
            }
        ];
    }
    getProducts() {
        return this.products;
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)()
], ProductRepository);
//# sourceMappingURL=products.repository.js.map