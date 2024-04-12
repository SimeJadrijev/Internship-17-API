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
import { WishlistItemsService } from './wishlist-items.service';
import { CreateWishlistItemDto } from './dto/create-wishlist-item.dto';
import { UpdateWishlistItemDto } from './dto/update-wishlist-item.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { WishlistItemEntity } from './entities/wishlist-item.entity';
import { UsersAuthGuard } from 'src/users/users-auth-guard';

@Controller('wishlist-items')
@ApiTags('Wishlist Items')
export class WishlistItemsController {
  constructor(private readonly wishlistItemsService: WishlistItemsService) {}

  @UseGuards(UsersAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: WishlistItemEntity })
  create(@Body() createWishlistItemDto: CreateWishlistItemDto) {
    return this.wishlistItemsService.create(createWishlistItemDto);
  }

  @UseGuards(UsersAuthGuard)
  @Get()
  @ApiCreatedResponse({ type: WishlistItemEntity, isArray: true })
  findAll() {
    return this.wishlistItemsService.findAll();
  }

  @UseGuards(UsersAuthGuard)
  @Get(':id')
  @ApiCreatedResponse({ type: WishlistItemEntity })
  findOne(@Param('id') id: string) {
    return this.wishlistItemsService.findOne(+id);
  }

  @UseGuards(UsersAuthGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: WishlistItemEntity })
  update(
    @Param('id') id: string,
    @Body() updateWishlistItemDto: UpdateWishlistItemDto,
  ) {
    return this.wishlistItemsService.update(+id, updateWishlistItemDto);
  }

  @UseGuards(UsersAuthGuard)
  @Delete(':id')
  @ApiCreatedResponse({ type: WishlistItemEntity })
  remove(@Param('id') id: string) {
    return this.wishlistItemsService.remove(+id);
  }
}
