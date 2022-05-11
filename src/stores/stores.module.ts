import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { store, storeSchema } from './schema/store.schema';
import { SharedService } from 'src/shared/shared.service';

@Module({
  imports: [MongooseModule.forFeature([{name: store.name, schema: storeSchema}])],
  controllers: [StoresController],
  providers: [StoresService, SharedService]
})
export class StoresModule {}
