import { Body, Controller, Get, HttpStatus, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { vEnergyDto } from './dto/vEnergy.dto';
import { vEnergySpecsDto } from './dto/vEnergySpecs.dto';
import { VEnergyService } from './v-energy.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
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

    @Post('/addCharger') 
    @UseInterceptors(
          AnyFilesInterceptor({
              storage: diskStorage({
                  destination: './files',
                  filename: (req, file, cb) => {
                      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                      cb(null, `${randomName}${extname(file.originalname)}`)
                  }
              }),
          }),
      )
      async addCharger(@Body() req: vEnergySpecsDto, @UploadedFiles() image) {
          try {
              const result = await this.vEnergyService.createCharger(req, image)
              console.log("result", result);
              
              return result
          } catch (error) {
              return {
                  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                  message: error.message,
              };
          }
       }
       @Get('/getCharger')
    
       async findCharger(@Query('chargerId') chargerId: string){
           //console.log('vehicleName')
           try{
               const response = await this.vEnergyService.findVehicle(chargerId)
               return response
           }
           catch(error){
               return{
                   StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                   Message: error
               }
           }
         }
     @Get('/listOfChargerss')
         async listOfChargers() {
             console.log()
             try {
                 const response = await this.vEnergyService.chargerList()
                 return response
             } catch (error) {
                 return {
                     StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                     Message : error
                 }
             }
         }
     
}
