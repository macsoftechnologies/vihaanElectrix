import { Test, TestingModule } from '@nestjs/testing';
import { LoanPeriodController } from './loan-period.controller';
import { LoanPeriodService } from './loan-period.service';

describe('LoanPeriodController', () => {
  let controller: LoanPeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanPeriodController],
      providers: [LoanPeriodService],
    }).compile();

    controller = module.get<LoanPeriodController>(LoanPeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
