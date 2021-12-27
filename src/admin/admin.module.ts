import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { admin, adminSchema } from './schema/admin.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name :admin.name , schema : adminSchema}]),
],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
