import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { RoadsideAssistanceService } from './roadside-assistance.service';
import { roadsideAssistanceDto } from './dto/roadside-assistance.schema';

@Controller('roadside-assistance')
export class RoadsideAssistanceController {
  constructor(private readonly roadsideAssistanceService: RoadsideAssistanceService) {}

  @Post('addRoadsideAsistance')
  async AddRoadAssitance(@Body() req:roadsideAssistanceDto){
    try{
      const response=await this.roadsideAssistanceService.addRoadAssistance(req)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }


  @Get('roadsideAssistencelist')
  async roadAsistanceList(){
    try{
      const response=await this.roadsideAssistanceService.getroadAssistance()
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

    
    @Post('getRoadsideAsistanceByid')
    async roadAssistanceid(@Body() req:roadsideAssistanceDto){
      try{
        const result=await this.roadsideAssistanceService.roadAssistanceGet(req)
        return result
      }catch(error){
        return {
          statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
          message:error
        }
      }
    }

    
}
