import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuid } from "uuid";
@Schema({ timestamps: true })
export class bookRide extends Document {
    @Prop({ required: true, default: uuid })
    rideId: string
    @Prop()
    name: string;
    @Prop()
    aadharNo: string;
    @Prop()
    contactNo: string;
    @Prop()
    vehicleName: string;
    @Prop()
    model: string;
    @Prop()
    address: string;
    @Prop()
    area: string;
    @Prop()
    landMark: string;
    @Prop()
    city: string;
    @Prop()
    vehicleImage: string;
}
export const bookRideSchema = SchemaFactory.createForClass(bookRide)