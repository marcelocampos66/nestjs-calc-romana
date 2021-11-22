import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

const URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/Users';

@Module({
  imports: [MongooseModule.forRoot(URL), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
