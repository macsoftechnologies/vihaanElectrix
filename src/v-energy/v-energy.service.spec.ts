import { Test, TestingModule } from '@nestjs/testing';
import { VEnergyService } from './v-energy.service';

describe('VEnergyService', () => {
  let service: VEnergyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VEnergyService],
    }).compile();

    service = module.get<VEnergyService>(VEnergyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
