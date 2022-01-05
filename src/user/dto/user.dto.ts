import { IsString, IsEmail, IsEnum, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class userRegisterDto {
    
    @ApiProperty()
    userId: string

    @ApiProperty()
    fName: string
    
    @ApiProperty()
    email: string
    
    @ApiProperty()
    mobileNum: string

    @ApiProperty()
    password: string

}