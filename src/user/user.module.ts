import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { users, usersSchema } from './schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name :users.name , schema : usersSchema}]),
],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
