import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Providers extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  provider_uuid: string;

  @property({
    type: 'string',
    required: true,
  })
  provider_name: string;

  @property({
    type: 'string',
    required: true,
  })
  provider_email: string;

  @property({
    type: 'string',
    required: true,
  })
  provider_speciality: string;


  constructor(data?: Partial<Providers>) {
    super(data);
  }
}

export interface ProvidersRelations {
  // describe navigational properties here
}

export type ProvidersWithRelations = Providers & ProvidersRelations;
