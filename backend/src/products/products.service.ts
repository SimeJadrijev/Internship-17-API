import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(
    @Param('id', ParseIntPipe) id: number,
    createProductDto: CreateProductDto,
  ) {
    return this.prisma.product.create({ data: { ...createProductDto, id } });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(
    @Param('id', ParseIntPipe) id: number,
    updateProductDto: UpdateProductDto,
  ) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
