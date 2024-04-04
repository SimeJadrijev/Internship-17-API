import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  orderId: number;

  createdAt: Date;
  updatedAt: Date;
}
