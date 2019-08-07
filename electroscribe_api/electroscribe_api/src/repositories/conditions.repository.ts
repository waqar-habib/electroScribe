import {DefaultCrudRepository} from '@loopback/repository';
import {conditions, conditionsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class conditionsRepository extends DefaultCrudRepository<
  conditions,
  typeof conditions.prototype.icd_10,
  conditionsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(conditions, dataSource);
  }
}
