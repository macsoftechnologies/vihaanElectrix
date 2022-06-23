import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuid } from 'uuid';
export class loc{
    @Prop()
    longitude: string;
    @Prop()
    latitude: string
}
@Schema({timestamps:true})
export class vEnergy extends Document{
    @Prop()
    type: string;
    // @Prop()
    // location: loc[]
    @Prop()
    longitude: string;
    @Prop()
    latitude: string
    @Prop({required:true, unique:true, default: uuid })
    vEnergyId: string;
    @Prop()
    ownerName: string;
    @Prop()
    contact: string;
    @Prop()
    aadhar: string;
    @Prop()
    deviceOwnerName: string;
    @Prop()
    deviceContactNo: string;
}

export const  vEnergySchema = SchemaFactory.createForClass(vEnergy);