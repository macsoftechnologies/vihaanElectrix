import { Module } from '@nestjs/common';
import { RoadsideAssistanceService } from './roadside-assistance.service';
import { RoadsideAssistanceController } from './roadside-assistance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { roadsideAssistance, roadsideAssistanceSchema } from './schema/roadside-assistance.dto';
import { technicianDto } from 'src/technician/dto/technician.dto';
import { technician, technicianSchema } from 'src/technician/schema/technician.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:roadsideAssistance.name,schema:roadsideAssistanceSchema,},{name:technician.name,schema:technicianSchema}])],
  controllers: [RoadsideAssistanceController],
  providers: [RoadsideAssistanceService]
})
export class RoadsideAssistanceModule {}
