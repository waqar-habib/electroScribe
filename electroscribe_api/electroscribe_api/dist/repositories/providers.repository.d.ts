import { DefaultCrudRepository } from '@loopback/repository';
import { providers, providersRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class providersRepository extends DefaultCrudRepository<providers, typeof providers.prototype.provider_uuid, providersRelations> {
    constructor(dataSource: MysqlDataSource);
}
