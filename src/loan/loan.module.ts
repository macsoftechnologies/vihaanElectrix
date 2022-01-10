import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { loan, loanSchema } from './schema/loan.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
 
  imports:[MongooseModule.forFeature([{name :loan.name , schema : loanSchema}])],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}
