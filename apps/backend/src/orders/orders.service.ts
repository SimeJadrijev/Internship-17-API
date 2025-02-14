import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({ data: createOrderDto });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  findBySearch(searchedValue: string) {
    return this.prisma.product.findMany({
      where: { title: { contains: searchedValue, mode: 'insensitive' } },
    });
  }

  update(
    @Param('id', ParseIntPipe) id: number,
    updateOrderDto: UpdateOrderDto,
  ) {
    return this.prisma.order.update({ where: { id }, data: updateOrderDto });
  }

  remove(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
