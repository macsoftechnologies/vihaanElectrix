import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { vehicleInfoDto } from './dto/vehicalInformation.dto';
import { vehicleInfo } from './schema/vehicleInformation.schema';

@Injectable()
export class VehicleInformationService {
    
    constructor(@InjectModel(vehicleInfo.name) private vehicleModel: Model<vehicleInfo>) { }
    async Create(req: vehicleInfoDto, image) {
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

               req.image = reqDoc.toString()
           }
              console.log(req);
           // return false;
          const createVehicleResp = await this.vehicleModel.create(req)
          
            if (createVehicleResp) {
               return {
                   statusCode: HttpStatus.OK,
                   message: "Registered SuccessFully",
                   data: {
                       UserRegistration: {
                           createVehicleRes: createVehicleResp
                       }
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

   async findVehicle(vehicleName: string){
       try{
           const vehicleResp = await this.vehicleModel.findOne({vehicleName: vehicleName})
           if(vehicleResp){
               return{
                   StatusCode: HttpStatus.OK,
                   Message: "vehicle Information",
                   Data: {
                       vehicleInfo: vehicleResp
                   }
               }
           }
           return{
               StatusCode: HttpStatus.BAD_REQUEST,
               Message: "Invalid Request"
           }
        }
           catch(error){
           return{
               StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
               Message: error
           }
           }
       }
   }



