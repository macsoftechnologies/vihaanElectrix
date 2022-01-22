import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class loanPeriod extends Document{
    @Prop()
    id: string
    @Prop()
    period: string;
}
 
export const  loanPeriodSchema = SchemaFactory.createForClass(loanPeriod);
