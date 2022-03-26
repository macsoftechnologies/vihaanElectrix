import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import { v4 as uuid } from 'uuid'
@Schema({timestamps:true})
export class color extends Document{
    @Prop({required: true,unique:true, default:uuid})
    colorId: string;
    @Prop()
    vehicleImage: [];
    @Prop()
    colorImage: string;
    @Prop()
    model: string
}
 
export const colorSchema = SchemaFactory.createForClass(color)