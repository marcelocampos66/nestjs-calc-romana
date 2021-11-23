import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { ObjectId } from 'mongoose';

interface ILocalStrategyUser {
  id: ObjectId;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.getByEmail(email);
    const passwordIsValid = await bcrypt.compare(password, user?.password);
    if (user && passwordIsValid) {
      const { _id, name, email } = user;
      return { id: _id, name, email };
    }
    return;
  }

  async login(user: ILocalStrategyUser) {
    const payload = { email: user.email, sub: user.id };
    return { token: this.jwtService.sign(payload) };
  }
}
