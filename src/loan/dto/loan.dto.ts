import { IsString, IsEmail, IsEnum, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class loanDto{
   
    @ApiProperty()
    userId: string
   
    @ApiProperty()
    vehicleName: string
    
    @ApiProperty()
    period: string
    
    @ApiProperty()
    amt: string
}
