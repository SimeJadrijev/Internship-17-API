import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';
import { UsersAuthGuard } from 'src/users/users-auth-guard';
import { AdminAuthGuard } from 'src/users/admins-auth.guard';

@Controller('products')
@ApiTags('Products')
@ApiCreatedResponse({ type: ProductEntity })
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Req() { user }, @Body() createProductDto: CreateProductDto) {
    console.log('this admin called create', user);

    return this.productsService.create(user.id, createProductDto);
  }

  @UseGuards(UsersAuthGuard)
  @Get()
  @ApiOkResponse({ type: ProductEntity, isArray: true })
  findAll(@Req() { user }) {
    console.log('user from products controller', user);

    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductEntity })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProductEntity })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProductEntity })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
