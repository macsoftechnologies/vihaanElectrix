import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class colorMappingSpecs extends Document {
  @Prop({ required: true, unique: true, default: uuid })
  colorId: string;
  @Prop({ default: '' })
  vehicleImage: [];
  @Prop({ default: '' })
  colorImage: string;
  @Prop({ default: '' })
  model: string;
  @Prop({ required: true, unique: true, default: uuid })
  vehicleId: string;
  @Prop({ default: '' })
  vehicleName: string;
  @Prop({ default: '' })
  tyre: string;
  @Prop({ default: '' })
  motor: string;
  @Prop({ default: '' })
  controller: string;
  @Prop({ default: '' })
  battery: string;
  @Prop({ default: '' })
  batteryCasing: string;
  @Prop({ default: '' })
  cells: string;
  @Prop({ default: '' })
  bms: string;
  @Prop({ default: '' })
  chargerOutput: string;
  @Prop({ default: '' })
  externalChargingPort: string;
  @Prop({ default: '' })
  brake: string;
  @Prop({ default: '' })
  regenerativeBraking: string;
  @Prop({ default: '' })
  display: string;
  @Prop({ default: '' })
  headLamp: string;
  @Prop({ default: '' })
  reflector: string;
  @Prop({ default: '' })
  blinkers: string;
  @Prop({ default: '' })
  brakeLights: string;
  @Prop({ default: '' })
  mudGuards: string;
  @Prop({ default: '' })
  seat: string;
  @Prop({ default: '' })
  throttle: string;
  @Prop({ default: '' })
  gradeablity: string;
  @Prop({ default: '' })
  storage: string;
  @Prop({ default: '' })
  security: string;
  @Prop({ default: '' })
  ladiesFootrest: string;
  @Prop({ default: '' })
  amount: string;
  @Prop({ default: '' })
  brandName: string;
  @Prop({ default: '' })
  rim: string;
  @Prop({ default: '' })
  specsImage: string;
  @Prop({ default: '' })
  price: string;
  @Prop()
  speed: string;
  @Prop()
  range: string;
  @Prop()
  chargingTime: string;
  @Prop()
  loadCapacity: string;
  @Prop()
  batteryType: string;
  @Prop()
  motorType: string;
  @Prop()
  batteryCapacity: string;
  @Prop()
  motorCapacity: string;
}

export const colorMappingSpecsSchema =
  SchemaFactory.createForClass(colorMappingSpecs);
