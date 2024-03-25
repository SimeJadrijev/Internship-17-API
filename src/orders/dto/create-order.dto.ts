import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  createdAt: Date;
  updatedAt: Date;
}
