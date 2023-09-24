import { FilterQuery, Model } from "mongoose";
import { AbstractDocument } from "./abstract.schema";

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
    constructor(protected readonly model: Model<TDocument>) {}

    async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
        const createDocument = new this.model(document);
        return (await createDocument.save()).toJSON() as unknown as TDocument;
    }

    async findAll(filterQuery: FilterQuery<TDocument>) {
        const docs = await this.model.find(filterQuery, {}, { lean: true });

        return {
            results: docs
        }
    }

    async findAllPaged(filterQuery: FilterQuery<TDocument>) {
        const totalDocs = await this.model.find(
            filterQuery.search ? { name: { $regex: filterQuery.search, $options: 'i'} }: {}, 
            {}, 
            { lean: true }
        ).count();

        const totalPages = Math.ceil(totalDocs / filterQuery.limit);
        
        const skip = filterQuery.limit * (filterQuery.page - 1);

        const docs = await this.model.find(
            filterQuery.search ? { name: { $regex: filterQuery.search, $options: 'i'} }: {}, 
            {}, 
            { lean: true, limit: filterQuery.limit, skip }
        );

        return {
            results: docs,
            totalDocs,
            page: filterQuery.page,
            totalPages,
            hasNext: totalPages > filterQuery.page,
            hasPrev: filterQuery.page > 1
        }
    }
}