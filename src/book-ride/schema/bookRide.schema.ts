import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class bookRide extends Document {
  @Prop({ required: true, default: uuid })
  rideId: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  aadharNo: string;
  @Prop({ required: true })
  contactNo: string;
  @Prop({ required: true })
  vehicleName: string;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  area: string;
  @Prop({ required: true })
  landmark: string;
  @Prop({ required: true })
  city: string;
  @Prop()
  vehicleImage: string;
  @Prop()
  brand: string;
  @Prop()
  date: string;
}
export const bookRideSchema = SchemaFactory.createForClass(bookRide);
