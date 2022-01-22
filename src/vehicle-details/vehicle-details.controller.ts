import { Controller } from '@nestjs/common';
import { VehicleDetailsService } from './vehicle-details.service';

@Controller('vehicle-details')
export class VehicleDetailsController {
  constructor(private readonly vehicleDetailsService: VehicleDetailsService) {}
}
