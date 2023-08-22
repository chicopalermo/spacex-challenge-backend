import { IsBoolean, IsDateString, IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Types } from 'mongoose';

export class CreateLaunchDto {
    @IsMongoId()
    @IsOptional()
    _id: Types.ObjectId;

    @IsInt()
    @IsNotEmpty()
    flight_number: number;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsDateString()
    @IsNotEmpty()
    launch_date: Date;
    
    @IsString()
    @IsNotEmpty()
    rocket: string;
    
    @IsBoolean()
    @IsNotEmpty()
    success: boolean;
    
    @IsBoolean()
    @IsNotEmpty()
    reused_cores: boolean;
    
    @IsString()
    logo: string;

    @IsString()
    youtube_id: string;
}
