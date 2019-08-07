import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Drugs extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  drug_uuid: string;

  @property({
    type: 'string',
    required: true,
  })
  drug_name: string;

  @property({
    type: 'string',
    required: true,
  })
  condition_name: string;

  @property({
    type: 'string',
    required: true,
  })
  icd_10: string;


  constructor(data?: Partial<Drugs>) {
    super(data);
  }
}

export interface DrugsRelations {
  // describe navigational properties here
}

export type DrugsWithRelations = Drugs & DrugsRelations;
