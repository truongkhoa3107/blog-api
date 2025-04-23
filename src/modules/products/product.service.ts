import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 2, price: 1000000, productName: 'Keyboard' },
    { id: 2, categoryId: 3, price: 900000, productName: 'Keycap' },
  ];
  getProducts(): Product[] {
    return this.products;
  }

  createProduct(productDto: ProductDto): ProductDto {
    return productDto;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((item) => item.id === Number(id));
  }

  updateProduct(): string {
    return 'UPDATE PRODUCT';
  }

  deleteProduct(): string {
    return 'DELETE PRODUCT';
  }
}
