import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SharedService } from 'src/shared/shared.service';
import { colorMappingDto } from './dto/colorMapping.dto';
import { colorMapping } from './schema/colorMapping.schema';
import { Model } from 'mongoose';
import { colorMappingSpecs } from './schema/colorMappingSpecs.schema';
import { colorMappingSpecsDto } from './dto/colorMappingSpecsDto';
@Injectable()
export class ColorMappingService {
    constructor(@InjectModel(colorMapping.name) private colorMappingModel: Model<colorMapping>,
    @InjectModel(colorMappingSpecs.name) private colorMappingSpecsModel: Model<colorMappingSpecs>,
    private sharedService: SharedService) { }
async Create(req: colorMappingDto, image) {
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

const createVehicleResp = await this.colorMappingModel.create(req)
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

async addSpecs(req: colorMappingSpecsDto, image) {
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
        const createVehicleResp = await this.colorMappingSpecsModel.create(req)

        if (createVehicleResp) {
            return {
                statusCode: HttpStatus.OK,
                message: "Vehicle added SuccessFully",
                addingVehicle: createVehicleResp
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

 async findRide(req){
     try{
          const vehicleResponse = await this.colorMappingSpecsModel.find({vehicleId: req.vehicleId})
          if(vehicleResponse){
             return{
                 StatusCode: HttpStatus.OK,
                 colorMappingResponse: vehicleResponse
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

 async vehicleColor(req){
    try{
       const vehicleResponse = await this.colorMappingModel.find({vehicleId: req.vehicleId})
        if(vehicleResponse){
            return{
                StatusCode: HttpStatus.OK,
                colorMappingResponse: vehicleResponse
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
async getBrand(req){
    try{
        const brandRes = await this.colorMappingSpecsModel.find({brandName: req.brandName})
        if(brandRes){
            return{
                StatusCode: HttpStatus.OK,
                brandResponse: brandRes
            }
        }
      }
        catch(error){
            return{
                StatusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error
            }

        }
    
}
async delete(body: colorMappingSpecsDto) {
    try {

          console.log(body)
          const deleteRes = await this.colorMappingSpecsModel.deleteOne({vehicleId:body.vehicleId});
          console.log(deleteRes, "deleteRes...")

          return {
                statusCode: HttpStatus.OK,
                message: 'Vehicle removed successfully',
         };
        } catch (error) {
        let error_response = {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            data: null,
            message: error,
        };
        return error_response;
    }

}

 async deleteImage(body: colorMappingDto){
     try{
         const deleteRes = await this.colorMappingModel.deleteMany({vehicleId: body.vehicleId});
         console.log(deleteRes, "resp")
         return{
             statusCode: HttpStatus.OK,
             message: 'Image removed successfully'
         }
     }catch(error){
         let error_response= {
             statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
             data: null,
             message: error
         }
         return error_response
     }
 }

 async bookingList() {
     try {
         const brands = await this.colorMappingModel.find()
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
 async mappingList() {
    try {
     const brands = await this.colorMappingSpecsModel.find()
        console.log(brands)
        if (brands) {
            return {
                StatusCode: HttpStatus.OK,
                Message: 'List of Brands',
                Data: {
                    mappingSpecsList: brands 
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

 async vehicleUpdate(req: colorMappingDto, image) {
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
        
          const createVehicleResp = await this.colorMappingModel.updateOne({ vehicleId: req.vehicleId},{$set:{vehicleImage: req.vehicleImage, colorImage: req.colorImage}})          
                
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

//  async specsUpdate(req: colorMappingSpecsDto, image) {
//     try {
//           const createVehicleResp = await this.colorMappingModel.updateOne({ vehicleId: req.vehicleId},{$set:{vehicleImage: req.vehicleImage, colorImage: req.colorImage}})          
                
//           if (createVehicleResp) {
//              return {
//                  statusCode: HttpStatus.OK,
//                  addVehicleRes: createVehicleResp
//               }
//          }
//           return {
//              statusCode: HttpStatus.BAD_REQUEST,
//              message: "Invalid Request"
//          }
//      } catch (error) {
//          return {
//              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
//              message: error.message,
//          };
//       }

async updateVehicle(req: colorMappingSpecsDto, image) {
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
        const createVehicleResp = await this.colorMappingSpecsModel.updateOne({ vehicleId: req.vehicleId},{$set:{vehicleName: req.vehicleName, vehicleImage: req.vehicleImage, 
             model: req.model, tyre:req.tyre, motor: req.motor, controller: req.controller,rim: req.rim,  
            battery: req.battery, batteryCasing: req.batteryCasing, cells: req.cells, bms: req.bms, 
            chargerOutput: req.chargerOutput, externalChargingPort: req.externalChargingPort, brake: req.brake,
             regenerativeBraking:req.regenerativeBraking, display: req.display, headLamp: req.headLamp, 
             reflector: req.reflector, blinkers: req.blinkers, brakeLights: req.brakeLights, mudGuards: req.mudGuards,
              seat: req.seat, throttle: req.throttle, gradeability: req.gradeablity, storage: req.storage, 
              security: req.security, ladiesFootrest: req.ladiesFootrest}})

        if (createVehicleResp) {
            return {
                statusCode: HttpStatus.OK,
                updateVehicleRes: createVehicleResp
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


 }



