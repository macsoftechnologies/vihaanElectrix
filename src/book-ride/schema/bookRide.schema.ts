import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps: true})
export class bookRide extends Document{
 @Prop()
 name: string;
 @Prop()
 aadharNo : string;
 @Prop()
 contactNo: string;
 @Prop()
 address: string;
 @Prop()
 area: string;
 @Prop()
 landMark: string;
 @Prop()
 city: string;
}
export const bookRideSchema = SchemaFactory.createForClass(bookRide)