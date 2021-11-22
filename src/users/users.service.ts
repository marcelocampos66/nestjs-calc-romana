import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async register(user: User) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async getAll() {
    return this.userModel.find().exec();
  }

  async getById(id: string) {
    const user: Promise<UserDocument | undefined> = this.userModel
      .findById(id)
      .exec();
    return user;
  }

  async updateUser(id: string, user: User) {
    await this.userModel.updateOne({ _id: id }, user).exec();
    return this.getById(id);
  }

  async deleteUser(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
