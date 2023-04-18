import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { roadsideAssistance } from './schema/roadside-assistance.dto';
import {Model} from 'mongoose'
import { roadsideAssistanceDto } from './dto/roadside-assistance.schema';
import { technician } from 'src/technician/schema/technician.schema';
import { error } from 'console';

@Injectable()
export class RoadsideAssistanceService {

    constructor(@InjectModel(roadsideAssistance.name) private roadsideAssistanceModel:Model<roadsideAssistance>,
          @InjectModel(technician.name) private techicianModel:Model<technician>){}


    async  addRoadAssistance(req:roadsideAssistanceDto){
        try{
            const roadsideResp=await this.roadsideAssistanceModel.create(req)
            if(roadsideResp){
                return {
                    statusCode:HttpStatus.OK,
                    message:'added Sucessfully',
                    resp:roadsideResp
                }
            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Invalid Request"
            }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async getroadAssistance(){
        try{
            const roadAssitance=await this.roadsideAssistanceModel.find()
            if(roadAssitance){
                return{
                    statusCode:HttpStatus.OK,
                    data:roadAssitance
                }
            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Invalid Request"
            }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }

    
    async roadAssisfind(params:roadsideAssistanceDto){
    try{
        const response=await this.roadsideAssistanceModel.findOne({roadsideassistanceId:params.roadsideassistanceId})
        if(response){
            return response
        }else{
            return {
                statusCode:HttpStatus.BAD_REQUEST,
                message:'Invalid Request'
            }
        }
           
     }catch(error){
        return {
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
   }
 
  async assingedworker(params:roadsideAssistanceDto){
    try{
        const updateRes=await this.roadsideAssistanceModel.updateOne({roadsideassistanceId:params.roadsideassistanceId},
            {$set:{technician:params.technician}})
            if(updateRes){
                return updateRes
            }else{
            return {
                statusCode:HttpStatus.BAD_REQUEST,
                message:'Invalid Request'
            }
        }
    }catch(error){
        return {
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
  }



  async delroadAsistance(params:roadsideAssistanceDto){
    try{
        const  delResp=await this.roadsideAssistanceModel.deleteOne({roadsideassistanceId:params.roadsideassistanceId})
        if(delResp){
            return delResp
        }else{
            return {
                statusCode:HttpStatus.BAD_REQUEST,
                message:'Invalid Request' 
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
