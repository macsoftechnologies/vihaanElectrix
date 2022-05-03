import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import{ v4 as uuid } from "uuid"
@Schema({timestamps:true})
export class colorMapping extends Document{
    @Prop()
    vehicleId: string;
    @Prop()
    vehicleImage : []
    @Prop()
    colorImage: []
    @Prop({required: true, default:uuid, unique:true})
    colorId: string
}

export const colorMappingSchema = SchemaFactory.createForClass(colorMapping)