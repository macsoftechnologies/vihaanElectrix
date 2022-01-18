import { Body, Controller, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { UploadTypeService } from './upload-type.service';
import { diskStorage } from 'multer'
import { uploadTypeDto } from './dto/uploadtype.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('uploadType')
@Controller('upload-type')
export class UploadTypeController {
  constructor(private readonly uploadTypeService: UploadTypeService) {}
  @Post('/documentsUpload')
  
  @ApiCreatedResponse({ description: 'uploadType details has been added successfully'})
  @ApiForbiddenResponse({ description: 'forbidden.' }) 
  @UseInterceptors(
      AnyFilesInterceptor({
          storage: diskStorage({
              destination: './files',
              filename: (req, file, cb) => {
                  const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                  cb(null, `${randomName}${extname(file.originalname)}`)
              }
          }),
      }),
  )
  async create(@Body() req: uploadTypeDto, @UploadedFiles() image) {
      try {
          const result = await this.uploadTypeService.Create(req, image)
          console.log("result", result);
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }
   }

}
