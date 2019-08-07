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
import {drugs} from '../models';
import {drugsRepository} from '../repositories';

export class drugsController {
  constructor(
    @repository(drugsRepository)
    public drugsRepository : drugsRepository,
  ) {}

  @post('/drugs', {
    responses: {
      '200': {
        description: 'drugs model instance',
        content: {'application/json': {schema: getModelSchemaRef(drugs)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(drugs, {exclude: ['drug_uuid']}),
        },
      },
    })
    drugs: Omit<drugs, 'drug_uuid'>,
  ): Promise<drugs> {
    return this.drugsRepository.create(drugs);
  }

  @get('/drugs/count', {
    responses: {
      '200': {
        description: 'drugs model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(drugs)) where?: Where<drugs>,
  ): Promise<Count> {
    return this.drugsRepository.count(where);
  }

  @get('/drugs', {
    responses: {
      '200': {
        description: 'Array of drugs model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(drugs)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(drugs)) filter?: Filter<drugs>,
  ): Promise<drugs[]> {
    return this.drugsRepository.find(filter);
  }

  @patch('/drugs', {
    responses: {
      '200': {
        description: 'drugs PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(drugs, {partial: true}),
        },
      },
    })
    drugs: drugs,
    @param.query.object('where', getWhereSchemaFor(drugs)) where?: Where<drugs>,
  ): Promise<Count> {
    return this.drugsRepository.updateAll(drugs, where);
  }

  @get('/drugs/{id}', {
    responses: {
      '200': {
        description: 'drugs model instance',
        content: {'application/json': {schema: getModelSchemaRef(drugs)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<drugs> {
    return this.drugsRepository.findById(id);
  }

  @patch('/drugs/{id}', {
    responses: {
      '204': {
        description: 'drugs PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(drugs, {partial: true}),
        },
      },
    })
    drugs: drugs,
  ): Promise<void> {
    await this.drugsRepository.updateById(id, drugs);
  }

  @put('/drugs/{id}', {
    responses: {
      '204': {
        description: 'drugs PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() drugs: drugs,
  ): Promise<void> {
    await this.drugsRepository.replaceById(id, drugs);
  }

  @del('/drugs/{id}', {
    responses: {
      '204': {
        description: 'drugs DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.drugsRepository.deleteById(id);
  }
}
