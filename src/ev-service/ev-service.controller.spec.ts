import { Test, TestingModule } from '@nestjs/testing';
import { EvServiceController } from './ev-service.controller';
import { EvServiceService } from './ev-service.service';

describe('EvServiceController', () => {
  let controller: EvServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvServiceController],
      providers: [EvServiceService],
    }).compile();

    controller = module.get<EvServiceController>(EvServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
