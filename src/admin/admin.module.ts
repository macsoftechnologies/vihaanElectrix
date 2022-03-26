import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { admin, adminSchema } from './schema/admin.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { vehicle, vehicleSchema } from 'src/vehicle/schema/vehicle.schema';
import { users, usersSchema } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';
import { SharedService } from 'src/shared/shared.service';
import { color, colorSchema } from 'src/vehicle/schema/color.schema';

@Module({
  imports:[MongooseModule.forFeature([{name :admin.name , schema : adminSchema}]),
  MongooseModule.forFeature([{name :vehicle.name , schema : vehicleSchema}]),
  MongooseModule.forFeature([{name: users.name, schema: usersSchema }]),
  MongooseModule.forFeature([{name: color.name, schema: colorSchema}])
  ], 
  controllers: [AdminController],
  providers: [AdminService, VehicleService, UserService, SharedService]
})
export class AdminModule {}
