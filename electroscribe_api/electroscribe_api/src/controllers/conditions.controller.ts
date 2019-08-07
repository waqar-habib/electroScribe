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
import {Conditions} from '../models';
import {ConditionsRepository} from '../repositories';

export class ConditionsController {
  constructor(
    @repository(ConditionsRepository)
    public ConditionsRepository : ConditionsRepository,
  ) {}

  @post('/Conditions', {
    responses: {
      '200': {
        description: 'Conditions model instance',
        content: {'application/json': {schema: getModelSchemaRef(Conditions)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conditions, {exclude: ['icd_10']}),
        },
      },
    })
    Conditions: Omit<Conditions, 'icd_10'>,
  ): Promise<Conditions> {
    return this.ConditionsRepository.create(Conditions);
  }

  @get('/Conditions/count', {
    responses: {
      '200': {
        description: 'Conditions model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Conditions)) where?: Where<Conditions>,
  ): Promise<Count> {
    return this.ConditionsRepository.count(where);
  }

  @get('/Conditions', {
    responses: {
      '200': {
        description: 'Array of Conditions model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Conditions)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Conditions)) filter?: Filter<Conditions>,
  ): Promise<Conditions[]> {
    return this.ConditionsRepository.find(filter);
  }

  @patch('/Conditions', {
    responses: {
      '200': {
        description: 'Conditions PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conditions, {partial: true}),
        },
      },
    })
    Conditions: Conditions,
    @param.query.object('where', getWhereSchemaFor(Conditions)) where?: Where<Conditions>,
  ): Promise<Count> {
    return this.ConditionsRepository.updateAll(Conditions, where);
  }

  @get('/Conditions/{id}', {
    responses: {
      '200': {
        description: 'Conditions model instance',
        content: {'application/json': {schema: getModelSchemaRef(Conditions)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Conditions> {
    return this.ConditionsRepository.findById(id);
  }

  @patch('/Conditions/{id}', {
    responses: {
      '204': {
        description: 'Conditions PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conditions, {partial: true}),
        },
      },
    })
    Conditions: Conditions,
  ): Promise<void> {
    await this.ConditionsRepository.updateById(id, Conditions);
  }

  @put('/Conditions/{id}', {
    responses: {
      '204': {
        description: 'Conditions PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() Conditions: Conditions,
  ): Promise<void> {
    await this.ConditionsRepository.replaceById(id, Conditions);
  }

  @del('/Conditions/{id}', {
    responses: {
      '204': {
        description: 'Conditions DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ConditionsRepository.deleteById(id);
  }
}
