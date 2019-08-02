import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class drugs extends Entity {
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


  constructor(data?: Partial<drugs>) {
    super(data);
  }
}

export interface drugsRelations {
  // describe navigational properties here
}

export type drugsWithRelations = drugs & drugsRelations;
