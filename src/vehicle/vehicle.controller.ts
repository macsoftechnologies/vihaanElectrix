import { Body, Controller, Get, HttpStatus, Post, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { vehicleDto } from './dto/vehicle.dto';
import { VehicleService } from './vehicle.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { colorDto, DeleteVehicleDto, updateColorDto } from './dto/color.dto';
@ApiTags('vehicle')
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post('/vehicleImageUpload')
  @ApiCreatedResponse({ description: 'vehicle details has been added successfully'})
  @ApiForbiddenResponse({ description: 'forbidden.' })  
  @ApiBody({
    type: colorDto,
  })

  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'vehicleImage' },
      { name: 'colorImage' },
         ]),
  )
    async create(@Body() req: colorDto, @UploadedFiles() image) {
        try {
             
            const result = await this.vehicleService.Create(req, image)
            console.log("result", result);
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
     }

    @Post('/getVehicleSpecs')
    
    async find(@Body() req:vehicleDto){
        //console.log('vehicleName')
        try{
            const response = await this.vehicleService.findVehicle(req)
            return response
        }
        catch(error){
            return{
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error
            }
        }
      }
    
      @Post('/getVehicleImage')
    
      async findVehicleImage(@Body() req:colorDto){
        //console.log('vehicleName')
        try{
            const response = await this.vehicleService.findVehicleImg(req)
            return response
        }
        catch(error){
            return{
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error
            }
        }
      }
      @Post('/addVehicle')
      async add(@Body() req:vehicleDto){
        try {
          const result = await this.vehicleService.addVehicle(req)
          console.log("result", result);
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message
          };
      }
      }
  @Get('/listOfVehicles')
  @ApiCreatedResponse({ description: 'vehicle details has been fetched successfully'})
  @ApiForbiddenResponse({ description: 'forbidden.' }) 
      async listOfVehicles() {
          console.log()
          try {
              const response = await this.vehicleService.vehiclesList()
              return response
          } catch (error) {
              return {
                  StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                  Message : error
              }
          }
      }

      @Post('/UpdateProduct')
      @ApiCreatedResponse({ description: 'vehicle details has been added successfully'})
      @ApiForbiddenResponse({ description: 'forbidden.' })  
      @ApiBody({
        type: colorDto,
      })
    
      @UseInterceptors(
        FileFieldsInterceptor([
          { name: 'vehicleImage' },
          { name: 'colorImage' },
             ]),
      )
        async updateProduct(@Body() req: colorDto, @UploadedFiles() image) {
            try {
                 
                const result = await this.vehicleService.vehicleUpdate(req, image)
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
        async deleteUser(@Body() req: DeleteVehicleDto) { 
        try {
        let response = await this.vehicleService.delete(req);

        return response
        } catch (error) {
        return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
    };
  }
} 


@Post('/count')
async countDocs(@Body() req: colorDto) { 
try {
let response = await this.vehicleService.docs(req);

return response
} catch (error) {
return {
statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
message: error.message,
};
}

}

@Post('/brandCount')
async brandCount(@Body() req: colorDto) { 
try {
let response = await this.vehicleService.vehicles(req);

return response
} catch (error) {
return {
statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
message: error.message,
   };
  }
 }
}
