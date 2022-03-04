import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { loanPeriodDto } from './dto/loanPeriod.dto';
import { LoanPeriodService } from './loan-period.service';

@Controller('loan-period')
export class LoanPeriodController {
  constructor(private readonly loanPeriodService: LoanPeriodService) {}

  @Post('/periodId')
  async create(@Body() req: loanPeriodDto) {
      try {
          const result = await this.loanPeriodService.Create(req)
          console.log("result", result);
          
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }

   @Get('/periodId')
  // @ApiCreatedResponse({ description: 'vehicle details has been fetched successfully'})
  // @ApiForbiddenResponse({ description: 'forbidden.' }) 
      async listOfVehicles() {
          console.log()
          try {
              const response = await this.loanPeriodService.periodList()
              return response
          } catch (error) {
              return {
                  StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                  Message : error
              }
          }
      }

      @Get('/getPeriod')
       async find(@Query('id') id: string){
            //console.log('vehicleName')
            try{
                const response = await this.loanPeriodService.findPeriod(id)
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
