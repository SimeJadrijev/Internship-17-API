import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { OrderItemEntity } from './entities/order-item.entity';
import { UsersAuthGuard } from 'src/users/users-auth-guard';

@Controller('order-items')
@ApiTags('Order Items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @UseGuards(UsersAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: OrderItemEntity })
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @UseGuards(UsersAuthGuard)
  @Get()
  @ApiCreatedResponse({ type: OrderItemEntity, isArray: true })
  findAll() {
    return this.orderItemsService.findAll();
  }

  @UseGuards(UsersAuthGuard)
  @Get(':id')
  @ApiCreatedResponse({ type: OrderItemEntity })
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @UseGuards(UsersAuthGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: OrderItemEntity })
  update(
    @Param('id') id: string,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @UseGuards(UsersAuthGuard)
  @Delete(':id')
  @ApiCreatedResponse({ type: OrderItemEntity })
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }
}
