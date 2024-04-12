import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateWishlistItemDto } from './dto/create-wishlist-item.dto';
import { UpdateWishlistItemDto } from './dto/update-wishlist-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishlistItemsService {
  constructor(private prisma: PrismaService) {}
  create(createWishlistItemDto: CreateWishlistItemDto) {
    return this.prisma.wishlistItem.create({ data: createWishlistItemDto });
  }

  findAll() {
    return this.prisma.wishlistItem.findMany();
  }

  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.wishlistItem.findUnique({ where: { id } });
  }

  update(
    @Param('id', ParseIntPipe) id: number,
    updateWishlistItemDto: UpdateWishlistItemDto,
  ) {
    return this.prisma.wishlistItem.update({
      where: { id },
      data: updateWishlistItemDto,
    });
  }

  remove(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.wishlistItem.delete({ where: { id } });
  }
}
