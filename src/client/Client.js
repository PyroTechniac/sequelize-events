const Sequelize = require('sequelize');
const { EventEmitter } = require('events');
const EventManager = require('../events/EventManager');
const AuthError = require('../errors/AuthError');
const SyncError = require('../errors/SyncError');
/**
 * @extends {EventEmitter}
 * @typedef {Sequelize} SequelizeDatabase
 * @typedef {Object} Object
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
        const ops = await this._validateSyncOptions(options);
    }
    /**
     * @type {Object}
     * @param {Object} options
     * @private
     */
    _validateSyncOptions(options) {
        if (options === undefined) return;
        if (typeof options !== 'object' || options instanceof Array) {
            throw new SyncError('Sync options must be an object');
        }
        if (typeof options.force !== 'boolean' && typeof options.force !== 'undefined') {
            throw new SyncError('Force must be boolean');
        }
        if (!(options.match instanceof RegExp) && typeof options.match !== 'undefined') {
            throw new SyncError('Match must be a RegExp');
        }
        if (typeof options.logging !== 'function' && typeof options.logging !== 'boolean' && typeof options.logging !== 'undefined') {
            throw new SyncError('Logging must be a function or boolean');
        }
        if (typeof options.schema !== 'string' && typeof options.schema !== 'undefined') {
            throw new SyncError('Schema must be a string');
        }
        if (typeof options.searchPath !== 'string' && typeof options.schema !== 'undefined') {
            throw new SyncError('Search Path must be a string');
        }
        if (typeof options.hooks !== 'undefined') {
            throw new SyncError('Hooks cannot be modified');
        }
        if (typeof options.alter !== 'boolean' && typeof options.alter !== 'undefined') {
            throw new SyncError('Alter must be boolean');
        }
        if (options.force === undefined) {
            options.force = false;
        }
        return options;
    }
}
module.exports = SequelizeClient;