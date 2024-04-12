import { ApiProperty } from '@nestjs/swagger';
import { Order, OrderItem } from '@prisma/client';

export class OrderItemEntity implements OrderItem {
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
