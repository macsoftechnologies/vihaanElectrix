import { Body, Controller, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { VehicleInformationService } from './vehicle-information.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { vehicleInfoDto } from './dto/vehicalInformation.dto';
@Controller('vehicle-information')
export class VehicleInformationController {
  constructor(private readonly vehicleInformationService: VehicleInformationService) {}

    
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
  }


