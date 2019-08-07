import { Count, Filter, Where } from '@loopback/repository';
import { drugs } from '../models';
import { drugsRepository } from '../repositories';
export declare class drugsController {
    drugsRepository: drugsRepository;
    constructor(drugsRepository: drugsRepository);
    create(drugs: Omit<drugs, 'drug_uuid'>): Promise<drugs>;
    count(where?: Where<drugs>): Promise<Count>;
    find(filter?: Filter<drugs>): Promise<drugs[]>;
    updateAll(drugs: drugs, where?: Where<drugs>): Promise<Count>;
    findById(id: string): Promise<drugs>;
    updateById(id: string, drugs: drugs): Promise<void>;
    replaceById(id: string, drugs: drugs): Promise<void>;
    deleteById(id: string): Promise<void>;
}
