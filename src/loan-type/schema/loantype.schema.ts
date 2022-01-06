import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class type extends Document{
    @Prop()
    userId: string
    @Prop()
    typeLoan : string
}
export const  typeSchema = SchemaFactory.createForClass(type);