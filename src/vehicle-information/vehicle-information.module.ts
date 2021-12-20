import { Module } from '@nestjs/common';
import { VehicleInformationService } from './vehicle-information.service';
import { VehicleInformationController } from './vehicle-information.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { vehicleInfo, vehicleInfoSchema } from './schema/vehicleInformation.schema';

@Module({
  imports:[MongooseModule.forFeature([{name :vehicleInfo.name , schema : vehicleInfoSchema}]),
 ],
  controllers: [VehicleInformationController],
  providers: [VehicleInformationService]
})
export class VehicleInformationModule {}
