import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
export class spec {
  key: string;
  value: string;
}
@Schema({ timestamps: true })
export class colorMappingSpecs extends Document {
  @Prop({ required: true, unique: true, default: uuid })
  colorId: string;
  @Prop()
  vehicleImage: [];
  @Prop()
  colorImage: string;
  @Prop()
  model: string;
  @Prop({ required: true, unique: true, default: uuid })
  vehicleId: string;
  @Prop()
  vehicleName: string;
  @Prop()
  tyre: string;
  @Prop()
  motor: string;
  @Prop()
  controller: string;
  @Prop()
  battery: string;
  @Prop()
  batteryCasing: string;
  @Prop()
  cells: string;
  @Prop()
  bms: string;
  @Prop()
  chargerOutput: string;
  @Prop()
  externalChargingPort: string;
  @Prop()
  brake: string;
  @Prop()
  regenerativeBraking: string;
  @Prop()
  display: string;
  @Prop()
  headLamp: string;
  @Prop()
  reflector: string;
  @Prop()
  blinkers: string;
  @Prop()
  brakeLights: string;
  @Prop()
  mudGuards: string;
  @Prop()
  seat: string;
  @Prop()
  throttle: string;
  @Prop()
  gradeablity: string;
  @Prop()
  storage: string;
  @Prop()
  security: string;
  @Prop()
  ladiesFootrest: string;
  @Prop()
  amount: string;
  @Prop()
  brandName: string;
  @Prop()
  rim: string;
  @Prop()
  specsImage: string;
  @Prop()
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
  @Prop()
  wheelSize: string;
  @Prop()
  batteryWarranty: string;
  @Prop()
  motorWarranty: string;
  @Prop()
  licenseRegistration: string;
}

export const colorMappingSpecsSchema =
  SchemaFactory.createForClass(colorMappingSpecs);
