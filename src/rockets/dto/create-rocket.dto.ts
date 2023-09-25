import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateRocketDto {
    @IsMongoId()
    @IsOptional()
    _id: Types.ObjectId;

    @IsString()
    @IsNotEmpty()
    name: string;
}
