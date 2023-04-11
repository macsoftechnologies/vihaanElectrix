import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class users extends Document{
    @Prop({required : true , unique:true , default : uuid})
    userId: string
    @Prop()
    fullName: string
    @Prop()
    password : string
    @Prop()
    mobileNum: string
    @Prop()
    address:string
    @Prop()
    verificationCode:string
   
}
export const  usersSchema = SchemaFactory.createForClass(users);