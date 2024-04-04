import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ default: false })
  isAdmin: boolean = false;

  createdAt: Date;
  updatedAt: Date;
}
