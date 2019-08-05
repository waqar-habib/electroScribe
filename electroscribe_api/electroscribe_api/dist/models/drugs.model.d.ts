import { Entity } from '@loopback/repository';
export declare class drugs extends Entity {
    drug_uuid: string;
    drug_name: string;
    condition_name: string;
    icd_10: string;
    constructor(data?: Partial<drugs>);
}
export interface drugsRelations {
}
export declare type drugsWithRelations = drugs & drugsRelations;
