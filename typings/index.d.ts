import { type } from 'os';
declare module 'sequelize-events' {
    import { EventEmitter } from 'events'
    export class SequelizeClient extends EventEmitter {
        constructor(database: SequelizeDatabase)
        private static _validateSyncOptions(options: SyncOptions): void
    }



    type SequelizeDatabase = string;
    type SyncOptions = {
        force?: Boolean;
    }
}