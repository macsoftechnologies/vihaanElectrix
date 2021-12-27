import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class admin extends Document{
    @Prop({required : true , unique:true , default : uuid})
    email: string
    @Prop()
    password : string
    @Prop()
    mobileNum: string
}
export const  adminSchema = SchemaFactory.createForClass(admin);