import { Module } from '@nestjs/common';
import { ColorMappingService } from './color-mapping.service';
import { ColorMappingController } from './color-mapping.controller';
import { MongooseConfigService } from 'src/_common/configs/mongoose.config';
import { MongooseModule } from '@nestjs/mongoose';
import { colorMapping, colorMappingSchema } from './schema/colorMapping.schema';
import { SharedService } from 'src/shared/shared.service';
import { colorMappingSpecs, colorMappingSpecsSchema } from './schema/colorMappingSpecs.schema';

@Module({
  imports: [MongooseModule.forFeature([{name :colorMapping.name , schema : colorMappingSchema}]),
  MongooseModule.forFeature([{name :colorMappingSpecs.name , schema : colorMappingSpecsSchema}])],
  controllers: [ColorMappingController],
  providers: [ColorMappingService, SharedService]
})
export class ColorMappingModule {}
