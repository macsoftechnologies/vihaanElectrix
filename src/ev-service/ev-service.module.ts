import { Module } from '@nestjs/common';
import { EvServiceService } from './ev-service.service';
import { EvServiceController } from './ev-service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { evservice, evserviceSchema } from './schema/evservice.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:evservice.name,schema:evserviceSchema}])],
  controllers: [EvServiceController],
  providers: [EvServiceService]
})
export class EvServiceModule {}
