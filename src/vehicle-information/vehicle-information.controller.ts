import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { VehicleInformationService } from './vehicle-information.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { vehicleInfoDto } from './dto/vehicalInformation.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller('vehicle-information')
export class VehicleInformationController {
  constructor(private readonly vehicleInformationService: VehicleInformationService) {}
  @ApiTags('uploadType')
    
  @Post('/vehicleInfo')
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
    async create(@Body() req: vehicleInfoDto, @UploadedFiles() image) {
        try {
            const result = await this.vehicleInformationService.Create(req, image)
            console.log("result", result);
            
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }

    }

    @Get('/getVehicle')
    async find(@Query('vehicleName') vehicleName: string){
        try{
            const response = await this.vehicleInformationService.findVehicle(vehicleName)
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
 


