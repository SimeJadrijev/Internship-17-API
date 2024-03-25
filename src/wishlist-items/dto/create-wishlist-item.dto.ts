import { ApiProperty } from '@nestjs/swagger';

export class CreateWishlistItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  productId: number;

  createdAt: Date;
  updatedAt: Date;
}
