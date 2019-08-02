import {DefaultCrudRepository} from '@loopback/repository';
import {providers, providersRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class providersRepository extends DefaultCrudRepository<
  providers,
  typeof providers.prototype.provider_uuid,
  providersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(providers, dataSource);
  }
}
