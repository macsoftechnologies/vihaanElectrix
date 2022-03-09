import { Get, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { vEnergyDto } from './dto/vEnergy.dto';
import { vEnergy } from './schema/vEnergy.schema';

@Injectable()
export class VEnergyService {
    constructor(@InjectModel(vEnergy.name) private vEnergyModel: Model<vEnergy>) { }
    async Create(req: vEnergyDto) {
    try {
           
            const registerRes = await this.vEnergyModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "User Registered SuccessFully",
                    data: {
                       Type: req.type,
                       Location: req.location,
                       UID: req.vEnergyId,
                       OwnerName: req.ownerName,
                       Contact: req.contact,
                       Aadhar: req.aadhar,
                       DeviceUserName: req.deviceOwnerName,
                       ContactName: req.contact
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
    async usersList() {
        try {
    
            const userResponse = await this.vEnergyModel.find()
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'List of Users',
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
    async findPeriod(vEnergyId: string){
        try{
           const vehicleResponse = await this.vEnergyModel.findOne({vEnergyId: vEnergyId})
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
}
