import { DefaultCrudRepository } from '@loopback/repository';
import { drugs, drugsRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class drugsRepository extends DefaultCrudRepository<drugs, typeof drugs.prototype.drug_uuid, drugsRelations> {
    constructor(dataSource: MysqlDataSource);
}
