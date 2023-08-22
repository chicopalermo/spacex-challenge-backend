import { FilterQuery, Model } from "mongoose";
import { AbstractDocument } from "./abstract.schema";

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
    constructor(protected readonly model: Model<TDocument>) {}

    async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
        const createDocument = new this.model(document);
        return (await createDocument.save()).toJSON() as unknown as TDocument;
    }

    async findAll(filterQuery: FilterQuery<TDocument>) {
        return this.model.find(filterQuery, {}, { lean: true });
    }
}