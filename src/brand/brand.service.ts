import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SharedService } from 'src/shared/shared.service';
import { brandDto } from './dto/brand.dto';
import { brand } from './schema/brand.schema';

@Injectable()
export class BrandService {

    constructor(@InjectModel(brand.name) private brandModel: Model<brand>, private sharedService: SharedService ) { }
    async Create(req: brandDto, image) {
        try {
              console.log(req, "req...", image)
              if (image) {
                 if (image.brandImage && image.brandImage[0]) {
                   const attachmentFile = await this.sharedService.saveFile(
                     image.brandImage[0],
                   );
         
                   req.brandImage = attachmentFile;
                 }
                 if (image.logo && image.logo[0]) {
                   const attachmentFile = await this.sharedService.saveFile(
                     image.logo[0],
                   );
         
                   req.logo = attachmentFile;
                 }
               }
         
           const createBrandResp = await this.brandModel.create(req)
           
             if (createBrandResp) {
                return {
                    statusCode: HttpStatus.OK,
                    addBrandRes: createBrandResp
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
 
    async editBrand(req: brandDto, image) {
        try {
              console.log(req, "req...", image)
              if (image) {
                 if (image.brandImage && image.brandImage[0]) {
                   const attachmentFile = await this.sharedService.saveFile(
                     image.brandImage[0],
                   );
         
                   req.brandImage = attachmentFile;
                 }
                 if (image.logo && image.logo[0]) {
                   const attachmentFile = await this.sharedService.saveFile(
                     image.logo[0],
                   );
         
                   req.logo = attachmentFile;
                 }
               }
         
           const createBrandResp = await this.brandModel.updateOne({brandId:req.brandId},{$set: {brandImage: req.brandImage, brandName: req.brandName, logo: req.logo}})
           
             if (createBrandResp) {
                return {
                    statusCode: HttpStatus.OK,
                    addBrandRes: createBrandResp
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
    async brandList() {
        try {
    
            const brands = await this.brandModel.find()
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

    

async findBrand(brandId: string){
    try{
       const vehicleResponse = await this.brandModel.findOne({brandId: brandId})
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


async getBrand(brandId: string){
    try{
       const vehicleResponse = await this.brandModel.findOne({brandId: brandId})
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

async delete(body: brandDto) {
    try {

          console.log(body)
        const deleteRes = await this.brandModel.deleteOne({brandId:body.brandId});
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
