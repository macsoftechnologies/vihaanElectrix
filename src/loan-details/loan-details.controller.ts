import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { loanDetailsDto } from './dto/loanDetails.dto';
import { LoanDetailsService } from './loan-details.service';

@Controller('loan-details')
export class LoanDetailsController {
  constructor(private readonly loanDetailsService: LoanDetailsService) {}
  @Post('/loanDetails')
  async create(@Body() req: loanDetailsDto) {
      try {
          const result = await this.loanDetailsService.Create(req)
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
