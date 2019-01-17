const Sequelize = require('sequelize');
const { EventEmitter } = require('events');
const EventManager = require('../events/EventManager');
/**
 * @extends {EventEmitter}
 */
class SequelizeClient extends EventEmitter {
    /**
     * @param {SequelizeDatabase} database - Database for the client
     */
    constructor(database) {
        super();
        this.database = database;
        database.authenticate().catch(error => console.error('[AUTHENTICATING] The client had an error authenticating with the database\n', error));
        database.sync().catch(error => console.error('[SYNCING] The client has an error syncing the database\n', error));
        this.events = new EventManager(this, database);
    }
}
module.exports = SequelizeClient;