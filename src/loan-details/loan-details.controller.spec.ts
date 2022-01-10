import { Test, TestingModule } from '@nestjs/testing';
import { LoanDetailsController } from './loan-details.controller';
import { LoanDetailsService } from './loan-details.service';

describe('LoanDetailsController', () => {
  let controller: LoanDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanDetailsController],
      providers: [LoanDetailsService],
    }).compile();

    controller = module.get<LoanDetailsController>(LoanDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
