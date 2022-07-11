import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { extname } from 'path';
import { ColorMappingService } from './color-mapping.service';
import { colorMappingDto } from './dto/colorMapping.dto';
import { colorMappingSpecsDto } from './dto/colorMappingSpecsDto';
import { colorMappingSpecs } from './schema/colorMappingSpecs.schema';
import { diskStorage } from 'multer';
import { ApiBody } from '@nestjs/swagger';
@Controller('color-mapping')
export class ColorMappingController {
  constructor(private readonly colorMappingService: ColorMappingService) {}

  @Post('/addImageColor')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'vehicleImage' }, { name: 'colorImage' }]),
  )
  async create(@Body() req: colorMappingDto, @UploadedFiles() image) {
    try {
      const result = await this.colorMappingService.Create(req, image);
      console.log('result', result);
      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Post('/addVehicleSpecs')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'vehicleImage' }, { name: 'specsImage' }]),
  )
  async addSpecs(@Body() req: colorMappingSpecsDto, @UploadedFiles() image) {
    try {
      const result = await this.colorMappingService.addVehSpecs(req, image);
      console.log('result', result);
      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Get('/mappingList')
  async colorMappingList() {
    console.log();
    try {
      const response = await this.colorMappingService.mappingList();
      return response;
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }
  @Post('/colorMappingSpecs')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async add(@Body() req: colorMappingSpecsDto, @UploadedFiles() image) {
    try {
      const result = await this.colorMappingService.addSpecs(req, image);
      console.log('result', result);
      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Get('/specsList')
  async listBooking() {
    console.log();
    try {
      const response = await this.colorMappingService.bookingList();
      return response;
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }

  @Post('/getSpec')
  async find(@Body() req: colorMappingSpecsDto) {
    //console.log('vehicleName')
    try {
      const response = await this.colorMappingService.findRide(req);
      return response;
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }

  @Post('/getVehicleColor')
  async findColors(@Body() req: colorMappingSpecsDto) {
    //console.log('vehicleName')
    try {
      const response = await this.colorMappingService.vehicleColor(req);
      return response;
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }
  @Post('/getBrandVehicles')
  async findBrand(@Body() req: colorMappingSpecsDto) {
    try {
      const response = await this.colorMappingService.getBrand(req);
      return response;
    } catch (error) {
      return {
        StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }

  @Post('/UpdateVehicle')
  @ApiBody({
    type: colorMappingDto,
  })
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'vehicleImage' }, { name: 'colorImage' }]),
  )
  async updateProduct(@Body() req: colorMappingDto, @UploadedFiles() image) {
    try {
      const result = await this.colorMappingService.vehicleUpdate(req, image);
      console.log('result', result);
      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Post('/updateVehicleSpecs')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async updateVehicleSpec(
    @Body() req: colorMappingSpecsDto,
    @UploadedFiles() image,
  ) {
    try {
      const result = await this.colorMappingService.updateVehicle(req, image);
      console.log('result', result);
      return {
        statusCode: HttpStatus.OK,
        updateRes: result,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Post('/deleteSpecs')
  async deleteUser(@Body() req: colorMappingSpecsDto) {
    try {
      let response = await this.colorMappingService.delete(req);

      return response;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Post('/deleteImages')
  async deleteImage(@Body() req: colorMappingDto) {
    try {
      let response = await this.colorMappingService.deleteImage(req);
      return response;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Get('/count')
  async countDocs() {
    try {
      let response = await this.colorMappingService.docs();

      return response;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }
}
