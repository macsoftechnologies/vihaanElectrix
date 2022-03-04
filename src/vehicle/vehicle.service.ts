import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { vehicleDto } from './dto/vehicle.dto';
import { vehicle } from './schema/vehicle.schema';

@Injectable()
export class VehicleService {
    constructor(@InjectModel(vehicle.name) private vehicleModel: Model<vehicle>) { }
    async Create(req: vehicleDto, image) {
       try {
             console.log(req, "documents...", image)
            if (image) {
               const reqDoc = image.map((doc, index) => {
                   let IsPrimary = false
                   if (index == 0) {
                       IsPrimary = true
                   }
                   const randomNumber = Math.floor((Math.random() * 1000000) + 1);
                   return doc.filename
                  })

               req.vehicleImage = reqDoc.toString()
           }
              console.log(req);
           // return false;
          const createVehicleResp = await this.vehicleModel.create(req)
          
            if (createVehicleResp) {
               return {
                   statusCode: HttpStatus.OK,
                //    message: "Registered SuccessFully",
                //    data: {
                       UserRegistration: {
                           createVehicleRes: createVehicleResp
                       }
            //        }
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

   async findVehicle(vehicleName: string){
       try{
          const vehicleResponse = await this.vehicleModel.findOne({vehicleName: vehicleName})
           if(vehicleResponse){
               return{
                   StatusCode: HttpStatus.OK,
                //    Message: "Vehicle Details",
                //    Data: {
                       vehicleDetails: vehicleResponse
                  // }
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

   
   async vehiclesList() {
    try {

        const userResponse = await this.vehicleModel.find()
        console.log(userResponse)
        if (userResponse) {
            return {
                StatusCode: HttpStatus.OK,
                Message: 'List of Vehicles',
                Data: {
                    UserDetails: userResponse
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
