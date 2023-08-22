import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/db/abstract.schema";

@Schema({ versionKey: false })
export class LaunchDocument extends AbstractDocument {
    @Prop()
    flight_number: number;

    @Prop()
    name: string;
    
    @Prop()
    launch_date: Date;
    
    @Prop()
    rocket: string;
    
    @Prop()
    success: boolean;
    
    @Prop()
    reused_cores: boolean;
    
    @Prop()
    logo: string;

    @Prop()
    youtube_id: string;
}

export const LaunchSchema = SchemaFactory.createForClass(LaunchDocument);