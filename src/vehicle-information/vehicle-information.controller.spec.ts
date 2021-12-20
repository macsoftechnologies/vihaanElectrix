import { Test, TestingModule } from '@nestjs/testing';
import { VehicleInformationController } from './vehicle-information.controller';
import { VehicleInformationService } from './vehicle-information.service';

describe('VehicleInformationController', () => {
  let controller: VehicleInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleInformationController],
      providers: [VehicleInformationService],
    }).compile();

    controller = module.get<VehicleInformationController>(VehicleInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
