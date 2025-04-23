import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './modules/products/product.module';

@Module({
  imports: [AuthModule, ProductModule],
})
export class AppModule {}
