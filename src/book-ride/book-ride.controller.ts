import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { BookRideService } from './book-ride.service';
import { bookRideDto } from './dto/bookRide.dto';

@Controller('book-ride')
export class BookRideController {
  constructor(private readonly bookRideService: BookRideService) {}
  @Post('/bookRide')
  async add(@Body() req:bookRideDto){
    try {
      const result = await this.bookRideService.Create(req)
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
