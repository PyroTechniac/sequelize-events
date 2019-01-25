import { type } from 'os';
declare module 'sequelize-events' {
    import { EventEmitter } from 'events'
    export class SequelizeClient extends EventEmitter {
        constructor(database: SequelizeDatabase)
    }



    type SequelizeDatabase = string;
    type SyncOptions = {
        force?: Boolean;
    }
}