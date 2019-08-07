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
import {Providers} from '../models';
import {ProvidersRepository} from '../repositories';

export class ProvidersController {
  constructor(
    @repository(ProvidersRepository)
    public ProvidersRepository : ProvidersRepository,
  ) {}

  @post('/Providers', {
    responses: {
      '200': {
        description: 'Providers model instance',
        content: {'application/json': {schema: getModelSchemaRef(Providers)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Providers, {exclude: ['provider_uuid']}),
        },
      },
    })
    Providers: Omit<Providers, 'provider_uuid'>,
  ): Promise<Providers> {
    return this.ProvidersRepository.create(Providers);
  }

  @get('/Providers/count', {
    responses: {
      '200': {
        description: 'Providers model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Providers)) where?: Where<Providers>,
  ): Promise<Count> {
    return this.ProvidersRepository.count(where);
  }

  @get('/Providers', {
    responses: {
      '200': {
        description: 'Array of Providers model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Providers)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Providers)) filter?: Filter<Providers>,
  ): Promise<Providers[]> {
    return this.ProvidersRepository.find(filter);
  }

  @patch('/Providers', {
    responses: {
      '200': {
        description: 'Providers PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Providers, {partial: true}),
        },
      },
    })
    Providers: Providers,
    @param.query.object('where', getWhereSchemaFor(Providers)) where?: Where<Providers>,
  ): Promise<Count> {
    return this.ProvidersRepository.updateAll(Providers, where);
  }

  @get('/Providers/{id}', {
    responses: {
      '200': {
        description: 'Providers model instance',
        content: {'application/json': {schema: getModelSchemaRef(Providers)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Providers> {
    return this.ProvidersRepository.findById(id);
  }

  @patch('/Providers/{id}', {
    responses: {
      '204': {
        description: 'Providers PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Providers, {partial: true}),
        },
      },
    })
    Providers: Providers,
  ): Promise<void> {
    await this.ProvidersRepository.updateById(id, Providers);
  }

  @put('/Providers/{id}', {
    responses: {
      '204': {
        description: 'Providers PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() Providers: Providers,
  ): Promise<void> {
    await this.ProvidersRepository.replaceById(id, Providers);
  }

  @del('/Providers/{id}', {
    responses: {
      '204': {
        description: 'Providers DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ProvidersRepository.deleteById(id);
  }
}
