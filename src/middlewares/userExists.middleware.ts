import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../users/users.service';

@Injectable()
export class userExists implements NestMiddleware {
  constructor(private usersService: UsersService) {}

  async use(req: Request, _res: Response, next: NextFunction) {
    const {
      params: { id },
    } = req;
    const user = await this.usersService.getById(id);
    if (!user) {
      throw new NotFoundException({
        status: 404,
        error: 'Dont exists a user with the specified id',
      });
    }
    next();
  }
}
