import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Patients} from '../models';
import {PatientsRepository} from '../repositories';

export class PatientsController {
  constructor(
    @repository(PatientsRepository)
    public PatientsRepository : PatientsRepository,
  ) {}

  @post('/Patients', {
    responses: {
      '200': {
        description: 'Patients model instance',
        content: {'application/json': {schema: getModelSchemaRef(Patients)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patients, {exclude: ['pt_uuid']}),
        },
      },
    })
    Patients: Omit<Patients, 'pt_uuid'>,
  ): Promise<Patients> {
    return this.PatientsRepository.create(Patients);
  }

  @get('/Patients/count', {
    responses: {
      '200': {
        description: 'Patients model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Patients)) where?: Where<Patients>,
  ): Promise<Count> {
    return this.PatientsRepository.count(where);
  }

  @get('/Patients', {
    responses: {
      '200': {
        description: 'Array of Patients model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Patients)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Patients)) filter?: Filter<Patients>,
  ): Promise<Patients[]> {
    return this.PatientsRepository.find(filter);
  }

  @patch('/Patients', {
    responses: {
      '200': {
        description: 'Patients PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patients, {partial: true}),
        },
      },
    })
    Patients: Patients,
    @param.query.object('where', getWhereSchemaFor(Patients)) where?: Where<Patients>,
  ): Promise<Count> {
    return this.PatientsRepository.updateAll(Patients, where);
  }

  @get('/Patients/{id}', {
    responses: {
      '200': {
        description: 'Patients model instance',
        content: {'application/json': {schema: getModelSchemaRef(Patients)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Patients> {
    return this.PatientsRepository.findById(id);
  }

  @patch('/Patients/{id}', {
    responses: {
      '204': {
        description: 'Patients PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patients, {partial: true}),
        },
      },
    })
    Patients: Patients,
  ): Promise<void> {
    await this.PatientsRepository.updateById(id, Patients);
  }

  @put('/Patients/{id}', {
    responses: {
      '204': {
        description: 'Patients PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() Patients: Patients,
  ): Promise<void> {
    await this.PatientsRepository.replaceById(id, Patients);
  }

  @del('/Patients/{id}', {
    responses: {
      '204': {
        description: 'Patients DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.PatientsRepository.deleteById(id);
  }
}
