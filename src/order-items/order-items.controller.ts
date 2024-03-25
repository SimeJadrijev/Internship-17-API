import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { OrderItemEntity } from './entities/order-item.entity';

@Controller('order-items')
@ApiTags('Order Items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @ApiCreatedResponse({ type: OrderItemEntity })
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  @ApiCreatedResponse({ type: OrderItemEntity, isArray: true })
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: OrderItemEntity })
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: OrderItemEntity })
  update(
    @Param('id') id: string,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: OrderItemEntity })
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }
}
