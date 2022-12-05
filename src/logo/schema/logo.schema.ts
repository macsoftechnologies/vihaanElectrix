import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuid } from 'uuid';
@Schema({timestamps: true})

export class logo{
    @Prop({default: uuid})
    logoId: string
    @Prop()
    logo: string
}

export const logoSchema = SchemaFactory.createForClass(logo);