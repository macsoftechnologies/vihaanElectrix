import { Module } from '@nestjs/common';
import { LoanTypeService } from './loan-type.service';
import { LoanTypeController } from './loan-type.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { type, typeSchema } from './schema/loantype.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:type.name, schema:typeSchema}])],
  controllers: [LoanTypeController],
  providers: [LoanTypeService]
})
export class LoanTypeModule {}
