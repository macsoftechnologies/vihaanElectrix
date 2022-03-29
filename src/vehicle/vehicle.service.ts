import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { vehicleDto } from './dto/vehicle.dto';
import { vehicle } from './schema/vehicle.schema';
import { SharedService } from 'src/shared/shared.service';
import { color } from './schema/color.schema';
import { colorDto, DeleteVehicleDto, updateColorDto } from './dto/color.dto';
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
  
    // async editVehicle(body: colorDto) {
        
    //          console.log(body, "..................................")
    //         const updateRes = await this.colorModel.updateOne({ colorId: body.colorId},{$set:{vehicleName: body.vehicleName, vehicleImage: body.vehicleImage, 
    //             colorImage : body.colorImage, model: body.model, tyre:body.tyre, motor: body.motor, controller: body.controller,  
    //             battery: body.battery, batteryCasing: body.batteryCasing, cells: body.cells, bms: body.bms, 
    //             chargerOutput: body.chargerOutput, externalChargingPort: body.externalChargingPort, brake: body.brake,
    //              regenerativeBraking:body.regenerativeBraking, display: body.display, headLamp: body.headLamp, 
    //              reflector: body.reflector, blinkers: body.blinkers, brakeLights: body.brakeLights, mudGuards: body.mudGuards,
    //               seat: body.seat, throttle: body.throttle, gradeability: body.gradeablity, storage: body.storage, 
    //               security: body.security, ladiesFootrest: body.ladiesFootrest}})          
        
    //         console.log(updateRes, "update,,res")
    //         if (updateRes) {
    //             return {
    //                 StatusCode: HttpStatus.OK,
    //                 Message: "User updated SuccessFully",
    //                 userUpdate: updateRes
    //             }
    //         }
           
    //     } catch (error) {
    //         return {
    //             StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    //             Message: error.message
    //         }
    //     }
    //   }

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
        const deleteRes = await this.colorModel.deleteOne({colorId:body.colorId});
    console.log(deleteRes, "deleteRes...")

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

}
