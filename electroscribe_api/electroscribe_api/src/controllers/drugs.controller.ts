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
import {Drugs} from '../models';
import {DrugsRepository} from '../repositories';

export class DrugsController {
  constructor(
    @repository(DrugsRepository)
    public DrugsRepository : DrugsRepository,
  ) {}

  @post('/Drugs', {
    responses: {
      '200': {
        description: 'Drugs model instance',
        content: {'application/json': {schema: getModelSchemaRef(Drugs)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Drugs, {exclude: ['drug_uuid']}),
        },
      },
    })
    Drugs: Omit<Drugs, 'drug_uuid'>,
  ): Promise<Drugs> {
    return this.DrugsRepository.create(Drugs);
  }

  @get('/Drugs/count', {
    responses: {
      '200': {
        description: 'Drugs model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Drugs)) where?: Where<Drugs>,
  ): Promise<Count> {
    return this.DrugsRepository.count(where);
  }

  @get('/Drugs', {
    responses: {
      '200': {
        description: 'Array of Drugs model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Drugs)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Drugs)) filter?: Filter<Drugs>,
  ): Promise<Drugs[]> {
    return this.DrugsRepository.find(filter);
  }

  @patch('/Drugs', {
    responses: {
      '200': {
        description: 'Drugs PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Drugs, {partial: true}),
        },
      },
    })
    Drugs: Drugs,
    @param.query.object('where', getWhereSchemaFor(Drugs)) where?: Where<Drugs>,
  ): Promise<Count> {
    return this.DrugsRepository.updateAll(Drugs, where);
  }

  @get('/Drugs/{id}', {
    responses: {
      '200': {
        description: 'Drugs model instance',
        content: {'application/json': {schema: getModelSchemaRef(Drugs)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Drugs> {
    return this.DrugsRepository.findById(id);
  }

  @patch('/Drugs/{id}', {
    responses: {
      '204': {
        description: 'Drugs PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Drugs, {partial: true}),
        },
      },
    })
    Drugs: Drugs,
  ): Promise<void> {
    await this.DrugsRepository.updateById(id, Drugs);
  }

  @put('/Drugs/{id}', {
    responses: {
      '204': {
        description: 'Drugs PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() Drugs: Drugs,
  ): Promise<void> {
    await this.DrugsRepository.replaceById(id, Drugs);
  }

  @del('/Drugs/{id}', {
    responses: {
      '204': {
        description: 'Drugs DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.DrugsRepository.deleteById(id);
  }
}
