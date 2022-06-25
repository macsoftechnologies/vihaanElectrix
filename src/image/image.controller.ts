import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { imageDto } from './dto/image.dto';
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('/addImage')
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
  async bookRide(@Body() req: imageDto, @UploadedFiles() image) {
      try {
          const result = await this.imageService.addImage(req, image)
          console.log("result", result);

          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }
  }

  @Get('/getImageList') 
      async listOfImages() {
          console.log()
          try {
              const response = await this.imageService.imageList()
              return response
          } catch (error) {
              return {
                  StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                  Message : error
              }
          }
      }
      @Post('/removeImage')
      async deleteStore(@Body() req: imageDto){
          try{
              let response = await this.imageService.delete(req);
              return response
          }
          catch(error){
              return{
                  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                  message:error.message
              }
          }
          }
          @Post('/getImage')
          async find(@Body()  req:imageDto){
          //console.log('storeName')
          try{
           const response = await this.imageService.findImage(req)
           return response
           }
           catch(error){
           return{
               StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
               Message: error
           }
       }
    }  
}
