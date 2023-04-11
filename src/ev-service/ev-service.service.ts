import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { evservice } from './schema/evservice.schema';
import {Model} from 'mongoose'
import { evservicedto } from './dto/evservice.dto';

@Injectable()
export class EvServiceService {
    constructor(@InjectModel(evservice.name) private evserviceModel:Model<evservice>){}

    async bookevservice(req:evservicedto){
        try{
            const addbooking=await  this.evserviceModel.create(req)
            if(addbooking){
                return {
                    statusCode:HttpStatus.OK,
                    message:'service booking confirmed ',
                    resp:addbooking
                }
            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Invalid Request',
              }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async getevservice(){
        try{
            const getservice=await this.evserviceModel.find()
            if(getservice){
                return {
                    statusCode:HttpStatus.OK,
                    message:'Ev-service list ',
                    data:getservice
                }
            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Invalid Request',
              }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }

    async evserviceById(req:evservicedto){
        try{
            const respById=await this.evserviceModel.findOne({evserviceId:req.evserviceId})
            if(respById){
                return {
                    statusCode:HttpStatus.OK,
                    bookId:respById
                }
            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Invalid Request',
              }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error
            }
        }
    }


    async  delEvService(req:evservicedto){
        try{
            const delresp=await this.evserviceModel.deleteOne({evserviceId:req.evserviceId})
            if(delresp){
                return{
                statusCode:HttpStatus.OK,
                message:'deleted Sucessfully',
                del:delresp
                }
            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Invalid Request',
              }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async updateEvservice(req:evservicedto){
        try{
            const editservice=await this.evserviceModel.updateOne({evserviceId:req.evserviceId},
                {$set:{
                    vehicle:req.vehicle,
                    BookingStatus:req.BookingStatus,
                    date:req.date
                }})
                
                if(editservice){
                    return{
                        statusCode:HttpStatus.OK,
                        message:'updated sucessfully',
                        edit:editservice
                    }
                }
                return {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Invalid Request',
                  }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }
}
