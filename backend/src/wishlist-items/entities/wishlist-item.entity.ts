import { ApiProperty } from '@nestjs/swagger';
import { WishlistItem } from '@prisma/client';

export class WishlistItemEntity implements WishlistItem {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  productId: number;

  createdAt: Date;
  updatedAt: Date;
}
