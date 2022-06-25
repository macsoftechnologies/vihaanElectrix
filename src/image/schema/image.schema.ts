import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid'
@Schema({timestamps: true})
export class image extends Document{
    @Prop()
    image: []
    @Prop({required: true, unique:true, default:uuid})
    imageId: string;
}

export const imageSchema = SchemaFactory.createForClass(image);