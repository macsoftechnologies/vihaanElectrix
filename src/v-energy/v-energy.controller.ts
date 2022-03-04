import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { vEnergyDto } from './dto/vEnergy.dto';
import { VEnergyService } from './v-energy.service';

@Controller('v-energy')
export class VEnergyController {
  constructor(private readonly vEnergyService: VEnergyService) {}
  @Post('/chargerStation') 
  
  async create(@Body() req: vEnergyDto) {
      try {
          const result = await this.vEnergyService.Create(req)
          console.log("result", result);
          
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }
  
  @Get('/listOfVenergyUsers')
  
  async listOfUsers() {
     console.log()
     try {
         const response = await this.vEnergyService.usersList()
         return response
     } catch (error) {
         return {
             StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
             Message : error
         }
     }
 }
 @Get('/getById')
 async find(@Query('vEnergyId') id: string){
      //console.log('vehicleName')
      try{
          const response = await this.vEnergyService.findPeriod(id)
          return response
      }
      catch(error){
          return{
              StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              Message: error
          }
      }
    }

}
