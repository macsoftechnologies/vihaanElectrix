import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import {v4 as uuid} from 'uuid';

@Schema({timestamps:true})
export class technician extends Document{
@Prop({default:uuid,unique:true})
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
