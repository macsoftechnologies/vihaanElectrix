import { Module } from '@nestjs/common';
import { LoanDetailsService } from './loan-details.service';
import { LoanDetailsController } from './loan-details.controller';
import { loanDetails, loanDetailsSchema } from './schema/loanDetails.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

 imports:[MongooseModule.forFeature([{name :loanDetails.name , schema : loanDetailsSchema}])],
  controllers: [LoanDetailsController],
  providers: [LoanDetailsService]
})
export class LoanDetailsModule {}
