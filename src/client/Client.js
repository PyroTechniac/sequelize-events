const Sequelize = require('sequelize');
const { EventEmitter } = require('events');
const EventManager = require('../events/EventManager');
/**
 * @extends {EventEmitter}
 * @typedef {Sequelize} SequelizeDatabase
 */
class SequelizeClient extends EventEmitter {
    /**
     * @constructor
     * @type {SequelizeDatabase}
     * @param {SequelizeDatabase} database - Database for the client
     */
    constructor(database) {
        super();
        this.database = database;
        this.events = new EventManager(this, database);
    }
    /**
     * @param {Object} options - options for syncing
     * @type {Object}
     * @returns {Promise<SequelizeDatabase>}
     */
    async sync(options) {
        await this._validateSyncOptions(options);
    }
    /**
     * @type {Function}
     * @param {Object} options
     * @private
     */
    _validateSyncOptions(options) {
        console.log(typeof options);
        if (typeof options !== 'undefined' && typeof options !== 'object') {
            throw new TypeError('sync options must be an object or undefined');
        }
        const isArr = options instanceof Array;
        if (isArr === true) throw new TypeError('sync options must be an object or undefined');
        if (typeof options === 'undefined') return;
    }
}
module.exports = SequelizeClient;