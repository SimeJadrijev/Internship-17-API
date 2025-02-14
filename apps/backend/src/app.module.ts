import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { WishlistItemsModule } from './wishlist-items/wishlist-items.module';
import { CategoriesModule } from './categories/categories.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrdersModule } from './orders/orders.module';
import * as cors from 'cors';

@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    UsersModule,
    CartItemsModule,
    WishlistItemsModule,
    CategoriesModule,
    OrderItemsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
