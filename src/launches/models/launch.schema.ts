import { Prop, Schema } from "@nestjs/mongoose";
import { AbstractDocument } from "src/db/abstract.schema";

@Schema()
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
    used_cores: boolean;
    
    @Prop()
    logo: string;
}