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
  createProduct(
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): ResponseData<ProductDto> {
    try {
      return new ResponseData<ProductDto>(
        this.productService.createProduct(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductDto>(
        [],
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
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
  updateProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.updateProduct(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Delete(':id')
  deleteProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.deleteProduct(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
}
