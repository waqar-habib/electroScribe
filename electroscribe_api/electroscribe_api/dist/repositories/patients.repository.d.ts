import { DefaultCrudRepository } from '@loopback/repository';
import { patients, patientsRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class patientsRepository extends DefaultCrudRepository<patients, typeof patients.prototype.pt_uuid, patientsRelations> {
    constructor(dataSource: MysqlDataSource);
}
