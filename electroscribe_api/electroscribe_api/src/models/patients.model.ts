import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Patients extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  pt_uuid: string;

  @property({
    type: 'string',
    required: true,
  })
  pt_name: string;

  @property({
    type: 'string',
    required: true,
  })
  pt_email: string;

  @property({
    type: 'string',
    required: true,
  })
  pt_cell: string;

  @property({
    type: 'string',
    required: true,
  })
  pt_gender: string;

  @property({
    type: 'date',
    required: true,
  })
  pt_dob: string;


  constructor(data?: Partial<Patients>) {
    super(data);
  }
}

export interface PatientsRelations {
  // describe navigational properties here
}

export type PatientsWithRelations = Patients & PatientsRelations;
