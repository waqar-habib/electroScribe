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
import {providers} from '../models';
import {providersRepository} from '../repositories';

export class providersController {
  constructor(
    @repository(providersRepository)
    public providersRepository : providersRepository,
  ) {}

  @post('/providers', {
    responses: {
      '200': {
        description: 'providers model instance',
        content: {'application/json': {schema: getModelSchemaRef(providers)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(providers, {exclude: ['provider_uuid']}),
        },
      },
    })
    providers: Omit<providers, 'provider_uuid'>,
  ): Promise<providers> {
    return this.providersRepository.create(providers);
  }

  @get('/providers/count', {
    responses: {
      '200': {
        description: 'providers model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(providers)) where?: Where<providers>,
  ): Promise<Count> {
    return this.providersRepository.count(where);
  }

  @get('/providers', {
    responses: {
      '200': {
        description: 'Array of providers model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(providers)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(providers)) filter?: Filter<providers>,
  ): Promise<providers[]> {
    return this.providersRepository.find(filter);
  }

  @patch('/providers', {
    responses: {
      '200': {
        description: 'providers PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(providers, {partial: true}),
        },
      },
    })
    providers: providers,
    @param.query.object('where', getWhereSchemaFor(providers)) where?: Where<providers>,
  ): Promise<Count> {
    return this.providersRepository.updateAll(providers, where);
  }

  @get('/providers/{id}', {
    responses: {
      '200': {
        description: 'providers model instance',
        content: {'application/json': {schema: getModelSchemaRef(providers)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<providers> {
    return this.providersRepository.findById(id);
  }

  @patch('/providers/{id}', {
    responses: {
      '204': {
        description: 'providers PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(providers, {partial: true}),
        },
      },
    })
    providers: providers,
  ): Promise<void> {
    await this.providersRepository.updateById(id, providers);
  }

  @put('/providers/{id}', {
    responses: {
      '204': {
        description: 'providers PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() providers: providers,
  ): Promise<void> {
    await this.providersRepository.replaceById(id, providers);
  }

  @del('/providers/{id}', {
    responses: {
      '204': {
        description: 'providers DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.providersRepository.deleteById(id);
  }
}
