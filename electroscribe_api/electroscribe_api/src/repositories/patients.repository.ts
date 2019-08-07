import {DefaultCrudRepository} from '@loopback/repository';
import {Patients, PatientsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PatientsRepository extends DefaultCrudRepository<
  Patients,
  typeof Patients.prototype.pt_uuid,
  PatientsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Patients, dataSource);
  }
}
