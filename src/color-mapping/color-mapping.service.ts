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
    
    private sharedService: SharedService,) { }
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
async addSpecs(req: colorMappingSpecsDto) {
    try {
           const bookRideRes = await this.colorMappingSpecsModel.create(req)
           if (bookRideRes) {
             return {
                 statusCode: HttpStatus.OK,
                 message: "Specs added SuccessFully",
                 data: {
                    specsRes: bookRideRes
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

 async findRide(vehicleId: string){
     try{
        const vehicleResponse = await this.colorMappingSpecsModel.findOne({vehicleId: vehicleId})
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

 async vehicleColor(vehicleId: string){
    try{
       const vehicleResponse = await this.colorMappingModel.findOne({vehicleId: vehicleId})
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

}

