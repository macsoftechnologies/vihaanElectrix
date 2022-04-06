import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { bookRideDto } from './dto/bookRide.dto';
import { bookRide } from './schema/bookRide.schema';

@Injectable()
export class BookRideService {
    constructor(@InjectModel(bookRide.name) private bookRideModel: Model<bookRide>) { }
    async Create(req: bookRideDto) {
       try {
              const bookRideRes = await this.bookRideModel.create(req)
              if (bookRideRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Registered Ride SuccessFully",
                    data: {
                       bookingRes: bookRideRes
                    }
                }
              
            }
             return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Invalid Request"
            }

        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }
  
    async findRide(rideId: string){
        try{
           const vehicleResponse = await this.bookRideModel.findOne({rideId: rideId})
            if(vehicleResponse){
                return{
                    StatusCode: HttpStatus.OK,
                   EnergyStationsResponse: vehicleResponse
                   }
            }
            return{
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "InValid Request"
            }
        } catch(error){
            return{
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error
            }
        }
    }
    async bookingList() {
        try {
    
            const brands = await this.bookRideModel.find()
            console.log(brands)
            if (brands) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'List of Brands',
                    Data: {
                        brandsList: brands 
                    }
    

                    
                }
            }
            return {
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "InValid Request"
            }
    
        } catch (error) {
            return {
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error
    
            }
        }
    }
 
}
