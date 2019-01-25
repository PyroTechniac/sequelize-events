import { type } from 'os';
import { Database } from 'sqlite';

declare module 'sequelize-events' {
    import { EventEmitter } from 'events'
    export class Client extends EventEmitter {
        constructor(database: SequelizeDatabase);
        private _validateSyncOptions(options?: SyncOptions): void;

        public sync(options?: SyncOptions): Promise<SequelizeDatabase>
    }





    export type SyncOptions = {
        force?: boolean;
        match?: RegExp;
        logging?: boolean | Function;
        schema?: string;
        searchPath?: string;
        hooks?: boolean;
        alter?: boolean;
    };
    export type SequelizeDatabase = Database
}