import { Injectable } from '@nestjs/common';
import { User } from './User';

@Injectable()
export class UsersService {
  register(user: User) {
    return user;
  }

  getAll() {
    return [];
  }

  getById(id: string) {
    return id;
  }

  updateUser(id: string, user: User) {
    return { id, ...user };
  }

  deleteUser(id: string) {
    return id;
  }
}
