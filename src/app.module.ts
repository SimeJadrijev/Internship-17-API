import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { WishlistItemsModule } from './wishlist-items/wishlist-items.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [PrismaModule, ProductsModule, UsersModule, CartItemsModule, WishlistItemsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
