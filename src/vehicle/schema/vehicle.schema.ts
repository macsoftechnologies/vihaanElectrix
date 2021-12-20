import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class vehicle extends Document{
    @Prop({required : true , unique:true , default : uuid})
    vehicleId: string
    @Prop()
    vehicleName: string;

    @Prop()
    price: string;

    @Prop()
    offers: string;

    @Prop()
    capacity: string;

    @Prop()
    image: []
}
 
export const  vehicleSchema = SchemaFactory.createForClass(vehicle);
