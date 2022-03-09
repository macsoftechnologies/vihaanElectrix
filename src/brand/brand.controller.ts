import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { BrandService } from './brand.service';
import { brandDto } from './dto/brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('/register')
  async create(@Body() req: brandDto) {
      try {
          const result = await this.brandService.Create(req)
          console.log("result", result);
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message
          };
      }
}
@Get('/brandList')
async list() {
    try {
        const result = await this.brandService.brandList()
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
         const response = await this.brandService.findPeriod(brandId)
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
