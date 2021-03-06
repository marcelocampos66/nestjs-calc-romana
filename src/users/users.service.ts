import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async register(user: User) {
    const { password, ...others } = user;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const userToBeRegistered = {
      ...others,
      password: hashedPassword,
    };
    const newUser = new this.userModel(userToBeRegistered);
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

  async getByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async updateUser(id: string, user: User) {
    await this.userModel.updateOne({ _id: id }, user).exec();
    return this.getById(id);
  }

  async deleteUser(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
