import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Conditions extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  icd_10: string;

  @property({
    type: 'string',
    required: true,
  })
  condition_name: string;


  constructor(data?: Partial<Conditions>) {
    super(data);
  }
}

export interface ConditionsRelations {
  // describe navigational properties here
}

export type ConditionsWithRelations = Conditions & ConditionsRelations;
