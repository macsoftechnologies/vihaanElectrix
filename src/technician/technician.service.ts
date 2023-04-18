import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { technician } from './schema/technician.schema';
import {Model} from  'mongoose'
import { technicianDto } from './dto/technician.dto';
import { error } from 'console';
@Injectable()
export class TechnicianService {
    constructor(@InjectModel(technician.name) private technicianModel:Model<technician>){}



    async addworker(params:technicianDto){
        try{
            const workerResp=await this.technicianModel.create(params)
            if(workerResp){
                return  {workerResp}
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async getTechnician(){
        try{
            const techicianResp=await this.technicianModel.find()
            if(techicianResp){
                return{
                    statusCode:HttpStatus.OK,
                    message:'list of technicians',
                    data:techicianResp
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async technicianget(params:technicianDto){
        try{
            const techicianResp=await this.technicianModel.findOne({technicianId:params.technicianId})
            if(techicianResp){
                return {
                    statusCode:HttpStatus.OK,
                    data:techicianResp

                }
            } 
            return {
                statusCode:HttpStatus.BAD_REQUEST,
                message:error
            }  
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async delTechnician(params:technicianDto){
        try{
            const removeTechnician=await this.technicianModel.deleteOne({technicianId:params.technicianId})
            if(removeTechnician){
                return removeTechnician
            }else{
                return {
                    statusCode:HttpStatus.BAD_REQUEST,
                    message:'Invalid Request'
                }
            }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async technicianEdit(params:technicianDto){
        try{
            const technicianResp=await this.technicianModel.updateOne({technicianId:params.technicianId},
                {$set:{name:params.name,
                      email:params.email,
                    mobileNumber:params.mobileNumber}})
             if(technicianResp){
                return technicianResp
                
                
             }else{
                return {
                    statusCode:HttpStatus.BAD_REQUEST,
                    message:'Invalid Request'
                }
             }       
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }
}
