import { Entity } from '@loopback/repository';
export declare class providers extends Entity {
    provider_uuid: string;
    provider_name: string;
    provider_email: string;
    provider_speciality: string;
    constructor(data?: Partial<providers>);
}
export interface providersRelations {
}
export declare type providersWithRelations = providers & providersRelations;
