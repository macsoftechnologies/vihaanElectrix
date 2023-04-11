import { Test, TestingModule } from '@nestjs/testing';
import { RoadsideAssistanceController } from './roadside-assistance.controller';
import { RoadsideAssistanceService } from './roadside-assistance.service';

describe('RoadsideAssistanceController', () => {
  let controller: RoadsideAssistanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadsideAssistanceController],
      providers: [RoadsideAssistanceService],
    }).compile();

    controller = module.get<RoadsideAssistanceController>(RoadsideAssistanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
