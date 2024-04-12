import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(username: string, password: string) {
    // if (!username) throw new BadRequestException("Missing 'username' field");
    // if (!password) throw new BadRequestException("Missing 'password' field");

    const existingUser = await this.prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) throw new BadRequestException('User already exists');

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    const payload = {
      id: user.id,
      username: user.username,
      role: 'user',
    };

    return { token: this.jwtService.sign(payload) };
  }

  async login(username: string, password: string) {
    // if (!username) throw new BadRequestException("Missing 'username' field");
    // if (!password) throw new BadRequestException("Missing 'password' field");

    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user) throw new BadRequestException('User does not exist');

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) throw new ForbiddenException('Invalid password');

    const payload = {
      id: user.id,
      username: user.username,
      role: user.isAdmin ? 'admin' : 'user',
    };

    return { token: this.jwtService.sign(payload) };
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(@Param('id', ParseIntPipe) id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
