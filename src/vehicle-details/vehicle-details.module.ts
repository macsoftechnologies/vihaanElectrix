import { Module } from '@nestjs/common';
import { VehicleDetailsService } from './vehicle-details.service';
import { VehicleDetailsController } from './vehicle-details.controller';

@Module({
  controllers: [VehicleDetailsController],
  providers: [VehicleDetailsService]
})
export class VehicleDetailsModule {}
