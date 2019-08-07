import {DefaultCrudRepository} from '@loopback/repository';
import {Providers, ProvidersRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProvidersRepository extends DefaultCrudRepository<
  Providers,
  typeof Providers.prototype.provider_uuid,
  ProvidersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Providers, dataSource);
  }
}
