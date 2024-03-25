import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { OrderEntity } from './entities/order.entity';
import { query } from 'express';

@Controller('orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiCreatedResponse({ type: OrderEntity })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiCreatedResponse({ type: OrderEntity, isArray: true })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: OrderEntity })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Get('search')
  @ApiCreatedResponse({ type: OrderEntity, isArray: true })
  findBySearch(@Query('search') searchedValue: string) {
    return this.ordersService.findBySearch(searchedValue);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: OrderEntity })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: OrderEntity })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
