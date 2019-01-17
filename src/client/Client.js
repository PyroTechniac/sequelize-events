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
        this.events = new EventManager(this, database);
    }
    async _validateOptions(options = this.options) {
        if (!(typeof options === 'object' || typeof options === 'undefined')) {
            throw new TypeError('Client options must be an object');
        }
        if (!(typeof options.force === 'boolean' || typeof options.force === 'undefined')) {
            throw new TypeError('Force must be boolean');
        }
        return options;
    }
}
module.exports = SequelizeClient;