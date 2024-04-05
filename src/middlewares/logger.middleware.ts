import { Injectable,NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()

export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Estas en la ruta ${req.url}`)
        next()
    }
}

export function loggerGlobal(req: Request, res: Response, next: NextFunction){
    // Obtener la fecha y hora actual
const fechaHoraActual = new Date();

// Obtener los componentes de la fecha y hora
const año = fechaHoraActual.getFullYear();
const mes = fechaHoraActual.getMonth() + 1; // Se agrega 1 porque los meses se indexan desde 0
const dia = fechaHoraActual.getDate();
const hora = fechaHoraActual.getHours();
const minutos = fechaHoraActual.getMinutes();
const segundos = fechaHoraActual.getSeconds();

// Formatear la fecha y hora
const fechaHoraFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia} ${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

console.log("Fecha y hora actual:", fechaHoraFormateada);
console.log(`Estas en la ruta ${req.url}`)
next()
}