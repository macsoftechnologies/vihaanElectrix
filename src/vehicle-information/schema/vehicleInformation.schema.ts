import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';

export class vehicleProperties{
    
    
    eBikes: string;

    capacity: string;

    trueRange: string;

    peakPower: string;

    torque: string;

    topSpeed: string;

    chargingTime: string;

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
   
    @Prop({type: Object})
    vehicleDetails: object

    @Prop()
    colors: []
 
}


export const  vehicleInfoSchema = SchemaFactory.createForClass(vehicleInfo);
