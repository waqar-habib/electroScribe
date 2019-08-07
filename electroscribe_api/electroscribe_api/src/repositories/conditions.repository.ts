import {DefaultCrudRepository} from '@loopback/repository';
import {Conditions, ConditionsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ConditionsRepository extends DefaultCrudRepository<
  Conditions,
  typeof Conditions.prototype.icd_10,
  ConditionsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Conditions, dataSource);
  }
}
