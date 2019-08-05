import { Entity } from '@loopback/repository';
export declare class conditions extends Entity {
    icd_10: string;
    condition_name: string;
    constructor(data?: Partial<conditions>);
}
export interface conditionsRelations {
}
export declare type conditionsWithRelations = conditions & conditionsRelations;
