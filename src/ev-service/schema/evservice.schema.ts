import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {v4 as uuid} from 'uuid';
import {Document} from 'mongoose';

@Schema({timestamps:true})
export class evservice extends Document{
    @Prop({default:uuid,unique:true })
    evserviceId:string
    @Prop()
    vehicle:string
    @Prop()
    date:string
    @Prop()
    BookingStatus:string

}

export const evserviceSchema=SchemaFactory.createForClass(evservice)