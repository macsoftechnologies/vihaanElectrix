import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class uploadType extends Document{
    @Prop()
    userId: string
    @Prop()
    documents: [];
}
 
export const  uploadTypeSchema = SchemaFactory.createForClass(uploadType);
