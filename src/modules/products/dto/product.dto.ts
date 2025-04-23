import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  categoryId?: number;

  @MinLength(5, { message: 'This field must be more than 5 characters' })
  productName?: string;

  @IsNumber()
  price?: number;
}
