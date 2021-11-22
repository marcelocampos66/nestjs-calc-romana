import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './User';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post()
  async register(@Body() user: User) {
    return this.UsersService.register(user);
  }

  @Get()
  async getAll() {
    return this.UsersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.UsersService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User) {
    return this.UsersService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.UsersService.deleteUser(id);
    return { message: 'User succesfully deleted' };
  }
}
