import {DefaultCrudRepository} from '@loopback/repository';
import {patients, patientsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class patientsRepository extends DefaultCrudRepository<
  patients,
  typeof patients.prototype.pt_uuid,
  patientsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(patients, dataSource);
  }
}
