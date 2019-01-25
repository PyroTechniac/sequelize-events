declare module 'sequelize-events' {
    import { EventEmitter } from 'events'
    export class Client extends EventEmitter {
        constructor(database: SequelizeDatabase)
    }
}