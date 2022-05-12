import { Body, Controller, Get, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { StoresService } from './stores.service';
import { diskStorage } from 'multer';
import { ApiBody } from '@nestjs/swagger';
import { extname } from 'path';
import { storeDto } from './dto/stores.dto';
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}
  @Post('/addStore')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'storeIcon' },
      { name: 'storeImage' },
         ]),
  )
    async create(@Body() req: storeDto, @UploadedFiles() image) {
        try {
             
            const result = await this.storesService.Create(req, image)
            console.log("result", result);
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
     }

     @Get('/storeList') 
     async listStore() {
         console.log()
         try {
             const response = await this.storesService.storeList()
             return response
         } catch (error) {
             return {
                 StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                 Message : error
             }
            }
        }

        @Post('/getStore')
        async find(@Body()  req:storeDto){
        //console.log('storeName')
        try{
         const response = await this.storesService.findStore(req)
         return response
         }
         catch(error){
         return{
             StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
             Message: error
         }
     }
  }
  @Post('/updateStore')
  @ApiBody({
    type: storeDto,
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'storeIcon' },
      { name: 'storeImage' },
         ]),
  )
    async updateProduct(@Body() req: storeDto, @UploadedFiles() image) {
        try {
            const result = await this.storesService.storeUpdate(req, image)
            console.log("result", result);
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
     }  
     @Post('/removeStore')
     async deleteStore(@Body() req: storeDto){
         try{
             let response = await this.storesService.delete(req);
             return response
         }
         catch(error){
             return{
                 statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                 message:error.message
             }
         }
         }
         @Get('/count')
         async countDocs() { 
         try {
         let response = await this.storesService.docs();
         
         return response
         } catch (error) {
         return {
         statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
         message: error.message,
         };
         }
        }
}
