import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { loanDto } from './dto/loan.dto';
import { LoanService } from './loan.service';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post('/laon')
  async create(@Body() req: loanDto) {
      try {
          const result = await this.loanService.Create(req)
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
