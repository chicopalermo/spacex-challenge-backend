import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/db/abstract.schema";

@Schema({ versionKey: false })
export class RocketDocument extends AbstractDocument {
    @Prop()
    name: string;
}

export const RocketSchema = SchemaFactory.createForClass(RocketDocument);