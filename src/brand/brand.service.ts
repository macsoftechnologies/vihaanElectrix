import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { brandDto } from './dto/brand.dto';
import { brand } from './schema/brand.schema';

@Injectable()
export class BrandService {

    constructor(@InjectModel(brand.name) private brandModel: Model<brand>) { }
    async Create(req: brandDto, image) {

        try {
            if (image) {
                const reqDoc = image.map((doc, index) => {
                    let IsPrimary = false
                    if (index == 0) {
                        IsPrimary = true
                    }
                    const randomNumber = Math.floor((Math.random() * 1000000) + 1);
                    return doc.filename
                   })
 
                req.logo = reqDoc.toString()
            }
               console.log(req);
            
        const brands = await this.brandModel.create(req)
          if (brands) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Added SuccessFully",
                    data: {
                       Brand: brands
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
}
