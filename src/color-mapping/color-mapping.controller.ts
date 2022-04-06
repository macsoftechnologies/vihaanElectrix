import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ColorMappingService } from './color-mapping.service';
import { colorMappingDto } from './dto/colorMapping.dto';
import { colorMappingSpecsDto } from './dto/colorMappingSpecsDto';
import { colorMappingSpecs } from './schema/colorMappingSpecs.schema';

@Controller('color-mapping')
export class ColorMappingController {
  constructor(private readonly colorMappingService: ColorMappingService) {}

  @Post('/addImageColor')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'vehicleImage' },
      { name: 'colorImage' },
         ]),
  )
    async create(@Body() req: colorMappingDto, @UploadedFiles() image) {
        try {
             
            const result = await this.colorMappingService.Create(req, image)
            console.log("result", result);
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
     }
     @Post('/colorMappingSpecs')
     async add(@Body() req:colorMappingSpecsDto){
       try {
         const result = await this.colorMappingService.addSpecs(req)
         console.log("result", result);
         return result
     } catch (error) {
         return {
             statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
             message: error.message
         };
     }
     }

     @Get('/specsList') 
     async listBooking() {
         console.log()
         try {
             const response = await this.colorMappingService.bookingList()
             return response
         } catch (error) {
             return {
                 StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                 Message : error
             }
         }
     }
 

     
@Get('/getSpec')
async find(@Query('vehicleId') vehicleId: string){
     //console.log('vehicleName')
     try{
         const response = await this.colorMappingService.findRide(vehicleId)
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
 


