import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/db/abstract.repository";
import { RocketDocument } from "./models/rocket.schema";

@Injectable()
export class RocketsRepository extends AbstractRepository<RocketDocument>{
    constructor(@InjectModel(RocketDocument.name) private rocketModel: Model<RocketDocument>) {
        super(rocketModel)
    }

    async bulkCreate(rockets: RocketDocument[]): Promise<RocketDocument[]> {
        return this.rocketModel.insertMany(rockets);
    }
}