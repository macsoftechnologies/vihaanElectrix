import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { image, imageSchema } from './schema/image.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:image.name, schema: imageSchema}])],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}
