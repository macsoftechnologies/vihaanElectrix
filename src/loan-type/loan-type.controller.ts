import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { typeDto } from './dto/loantype.dto';
import { LoanTypeService } from './loan-type.service';

@Controller('loan-type')
export class LoanTypeController {
  constructor(private readonly loanTypeService: LoanTypeService) {}

  @Post('/type')
  async create(@Body() req: typeDto) {
      try {
          const result = await this.loanTypeService.Create(req)
          console.log("result", result);
          
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }
  
 
}
