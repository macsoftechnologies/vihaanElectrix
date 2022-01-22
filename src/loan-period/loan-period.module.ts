import { Module } from '@nestjs/common';
import { LoanPeriodService } from './loan-period.service';
import { LoanPeriodController } from './loan-period.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { loanPeriod, loanPeriodSchema } from './schema/loanPeriod.schema';

@Module({
  
  imports: [MongooseModule.forFeature([{name:loanPeriod.name, schema:loanPeriodSchema}])],
  controllers: [LoanPeriodController],
  providers: [LoanPeriodService]
})
export class LoanPeriodModule {}
