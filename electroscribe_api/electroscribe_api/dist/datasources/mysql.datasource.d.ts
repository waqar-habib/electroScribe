import { juggler } from '@loopback/repository';
export declare class MysqlDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
