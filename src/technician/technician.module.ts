import { Module } from '@nestjs/common';
import { TechnicianService } from './technician.service';
import { TechnicianController } from './technician.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { technician, technicianSchema } from './schema/technician.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:technician.name,schema:technicianSchema}])],
  controllers: [TechnicianController],
  providers: [TechnicianService]
})
export class TechnicianModule {}
