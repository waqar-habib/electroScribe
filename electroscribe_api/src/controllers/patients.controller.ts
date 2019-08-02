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
import {patients} from '../models';
import {patientsRepository} from '../repositories';

export class patientsController {
  constructor(
    @repository(patientsRepository)
    public patientsRepository : patientsRepository,
  ) {}

  @post('/patients', {
    responses: {
      '200': {
        description: 'patients model instance',
        content: {'application/json': {schema: getModelSchemaRef(patients)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(patients, {exclude: ['pt_uuid']}),
        },
      },
    })
    patients: Omit<patients, 'pt_uuid'>,
  ): Promise<patients> {
    return this.patientsRepository.create(patients);
  }

  @get('/patients/count', {
    responses: {
      '200': {
        description: 'patients model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(patients)) where?: Where<patients>,
  ): Promise<Count> {
    return this.patientsRepository.count(where);
  }

  @get('/patients', {
    responses: {
      '200': {
        description: 'Array of patients model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(patients)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(patients)) filter?: Filter<patients>,
  ): Promise<patients[]> {
    return this.patientsRepository.find(filter);
  }

  @patch('/patients', {
    responses: {
      '200': {
        description: 'patients PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(patients, {partial: true}),
        },
      },
    })
    patients: patients,
    @param.query.object('where', getWhereSchemaFor(patients)) where?: Where<patients>,
  ): Promise<Count> {
    return this.patientsRepository.updateAll(patients, where);
  }

  @get('/patients/{id}', {
    responses: {
      '200': {
        description: 'patients model instance',
        content: {'application/json': {schema: getModelSchemaRef(patients)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<patients> {
    return this.patientsRepository.findById(id);
  }

  @patch('/patients/{id}', {
    responses: {
      '204': {
        description: 'patients PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(patients, {partial: true}),
        },
      },
    })
    patients: patients,
  ): Promise<void> {
    await this.patientsRepository.updateById(id, patients);
  }

  @put('/patients/{id}', {
    responses: {
      '204': {
        description: 'patients PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() patients: patients,
  ): Promise<void> {
    await this.patientsRepository.replaceById(id, patients);
  }

  @del('/patients/{id}', {
    responses: {
      '204': {
        description: 'patients DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.patientsRepository.deleteById(id);
  }
}
