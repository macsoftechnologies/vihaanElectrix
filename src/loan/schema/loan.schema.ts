import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class loan extends Document{
    @Prop()
    vehicleName: string
    @Prop()
    period : string
    @Prop()
    amount: string
}
export const  loanSchema = SchemaFactory.createForClass(loan);