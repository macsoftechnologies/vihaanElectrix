import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { vehicleDto } from './dto/vehicle.dto';
import { vehicle } from './schema/vehicle.schema';
import { SharedService } from 'src/shared/shared.service';
import { color } from './schema/color.schema';
import { colorDto } from './dto/color.dto';
@Injectable()
export class VehicleService {
    constructor(@InjectModel(vehicle.name) private vehicleModel: Model<vehicle>,
                @InjectModel(color.name) private colorModel: Model<color>,
                 private sharedService: SharedService,) { }
    async Create(req: colorDto, image) {
       try {
             console.log(req, "req...", image)
             if (image) {
                if (image.vehicleImage && image.vehicleImage[0]) {
                  const attachmentFile = await this.sharedService.saveFile(
                    image.vehicleImage[0],
                  );
        
                  req.vehicleImage = attachmentFile;
                }
                if (image.colorImage && image.colorImage[0]) {
                  const attachmentFile = await this.sharedService.saveFile(
                    image.colorImage[0],
                  );
        
                  req.colorImage = attachmentFile;
                }
              }
        
          const createVehicleResp = await this.colorModel.create(req)
          
            if (createVehicleResp) {
               return {
                   statusCode: HttpStatus.OK,
                   addVehicleRes: createVehicleResp
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

   async addVehicle(req: vehicleDto) {
    try {
           const vehicleRes = await this.vehicleModel.create(req)
           if (vehicleRes) {
             return {
                 statusCode: HttpStatus.OK,
                 message: "Added Vehicle SuccessFully",
                 data: {
                    VehicleSpecsResponse: vehicleRes
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

   async findVehicle(req){
       try{
          const vehicleImgRes = await this.vehicleModel.findOne({vehicleId: req.vehicleId})
           if(vehicleImgRes){
               return{
                   StatusCode: HttpStatus.OK,
                   vehicleImageRes: vehicleImgRes
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

   async findVehicleImg(req){
    try{
       const vehicleImgRes = await this.colorModel.find({colorId: req.colorId})
        if(vehicleImgRes){
            return{
                StatusCode: HttpStatus.OK,
             //    Message: "Vehicle Details",
             //    Data: {
                    vehicleDetails: vehicleImgRes
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
