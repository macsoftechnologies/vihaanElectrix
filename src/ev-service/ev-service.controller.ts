import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { EvServiceService } from './ev-service.service';
import { evservicedto } from './dto/evservice.dto';

@Controller('ev-service')
export class EvServiceController {
  constructor(private readonly evServiceService: EvServiceService) {}

  @Post('/addEv-service')
  async bookevservice(@Body() body:evservicedto){
    try{
      const  response=await this.evServiceService.bookevservice(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Get('EvserviceList')
  async  getevservice(){
    try{
      const response=await this.evServiceService.getevservice()
      return response
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Post('getEvServiceById')
  async evserviceget(@Body() body:evservicedto){
    try{
      const response=await this.evServiceService.evserviceById(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Post('deleteEvService')
  async delEvservice(@Body() body:evservicedto){
    try{
      const response=await this.evServiceService.delEvService(body)
      return response
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Post('editEvservice')
  async updateEvserivce(@Body() req:evservicedto){
    try{
      const  response=await this.evServiceService.updateEvservice(req)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
