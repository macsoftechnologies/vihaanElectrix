import { Test, TestingModule } from '@nestjs/testing';
import { EvServiceService } from './ev-service.service';

describe('EvServiceService', () => {
  let service: EvServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvServiceService],
    }).compile();

    service = module.get<EvServiceService>(EvServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
