"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerGlobal = exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
let LoggerMiddleware = class LoggerMiddleware {
    use(req, res, next) {
        console.log(`Estas en la ruta ${req.url}`);
        next();
    }
};
exports.LoggerMiddleware = LoggerMiddleware;
exports.LoggerMiddleware = LoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], LoggerMiddleware);
function loggerGlobal(req, res, next) {
    const fechaHoraActual = new Date();
    const año = fechaHoraActual.getFullYear();
    const mes = fechaHoraActual.getMonth() + 1;
    const dia = fechaHoraActual.getDate();
    const hora = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();
    const segundos = fechaHoraActual.getSeconds();
    const fechaHoraFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia} ${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    console.log("Fecha y hora actual:", fechaHoraFormateada);
    console.log(`Estas en la ruta ${req.url}`);
    next();
}
exports.loggerGlobal = loggerGlobal;
//# sourceMappingURL=logger.middleware.js.map