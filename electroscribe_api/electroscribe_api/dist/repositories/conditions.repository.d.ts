import { DefaultCrudRepository } from '@loopback/repository';
import { conditions, conditionsRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class conditionsRepository extends DefaultCrudRepository<conditions, typeof conditions.prototype.icd_10, conditionsRelations> {
    constructor(dataSource: MysqlDataSource);
}
