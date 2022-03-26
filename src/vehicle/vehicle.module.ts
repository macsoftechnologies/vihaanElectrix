import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { vehicle, vehicleSchema } from './schema/vehicle.schema';
import { SharedService } from 'src/shared/shared.service';
import { color, colorSchema } from './schema/color.schema';

@Module({
  imports:[MongooseModule.forFeature([{name :vehicle.name , schema : vehicleSchema}]),
           MongooseModule.forFeature([{name: color.name, schema: colorSchema}])
  ],
  controllers: [VehicleController],
  providers: [VehicleService, SharedService]
})
export class VehicleModule {}
