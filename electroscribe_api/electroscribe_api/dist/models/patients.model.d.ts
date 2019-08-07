import { Entity } from '@loopback/repository';
export declare class patients extends Entity {
    pt_uuid: string;
    pt_name: string;
    pt_email: string;
    pt_cell: string;
    pt_gender: string;
    pt_dob: string;
    constructor(data?: Partial<patients>);
}
export interface patientsRelations {
}
export declare type patientsWithRelations = patients & patientsRelations;
