import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { vehicle, vehicleSchema } from './schema/vehicle.schema';

@Module({
  imports:[MongooseModule.forFeature([{name :vehicle.name , schema : vehicleSchema}]),
  ],
  controllers: [VehicleController],
  providers: [VehicleService]
})
export class VehicleModule {}
