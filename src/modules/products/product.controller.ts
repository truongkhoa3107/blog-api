import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  getProducts(): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.getProducts(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>([], HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Post()
  createProduct(@Body() productDto: ProductDto): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.createProduct(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>([], HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Get(':id')
  getProduct(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.getProduct(id) || [],
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>([], HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Put(':id')
  updateProduct(
    @Body() productDto: ProductDto,
    @Param('id') id: number,
  ): ResponseData<Product> {
    try {
      const updatedProduct = this.productService.updateProduct(id, productDto);
      if (!updatedProduct) {
        return new ResponseData<Product>(
          [],
          HttpStatus.ERROR,
          `Product with ID ${id} not found`,
        );
      }
      return new ResponseData<Product>(
        updatedProduct,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        [],
        HttpStatus.ERROR,
        'Error updating product',
      );
    }
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): ResponseData<boolean> {
    try {
      return new ResponseData<boolean>(
        this.productService.deleteProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<boolean>(
        false,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
