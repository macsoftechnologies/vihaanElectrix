import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { admin, adminSchema } from './schema/admin.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { vehicle, vehicleSchema } from 'src/vehicle/schema/vehicle.schema';

@Module({
  imports:[MongooseModule.forFeature([{name :admin.name , schema : adminSchema}]),
  MongooseModule.forFeature([{name :vehicle.name , schema : vehicleSchema}]),
  ], 
  controllers: [AdminController],
  providers: [AdminService, VehicleService]
})
export class AdminModule {}
