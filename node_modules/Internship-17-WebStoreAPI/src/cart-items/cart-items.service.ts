import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartItemsService {
  constructor(private prisma: PrismaService) {}
  create(createCartItemDto: CreateCartItemDto) {
    return this.prisma.cartItem.create({ data: createCartItemDto });
  }

  findAll() {
    return this.prisma.cartItem.findMany();
  }

  findOne(@Param(ParseIntPipe) id: number) {
    return this.prisma.cartItem.findUnique({ where: { id } });
  }

  update(
    @Param('id', ParseIntPipe) id: number,
    updateCartItemDto: UpdateCartItemDto,
  ) {
    return this.prisma.cartItem.update({
      where: { id },
      data: updateCartItemDto,
    });
  }

  remove(@Param('id', ParseIntPipe) id: number) {
    return `This action removes a #${id} cartItem`;
  }
}
