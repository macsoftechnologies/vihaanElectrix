import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { vehicleDto } from './dto/vehicle.dto';
import { VehicleService } from './vehicle.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('vehicle')
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post('/productsUpload')
  @ApiCreatedResponse({ description: 'vehicle details has been added successfully'})
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
    async create(@Body() req: vehicleDto, @UploadedFiles() image) {
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

    @Get('/getProduct')
    
    async find(@Query('vehicleId') vehicleId: string){
        //console.log('vehicleName')
        try{
            const response = await this.vehicleService.findVehicle(vehicleId)
            return response
        }
        catch(error){
            return{
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error
            }
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
    }
  
