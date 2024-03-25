import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CartItemsModule } from './cart-items/cart-items.module';

@Module({
  imports: [PrismaModule, ProductsModule, UsersModule, CartItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
