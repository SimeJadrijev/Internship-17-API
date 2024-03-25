import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CartItemEntity } from './entities/cart-item.entity';

@Controller('cart-items')
@ApiTags('Cart Items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post()
  @ApiCreatedResponse({ type: CartItemEntity })
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.create(createCartItemDto);
  }

  @Get()
  @ApiCreatedResponse({ type: CartItemEntity, isArray: true })
  findAll() {
    return this.cartItemsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CartItemEntity })
  findOne(@Param('id') id: string) {
    return this.cartItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CartItemEntity })
  update(
    @Param('id') id: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    return this.cartItemsService.update(+id, updateCartItemDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CartItemEntity })
  remove(@Param('id') id: string) {
    return this.cartItemsService.remove(+id);
  }
}
