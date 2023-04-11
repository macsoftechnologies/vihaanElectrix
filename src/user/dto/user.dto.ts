import { IsString, IsEmail, IsEnum, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class userRegisterDto {
    
    @ApiProperty()
    userId: string

    @ApiProperty()
    fullName: string
    
    
    
    @ApiProperty()
    mobileNum: string

    @ApiProperty()
    password: string
    @ApiProperty()
    address:string
    @ApiProperty()
    verificationCode:string

}