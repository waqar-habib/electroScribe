import { Count, Filter, Where } from '@loopback/repository';
import { providers } from '../models';
import { providersRepository } from '../repositories';
export declare class providersController {
    providersRepository: providersRepository;
    constructor(providersRepository: providersRepository);
    create(providers: Omit<providers, 'provider_uuid'>): Promise<providers>;
    count(where?: Where<providers>): Promise<Count>;
    find(filter?: Filter<providers>): Promise<providers[]>;
    updateAll(providers: providers, where?: Where<providers>): Promise<Count>;
    findById(id: string): Promise<providers>;
    updateById(id: string, providers: providers): Promise<void>;
    replaceById(id: string, providers: providers): Promise<void>;
    deleteById(id: string): Promise<void>;
}
