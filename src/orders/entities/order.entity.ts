import { ApiProperty } from '@nestjs/swagger';
import { Order } from '@prisma/client';

export class OrderEntity implements Order {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  createdAt: Date;
  updatedAt: Date;
}
