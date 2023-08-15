import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreateLaunchDto {
    @IsInt()
    @IsNotEmpty()
    flight_number: number;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsDate()
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
    used_cores: boolean;
    
    @IsString()
    logo: string;
}
