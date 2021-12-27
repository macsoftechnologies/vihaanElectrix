import { IsString, IsEmail, IsEnum, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class adminLogin {
    
    @ApiProperty()
    mobileNum: string
    
    @ApiProperty()
    email: string
    
    @ApiProperty()
    password: string
}
