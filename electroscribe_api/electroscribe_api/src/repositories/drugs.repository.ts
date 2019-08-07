import {DefaultCrudRepository} from '@loopback/repository';
import {Drugs, DrugsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DrugsRepository extends DefaultCrudRepository<
  Drugs,
  typeof Drugs.prototype.drug_uuid,
  DrugsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Drugs, dataSource);
  }
}
