import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { TechnicianService } from './technician.service';
import { technicianDto } from './dto/technician.dto';

@Controller('technician')
export class TechnicianController {
  constructor(private readonly technicianService: TechnicianService) {}


  @Post('/addTechnician')
  async addtechnician(@Body() body:technicianDto){
    try{
      const response=await this.technicianService.addworker(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error  
      }
    }
  }

  @Get('technicianlist')
  async listtechinician(){
    try{
      const response=await this.technicianService.getTechnician()
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Post('/gettechnician')
  async techinicianGet(@Body() body:technicianDto){
    try{
      const response=await this.technicianService.technicianget(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }



  @Post('removeTechnician')
  async techniciandel(@Body() body:technicianDto){
    try{
      const response=await this.technicianService.delTechnician(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }


  @Post('/updateTechnician')
  async edittech(@Body() body:technicianDto){
    try{
      const response=await this.technicianService.technicianEdit(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
