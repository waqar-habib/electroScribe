import {DefaultCrudRepository} from '@loopback/repository';
import {drugs, drugsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class drugsRepository extends DefaultCrudRepository<
  drugs,
  typeof drugs.prototype.drug_uuid,
  drugsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(drugs, dataSource);
  }
}
