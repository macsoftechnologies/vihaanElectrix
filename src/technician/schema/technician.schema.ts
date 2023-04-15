import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

@Schema({timestamps:true})
export class technician extends Document{
@Prop()
technicianId:string
@Prop()
name:string
@Prop()
 Name:string
 @Prop()
email:string
@Prop()
mobileNumber:string

}

export const technicianSchema =SchemaFactory.createForClass(technician)
