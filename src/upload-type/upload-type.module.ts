import { Module } from '@nestjs/common';
import { UploadTypeService } from './upload-type.service';
import { UploadTypeController } from './upload-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { uploadType, uploadTypeSchema } from './schema/uploadtype.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:uploadType.name, schema: uploadTypeSchema}])],
  controllers: [UploadTypeController],
  providers: [UploadTypeService]
})
export class UploadTypeModule {}
