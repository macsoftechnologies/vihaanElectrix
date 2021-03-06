import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { vehicleDto } from './dto/vehicle.dto';
import { vehicle } from './schema/vehicle.schema';
import { SharedService } from 'src/shared/shared.service';
import { color, colorSchema } from './schema/color.schema';
import { colorDto, DeleteVehicleDto, updateColorDto } from './dto/color.dto';
import { count } from 'console';
@Injectable()
export class VehicleService {
    constructor(@InjectModel(vehicle.name) private vehicleModel: Model<vehicle>,
                @InjectModel(color.name) private colorModel: Model<color>,
                 private sharedService: SharedService,) { }
    async Create(req: colorDto, image) {
       try {
            // console.log(req, "req...", image)
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
        //   const n = this.colorModel.aggregate([{$count:"total"}])
        // //             console.log(n, ".......................................")
        //  const n = this.colorModel.find().count()
        //  console.log(".................................................",n, ".................................")
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
    async vehicleUpdate(req: colorDto, image) {
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
            
              const createVehicleResp = await this.colorModel.updateOne({ colorId: req.colorId},{$set:{vehicleName: req.vehicleName, vehicleImage: req.vehicleImage, 
                            colorImage : req.colorImage, model: req.model, tyre:req.tyre, motor: req.motor, controller: req.controller,  
                            battery: req.battery, batteryCasing: req.batteryCasing, cells: req.cells, bms: req.bms, 
                            chargerOutput: req.chargerOutput, externalChargingPort: req.externalChargingPort, brake: req.brake,
                             regenerativeBraking:req.regenerativeBraking, display: req.display, headLamp: req.headLamp, 
                             reflector: req.reflector, blinkers: req.blinkers, brakeLights: req.brakeLights, mudGuards: req.mudGuards,
                              seat: req.seat, throttle: req.throttle, gradeability: req.gradeablity, storage: req.storage, 
                              security: req.security, ladiesFootrest: req.ladiesFootrest}})          
                    
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

async findBrandVehicle(req){
    try{
       const vehicleImgRes = await this.colorModel.find({brandName: req.brandName})
       
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

        const userResponse = await this.colorModel.find()
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

async delete(body: DeleteVehicleDto) {
    try {

          console.log(body)
        const vehicleResp = await this.colorModel.deleteOne({colorId:body.colorId});
    console.log(vehicleResp, "vehicleResp...")

        return {
                statusCode: HttpStatus.OK,
                message: 'Vehicle removed successfully',
         };
        
        // return {
        //     StatusCode: HttpStatus.BAD_REQUEST,
        //     Message: "Company deletion Failed"
        // }
        
    } catch (error) {
        let error_response = {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            data: null,
            message: error,
        };
        return error_response;
    }

}


async docs(req: colorDto) {
    try {

          console.log(req)
        const vehicleResp = await this.colorModel.find().count();
        console.log(vehicleResp, "vehicleResp...")

        return {
                statusCode: HttpStatus.OK,
                message: 'Total number of vehicles',
                resp: vehicleResp
         };
        
        // return {
        //     StatusCode: HttpStatus.BAD_REQUEST,
        //     Message: "Company deletion Failed"
        // }
        
    } catch (error) {
        let error_response = {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            data: null,
            message: error,
        };
        return error_response;
    }

}

async vehicles(req: colorDto) {
    try {

          console.log(req)
        const vehicleResp = await this.colorModel.find({brandName: req.brandName}).count();
        console.log(vehicleResp, "vehicleResp...")

        return {
                statusCode: HttpStatus.OK,
                message: 'Total number of vehicles',
                countResponse: vehicleResp
         };
        
        // return {
        //     StatusCode: HttpStatus.BAD_REQUEST,
        //     Message: "Company deletion Failed"
        // }
        
    } catch (error) {
        let error_response = {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            data: null,
            message: error,
        };
        return error_response;
    }

}

}
