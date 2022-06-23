import { HttpStatus, Injectable } from '@nestjs/common';
import { store } from './schema/store.schema';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { storeDto } from './dto/stores.dto';
import { SharedService } from 'src/shared/shared.service';
@Injectable()
export class StoresService {
    constructor(@InjectModel(store.name) private storeModel: Model<store>, private sharedService: SharedService) { }
async Create(req: storeDto, image) {
try {
// console.log(req, "req...", image)
 if (image) {
    if (image.storeIcon && image.storeIcon[0]) {
      const attachmentFile = await this.sharedService.saveFile(
        image.storeIcon[0],
      );
      req.storeIcon = attachmentFile;
    }
    if (image.storeImage && image.storeImage[0]) {
      const attachmentFile = await this.sharedService.saveFile(
        image.storeImage[0],
      );

      req.storeImage = attachmentFile;
    }
  }

const storeResp= await this.storeModel.create(req)
const Count = await this.storeModel.find().count();
if (storeResp ) {
   return {
       statusCode: HttpStatus.OK,
       addstoreRes: storeResp,
       count:Count
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
async storeList() {
    try {
     const stores = await this.storeModel.find()
     const Count = await this.storeModel.find().count();
        console.log(stores)
        if (stores) {
            return {
                StatusCode: HttpStatus.OK,
                Message: 'List of stores',
                Count: Count,
                Data: {
                    storesList: stores,
                    count: Count
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

 async findStore(req){
    try{
         const storeResponse = await this.storeModel.find({storeId: req.storeId})
         if(storeResponse){
            return{
                StatusCode: HttpStatus.OK,
                storeDetails: storeResponse
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

async storeUpdate(req: storeDto, image) {
    try {
          console.log(req, "req...", image)
          if (image) {
             if (image.storeImage && image.storeImage[0]) {
               const attachmentFile = await this.sharedService.saveFile(
                 image.storeImage[0],
               );
     
               req.storeImage = attachmentFile;
             }
             if (image.storeIcon && image.storeIcon[0]) {
               const attachmentFile = await this.sharedService.saveFile(
                 image.storeIcon[0],
               );
     
               req.storeIcon = attachmentFile;
             }
          }
        
          const updatestoreResp = await this.storeModel.updateOne({ storeId: req.storeId},{$set:{storeImage: req.storeImage, storeIcon: req.storeIcon, storeName: req.storeName, longitude: req.longitude, latitude: req.latitude}})          
                
          if (updatestoreResp) {
             return {
                 statusCode: HttpStatus.OK,
                 updatestoreRes: updatestoreResp
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
 async delete(body: storeDto){
    try{
        const deleteRes = await this.storeModel.deleteMany({storeId: body.storeId});
        console.log(deleteRes, "resp")
        return{
            statusCode: HttpStatus.OK,
            message: 'Store removed successfully'
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

async docs() {
    try {
        const vehicleResp = await this.storeModel.find().count();
        console.log(vehicleResp, "vehicleResp...")

        return {
                statusCode: HttpStatus.OK,
                message: 'Total number of Stores',
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

}
