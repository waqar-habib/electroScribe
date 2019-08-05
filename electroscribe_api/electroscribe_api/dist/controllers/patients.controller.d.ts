import { Count, Filter, Where } from '@loopback/repository';
import { patients } from '../models';
import { patientsRepository } from '../repositories';
export declare class patientsController {
    patientsRepository: patientsRepository;
    constructor(patientsRepository: patientsRepository);
    create(patients: Omit<patients, 'pt_uuid'>): Promise<patients>;
    count(where?: Where<patients>): Promise<Count>;
    find(filter?: Filter<patients>): Promise<patients[]>;
    updateAll(patients: patients, where?: Where<patients>): Promise<Count>;
    findById(id: string): Promise<patients>;
    updateById(id: string, patients: patients): Promise<void>;
    replaceById(id: string, patients: patients): Promise<void>;
    deleteById(id: string): Promise<void>;
}
