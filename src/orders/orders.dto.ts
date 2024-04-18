import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { Products } from 'src/entities/products.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: "El ID del usuario debe ser un UUID válido",
    example: "123e4567-e89b-12d3-a456-426614174000"
  })
  userId: string;

  @IsArray()
  @ArrayMinSize(1)
  @ApiProperty({
    description: "Lista de productos mínimo 1",
    example: [{"id": "b5e856fa-de12-479b-ab96-2eeb85f7bc69"},{"id":"123e4567-e89b-12d3-a456-426614174000"}]
  })

  products: Partial<Products[]>;
}
