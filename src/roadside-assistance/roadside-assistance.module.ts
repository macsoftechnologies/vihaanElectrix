import { Module } from '@nestjs/common';
import { RoadsideAssistanceService } from './roadside-assistance.service';
import { RoadsideAssistanceController } from './roadside-assistance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { roadsideAssistance, roadsideAssistanceSchema } from './schema/roadside-assistance.dto';

@Module({
  imports:[MongooseModule.forFeature([{name:roadsideAssistance.name,schema:roadsideAssistanceSchema}])],
  controllers: [RoadsideAssistanceController],
  providers: [RoadsideAssistanceService]
})
export class RoadsideAssistanceModule {}
