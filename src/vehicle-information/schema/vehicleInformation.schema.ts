import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';

export class vehicleProperties{
    
    @Prop()
    eBikes: string;

    @Prop()
    capacity: string;

    @Prop()
    trueRange: string;

    @Prop()
    peakPower: string;

    @Prop()
    torque: string;

    @Prop()
    topSpeed: string;

    @Prop()
    chargingTime: string;

    @Prop()
    usableCapacity: string;
}

@Schema({ timestamps: true })

export class vehicleInfo extends Document{

    @Prop({required: true, unique: true, default: uuid})
    vehicleInfoId: string;
 
    @Prop()
    image: []
   
    @Prop()
    vehicleName: string;

    @Prop()
    price: string;

    @Prop()
    offers: string;
   
    @Prop()
    vehicleDetails: vehicleProperties[]

    @Prop()
    colors: []
 
}


export const  vehicleInfoSchema = SchemaFactory.createForClass(vehicleInfo);
