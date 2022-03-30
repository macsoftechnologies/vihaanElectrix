import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import{ v4 as uuid } from "uuid"
@Schema({timestamps:true})
export class brand extends Document{
    @Prop({required: true, default: uuid})
    brandId: string;
    @Prop()
    brandName : string;
    @Prop()
    logo: string;
    @Prop()
    brandImage: string;
}

export const brandSchema = SchemaFactory.createForClass(brand)