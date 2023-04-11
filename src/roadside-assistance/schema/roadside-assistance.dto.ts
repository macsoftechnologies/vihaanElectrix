import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {v4 as uuid} from  'uuid';
import {Document} from 'mongoose';

@Schema({timestamps:true})
export class roadsideAssistance extends Document{
    @Prop({default:uuid,unique:true })
    roadsideassistanceId:string
    @Prop()
    name:string
    @Prop()
    phNumber:string
    @Prop()
    location:[]

}



export const roadsideAssistanceSchema=SchemaFactory.createForClass(roadsideAssistance)