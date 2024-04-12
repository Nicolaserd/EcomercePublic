import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { Products } from 'src/entities/products.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsArray()
  @ArrayMinSize(1)
  //? Validacion con el tipo de producto tambien se puede usar strign porque el uuid es string
  //! es mejor esta forma
  //* :D
  products: Partial<Products[]>;
}
