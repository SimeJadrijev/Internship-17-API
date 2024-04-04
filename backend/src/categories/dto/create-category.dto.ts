import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  createdAt: Date;
  updatedAt: Date;
}
