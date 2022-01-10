import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class loanDetails extends Document{
    @Prop()
    userId: string
    @Prop()
    loanPurpose: string
    @Prop()
    period : string
    @Prop()
    payment: string
    @Prop()
    interest: string
    @Prop()
    totalAmt: string 
}
export const  loanDetailsSchema = SchemaFactory.createForClass(loanDetails);