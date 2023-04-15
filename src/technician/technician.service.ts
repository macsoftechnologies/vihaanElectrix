import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { technician } from './schema/technician.schema';
import {Model} from  'mongoose'
import { technicianDto } from './dto/technician.dto';
@Injectable()
export class TechnicianService {
    constructor(@InjectModel(technician.name) private technicianModel:Model<technician>){}



    async addworker(params:technicianDto){
        try{
            const workerResp=await this.technicianModel.create(params)
            if(workerResp){
                return {
                    statusCode:HttpStatus.OK,
                    message:'added sucessfully',
                    
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }
}
