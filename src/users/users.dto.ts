import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

import { PickType } from '@nestjs/swagger';

export class CreateUserDto {
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    @MaxLength(80, { message: 'El nombre no debe superar los 80 caracteres' })
    name: string;

    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
    email: string;

    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    @MaxLength(15, { message: 'La contraseña no debe superar los 15 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]*$/, { 
        message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*' 
    })
    password: string;

    @IsNotEmpty({ message: 'La dirección es obligatoria' })
    @IsString({ message: 'La dirección debe ser una cadena de caracteres' })
    @MinLength(3, { message: 'La dirección debe tener al menos 3 caracteres' })
    @MaxLength(80, { message: 'La dirección no debe superar los 80 caracteres' })
    address: string;

    @IsNotEmpty({ message: 'El número de teléfono es obligatorio' })
    phone: string;

    @IsNotEmpty({ message: 'El país es obligatorio' })
    @IsString({ message: 'El país debe ser una cadena de caracteres' })
    @MinLength(5, { message: 'El país debe tener al menos 5 caracteres' })
    @MaxLength(20, { message: 'El país no debe superar los 20 caracteres' })
    country: string;

    @IsNotEmpty({ message: 'La ciudad es obligatoria' })
    @IsString({ message: 'La ciudad debe ser una cadena de caracteres' })
    @MinLength(5, { message: 'La ciudad debe tener al menos 5 caracteres' })
    @MaxLength(20, { message: 'La ciudad no debe superar los 20 caracteres' })
    city: string;
}

//!AQUI ESTA EL DTO DE AUTH
//!Mantener el codigo DRY
//*El principio DRY (Don't Repeat Yourself) es un concepto fundamental en la programación que promueve la reutilización del código.
//*En otras palabras, significa que no debes repetir el mismo fragmento de código en múltiples lugares.
//? mediante una libreria  npm i @nestjs/swagger

export class LogginUserDto extends PickType(CreateUserDto,[
    "password",
    "email"]){}