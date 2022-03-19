import { Module } from '@nestjs/common';
import { VEnergyService } from './v-energy.service';
import { VEnergyController } from './v-energy.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { vEnergy, vEnergySchema } from './schema/vEnergy.schema';
import { vEnergySpecs, vEnergySpecsSchema } from './schema/vEnergySpecs.schema';

@Module({
  imports: [MongooseModule.forFeature([{name :vEnergy.name , schema : vEnergySchema}]), 
            MongooseModule.forFeature([{name: vEnergySpecs.name, schema: vEnergySpecsSchema}])],

  controllers: [VEnergyController],
  providers: [VEnergyService]
})
export class VEnergyModule {}
