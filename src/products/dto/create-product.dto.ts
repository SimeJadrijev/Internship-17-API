import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  image: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  available: number;

  @ApiProperty()
  categoryId: number;
}
