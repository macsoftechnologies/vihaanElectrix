import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class vehicle extends Document{
    @Prop({required : true , unique:true , default : uuid})
    vehicleId: string
    @Prop()
    vehicleName: string;
  
    @Prop()
    model: string;
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
    refelector: string;

    @Prop()
    blinkers: string;

    @Prop()
    brakeLights: string;

    @Prop()
    mudGuards: string;

    @Prop()
    seat: string;

    @Prop()
    vehicleImage: string;
    @Prop()
    throttle: string;
    @Prop()
    gradeablity: string;
    @Prop()
    storage: string;
    @Prop()
    security: string;
    @Prop()
    ladiesFootrest: string
    @Prop()
    amount: string
}

export const  vehicleSchema = SchemaFactory.createForClass(vehicle);
