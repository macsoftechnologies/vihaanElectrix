import { Controller } from '@nestjs/common';
import { TechnicianService } from './technician.service';

@Controller('technician')
export class TechnicianController {
  constructor(private readonly technicianService: TechnicianService) {}
}
