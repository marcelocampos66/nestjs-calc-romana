import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.schema';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post()
  async register(@Body() user: UserDto): Promise<User> {
    return this.UsersService.register(user);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.UsersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.UsersService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: UserDto): Promise<User> {
    const result = await this.UsersService.updateUser(id, user);
    return result;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    await this.UsersService.deleteUser(id);
    return { message: 'User succesfully deleted' };
  }
}
