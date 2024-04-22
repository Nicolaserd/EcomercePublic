import { IsNotEmpty, IsString, MaxLength, MinLength, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(50, { message: 'El nombre no debe superar los 50 caracteres' })
  @ApiProperty({
    description: "El nombre debe tener al menos 3 caracteres y no superar los 50 caracteres",
    example: "Producto ejemplo"
  })
  name: string;

  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  @IsString({ message: 'La descripción debe ser una cadena de caracteres' })
  @ApiProperty({
    description: "La descripción del producto",
    example: "Descripción del producto"
  })
  description: string;

  @IsNotEmpty({ message: 'El precio es obligatorio' })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  @ApiProperty({
    description: "El precio del producto",
    example: 10.99
  })
  price: number;

  @IsNotEmpty({ message: 'El stock es obligatorio' })
  @IsNumber({}, { message: 'El stock debe ser un número' })
  @ApiProperty({
    description: "La cantidad de stock disponible del producto",
    example: 100
  })
  stock: number;

  @IsOptional()
  @IsString({ message: 'La URL de la imagen debe ser una cadena de caracteres' })
  @ApiProperty({
    description: "La URL de la imagen del producto (opcional)",
    example: "https://example.com/product-image.jpg"
  })
  imgUrl?: string;

  @IsOptional()
  @IsUUID("4", { message: 'El ID de la categoría debe ser un UUID válido' })
  @ApiProperty({
    description: "El ID de la categoría del producto",
    example: "1e2de1cf-204f-4913-8846-763c5ab6a6fc"
  })
  categoryId?: string;
}
