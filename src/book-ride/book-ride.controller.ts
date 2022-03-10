import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
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
 
@Get('/getRider')
async find(@Query('rideId') rideId: string){
     //console.log('vehicleName')
     try{
         const response = await this.bookRideService.findRide(rideId)
         return response
     }
     catch(error){
         return{
             StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
             Message: error
         }
     }
    }

    @Get('/bookingsList') 
    async listBooking() {
        console.log()
        try {
            const response = await this.bookRideService.bookingList()
            return response
        } catch (error) {
            return {
                StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                Message : error
            }
        }
    }
}
