import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 2, price: 1000000, productName: 'Keyboard' },
    { id: 2, categoryId: 3, price: 900000, productName: 'Keycap' },
  ];
  private getNextId(): number {
    return (this.products[this.products.length - 1]?.id ?? 0) + 1;
  }

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(productDto: ProductDto): Product {
    const product: Product = {
      id: this.getNextId(),
      ...productDto,
    };
    this.products.push(product);
    return product;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((item) => item.id === Number(id));
  }

  updateProduct(id: number, productDto: ProductDto): Product {
    const product = this.products.find((item) => item.id === Number(id));
    if (product) {
      product.categoryId = productDto.categoryId;
      product.productName = productDto.productName;
      product.price = productDto.price;
      return product;
    } else {
      throw new Error(`Product with ID ${id} not found`);
    }
  }

  deleteProduct(id: number): boolean {
    const index = this.products.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
