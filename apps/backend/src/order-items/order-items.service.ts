import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}
  create(createOrderItemDto: CreateOrderItemDto) {
    return this.prisma.orderItem.create({ data: createOrderItemDto });
  }

  findAll() {
    return this.prisma.orderItem.findMany();
  }

  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.orderItem.findUnique({ where: { id } });
  }

  update(
    @Param('id', ParseIntPipe) id: number,
    updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return this.prisma.orderItem.update({
      where: { id },
      data: updateOrderItemDto,
    });
  }

  remove(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.orderItem.delete({ where: { id } });
  }
}
