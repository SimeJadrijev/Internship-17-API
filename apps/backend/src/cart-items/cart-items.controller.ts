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
import { CartItemsService } from './cart-items.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CartItemEntity } from './entities/cart-item.entity';
import { UsersAuthGuard } from 'src/users/users-auth-guard';

@Controller('cart-items')
@ApiTags('Cart Items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @UseGuards(UsersAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: CartItemEntity })
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.create(createCartItemDto);
  }

  @UseGuards(UsersAuthGuard)
  @Get()
  @ApiCreatedResponse({ type: CartItemEntity, isArray: true })
  findAll() {
    return this.cartItemsService.findAll();
  }

  @UseGuards(UsersAuthGuard)
  @Get(':id')
  @ApiCreatedResponse({ type: CartItemEntity })
  findOne(@Param('id') id: string) {
    return this.cartItemsService.findOne(+id);
  }

  @UseGuards(UsersAuthGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: CartItemEntity })
  update(
    @Param('id') id: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    return this.cartItemsService.update(+id, updateCartItemDto);
  }

  @UseGuards(UsersAuthGuard)
  @Delete(':id')
  @ApiCreatedResponse({ type: CartItemEntity })
  remove(@Param('id') id: string) {
    return this.cartItemsService.remove(+id);
  }
}
