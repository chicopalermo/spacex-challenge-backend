import { IsNumber, IsOptional, IsString, Min } from "class-validator";
import { Type } from 'class-transformer';

export class CommonQueriesDto {
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    limit?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    page?: number = 1;

    @IsOptional()
    @IsString()
    search: string;
}