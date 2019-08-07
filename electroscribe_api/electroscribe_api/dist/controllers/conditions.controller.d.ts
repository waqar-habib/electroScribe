import { Count, Filter, Where } from '@loopback/repository';
import { conditions } from '../models';
import { conditionsRepository } from '../repositories';
export declare class conditionsController {
    conditionsRepository: conditionsRepository;
    constructor(conditionsRepository: conditionsRepository);
    create(conditions: Omit<conditions, 'icd_10'>): Promise<conditions>;
    count(where?: Where<conditions>): Promise<Count>;
    find(filter?: Filter<conditions>): Promise<conditions[]>;
    updateAll(conditions: conditions, where?: Where<conditions>): Promise<Count>;
    findById(id: string): Promise<conditions>;
    updateById(id: string, conditions: conditions): Promise<void>;
    replaceById(id: string, conditions: conditions): Promise<void>;
    deleteById(id: string): Promise<void>;
}
