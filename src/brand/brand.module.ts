import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { brand, brandSchema } from './schema/brand.schema';
import { SharedService } from 'src/shared/shared.service';

@Module({
  imports:[MongooseModule.forFeature([{name: brand.name, schema:brandSchema}])],
  controllers: [BrandController],
  providers: [BrandService, SharedService]
})
export class BrandModule {}
