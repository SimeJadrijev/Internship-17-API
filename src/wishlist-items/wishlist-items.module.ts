import { Module } from '@nestjs/common';
import { WishlistItemsService } from './wishlist-items.service';
import { WishlistItemsController } from './wishlist-items.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WishlistItemsController],
  providers: [WishlistItemsService],
  imports: [PrismaModule],
})
export class WishlistItemsModule {}
