import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { BookRideService } from './book-ride.service';
import { bookRideDto } from './dto/bookRide.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('book-ride')
export class BookRideController {
  constructor(private readonly bookRideService: BookRideService) {}
  @Post('/bookRide')
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
  async bookRide(@Body() req: bookRideDto, @UploadedFiles() image) {
      try {
          const result = await this.bookRideService.addRide(req, image)
          console.log("result", result);

          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
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

    @Get('/count')
    async countDocs() { 
    try {
    let response = await this.bookRideService.docs();
    
    return response
    } catch (error) {
    return {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: error.message,
    };
    }
   }
}
