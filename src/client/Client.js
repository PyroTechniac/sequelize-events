const Sequelize = require('sequelize');
const { EventEmitter } = require('events');
const EventManager = require('../events/EventManager');
/**
 * @extends {EventEmitter}
 */
class SequelizeClient extends EventEmitter {
    /**
     * @param {SequelizeDatabase} database - Database for the client
     * @param {Object} options - Options for the client
     */
    constructor(database) {
        super();
        this.database = database;
        database.authenticate().catch(error => {
            throw new Error(`AuthError: ${error}`);
        });
        database.sync().catch(error => {
            throw new Error(`SyncError: ${error}`);
        });
        this.events = new EventManager(this, database);
    }
}
module.exports = SequelizeClient;