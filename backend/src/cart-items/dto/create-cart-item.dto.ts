import { ApiProperty } from '@nestjs/swagger';

export class CreateCartItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  quantity: number;

  createdAt: Date;
  updatedAt: Date;
}
