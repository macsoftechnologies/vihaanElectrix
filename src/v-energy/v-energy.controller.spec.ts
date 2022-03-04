import { Test, TestingModule } from '@nestjs/testing';
import { VEnergyController } from './v-energy.controller';
import { VEnergyService } from './v-energy.service';

describe('VEnergyController', () => {
  let controller: VEnergyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VEnergyController],
      providers: [VEnergyService],
    }).compile();

    controller = module.get<VEnergyController>(VEnergyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
