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
import {conditions} from '../models';
import {conditionsRepository} from '../repositories';

export class conditionsController {
  constructor(
    @repository(conditionsRepository)
    public conditionsRepository : conditionsRepository,
  ) {}

  @post('/conditions', {
    responses: {
      '200': {
        description: 'conditions model instance',
        content: {'application/json': {schema: getModelSchemaRef(conditions)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(conditions, {exclude: ['icd_10']}),
        },
      },
    })
    conditions: Omit<conditions, 'icd_10'>,
  ): Promise<conditions> {
    return this.conditionsRepository.create(conditions);
  }

  @get('/conditions/count', {
    responses: {
      '200': {
        description: 'conditions model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(conditions)) where?: Where<conditions>,
  ): Promise<Count> {
    return this.conditionsRepository.count(where);
  }

  @get('/conditions', {
    responses: {
      '200': {
        description: 'Array of conditions model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(conditions)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(conditions)) filter?: Filter<conditions>,
  ): Promise<conditions[]> {
    return this.conditionsRepository.find(filter);
  }

  @patch('/conditions', {
    responses: {
      '200': {
        description: 'conditions PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(conditions, {partial: true}),
        },
      },
    })
    conditions: conditions,
    @param.query.object('where', getWhereSchemaFor(conditions)) where?: Where<conditions>,
  ): Promise<Count> {
    return this.conditionsRepository.updateAll(conditions, where);
  }

  @get('/conditions/{id}', {
    responses: {
      '200': {
        description: 'conditions model instance',
        content: {'application/json': {schema: getModelSchemaRef(conditions)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<conditions> {
    return this.conditionsRepository.findById(id);
  }

  @patch('/conditions/{id}', {
    responses: {
      '204': {
        description: 'conditions PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(conditions, {partial: true}),
        },
      },
    })
    conditions: conditions,
  ): Promise<void> {
    await this.conditionsRepository.updateById(id, conditions);
  }

  @put('/conditions/{id}', {
    responses: {
      '204': {
        description: 'conditions PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() conditions: conditions,
  ): Promise<void> {
    await this.conditionsRepository.replaceById(id, conditions);
  }

  @del('/conditions/{id}', {
    responses: {
      '204': {
        description: 'conditions DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.conditionsRepository.deleteById(id);
  }
}
