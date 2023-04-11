import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { roadsideAssistance } from './schema/roadside-assistance.dto';
import {Model} from 'mongoose'
import { roadsideAssistanceDto } from './dto/roadside-assistance.schema';

@Injectable()
export class RoadsideAssistanceService {

    constructor(@InjectModel(roadsideAssistance.name) private roadsideAssistanceModel:Model<roadsideAssistance>){}
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

    async roadAssistanceGet(req:roadsideAssistanceDto){
        try{
            const getResp=await this.roadsideAssistanceModel.findOne({roadsiderassistanceId:req.roadsideassistanceId})
            if(getResp){
                return{
                    statusCode:HttpStatus.OK,
                    resp:getResp
                }
            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Invalid Request"
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }
}
