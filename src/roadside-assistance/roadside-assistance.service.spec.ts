import { Test, TestingModule } from '@nestjs/testing';
import { RoadsideAssistanceService } from './roadside-assistance.service';

describe('RoadsideAssistanceService', () => {
  let service: RoadsideAssistanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadsideAssistanceService],
    }).compile();

    service = module.get<RoadsideAssistanceService>(RoadsideAssistanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
