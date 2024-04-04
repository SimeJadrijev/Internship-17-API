import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
export class ProductEntity implements Product {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description: string | null;

  @ApiProperty({ required: false })
  image: string | null;

  @ApiProperty()
  price: number;

  @ApiProperty()
  available: number;

  @ApiProperty()
  categoryId: number;

  createdAt: Date;
  updatedAt: Date;
}
