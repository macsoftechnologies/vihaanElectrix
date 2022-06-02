import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { isUUID } from "class-validator";
import { Document } from 'mongoose'
import { v4 as uuid} from 'uuid'
// export class loc{
//     @Prop()
//     longitude: string
//     @Prop()
//     latitude: string
// }
@Schema({timestamps:true})
export class store extends Document{
    @Prop({required: true, default: uuid, unique: true })
    storeId: string
    @Prop()
    storeName: string
    @Prop()
    storeIcon: []
    @Prop()
    longitude: string
    @Prop()
    latitude: string
    @Prop()
    storeImage: []

}


export const storeSchema = SchemaFactory.createForClass(store)