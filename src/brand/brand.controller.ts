import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
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
}
