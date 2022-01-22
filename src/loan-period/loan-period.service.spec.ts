import { Test, TestingModule } from '@nestjs/testing';
import { LoanPeriodService } from './loan-period.service';

describe('LoanPeriodService', () => {
  let service: LoanPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanPeriodService],
    }).compile();

    service = module.get<LoanPeriodService>(LoanPeriodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
