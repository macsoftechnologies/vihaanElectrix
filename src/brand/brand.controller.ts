import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { BrandService } from './brand.service';
import { brandDto } from './dto/brand.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiBody } from '@nestjs/swagger';
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('/brandUpload')
  @ApiBody({
    type: brandDto,
  })

  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'logo' },
      { name: 'brandImage' },
         ]),
  )
    async create(@Body() req: brandDto, @UploadedFiles() image) {
        try {
              const result = await this.brandService.Create(req, image)
            console.log("result", result);
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
     }

@Post('/getBrand')
async find(@Body() req:brandDto){
     //console.log('vehicleName')
     try{
         const response = await this.brandService.getBrand(req)
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

       @Post('/brandEdit')
       @ApiBody({
         type: brandDto,
       })
     
       @UseInterceptors(
         FileFieldsInterceptor([
           { name: 'logo' },
           { name: 'brandImage' },
              ]),
       )
         async edit(@Body() req: brandDto, @UploadedFiles() image) {
             try {
                   const result = await this.brandService.editBrand(req, image)
                 console.log("result", result);
                 return result
             } catch (error) {
                 return {
                     statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                     message: error.message,
                 };
             }
          }
     
          @Post('/delete')
          async deleteUser(@Body() req: brandDto) { 
          try {
          let response = await this.brandService.delete(req);
  
          return response
          } catch (error) {
          return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
      };
    }
  } 
  
    }
