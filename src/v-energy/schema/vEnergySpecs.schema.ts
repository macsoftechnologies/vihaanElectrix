import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {v4 as uuid} from 'uuid'
export class loc{
    @Prop()
    longitude: string;
    @Prop()
    latitude: string
}
@Schema({timestamps:true})
export  class vEnergySpecs{
    @Prop({required: true, unique:true, default: uuid})
    chargerId: string
    @Prop()
    powerSpecifications: []
    @Prop()
    chargerImage: string
    @Prop()
    otherSpecifications: []
    @Prop()
    location: loc[]
}

export const  vEnergySpecsSchema = SchemaFactory.createForClass(vEnergySpecs);