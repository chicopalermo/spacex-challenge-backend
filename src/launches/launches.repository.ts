import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { LaunchDocument } from "./models/launch.schema";
import { Model } from "mongoose";
import { AbstractRepository } from "src/db/abstract.repository";

@Injectable()
export class LaunchesRepository extends AbstractRepository<LaunchDocument>{
    constructor(@InjectModel(LaunchDocument.name) private launchModel: Model<LaunchDocument>) {
        super(launchModel)
    }

    async bulkCreate(launches: LaunchDocument[]): Promise<LaunchDocument[]> {
        return this.launchModel.insertMany(launches)
    }
}