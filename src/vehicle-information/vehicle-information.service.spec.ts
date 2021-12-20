import { Test, TestingModule } from '@nestjs/testing';
import { VehicleInformationService } from './vehicle-information.service';

describe('VehicleInformationService', () => {
  let service: VehicleInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleInformationService],
    }).compile();

    service = module.get<VehicleInformationService>(VehicleInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
