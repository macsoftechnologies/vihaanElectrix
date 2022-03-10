import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { BrandService } from './brand.service';
import { brandDto } from './dto/brand.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('/productsUpload')
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
  async create(@Body() req: brandDto, @UploadedFiles() image) {
      try {
          const result = await this.brandService.Create(req, image)
          console.log("result", result);
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message
          };
      }
}

@Get('/getBrand')
async find(@Query('brandId') brandId: string){
     //console.log('vehicleName')
     try{
         const response = await this.brandService.getBrand(brandId)
         return response
     }
     catch(error){
         return{
             StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
             Message: error
         }
     }
    }

    
   @Get('/brandList') 
       async listBrands() {
           console.log()
           try {
               const response = await this.brandService.brandList()
               return response
           } catch (error) {
               return {
                   StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                   Message : error
               }
           }
       }
}
