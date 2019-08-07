import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class conditions extends Entity {
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


  constructor(data?: Partial<conditions>) {
    super(data);
  }
}

export interface conditionsRelations {
  // describe navigational properties here
}

export type conditionsWithRelations = conditions & conditionsRelations;
