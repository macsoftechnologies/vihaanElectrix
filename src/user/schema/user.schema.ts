import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class users extends Document{
    @Prop({required : true , unique:true , default : uuid})
    userId: string
    @Prop()
    fname: string
    @Prop()
    password : string
    @Prop()
    mobileNum: string
    @Prop()
    email: string
}
export const  usersSchema = SchemaFactory.createForClass(users);