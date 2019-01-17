const Sequelize = require('sequelize');
const { Events } = require('../../util/Constants');
const { EventEmitter } = require('events');
/**
 * @extends {EventEmitter}
 */
class SequelizeClient extends EventEmitter {
    /**
     * @param {SQLDatabase} database - Database for the client
     */
    constructor(database) {
        super();
        this.database = database;
    }
    async sync(database = this.database) {
        await database.sync();
        return database;
    }
    async authenticate(database = this.database) {
        await database.authenticate();
        return database;
    }
    /**
     * @param {String} name The name of the model
     */
    async define(name, options) {
        console.log(options);
    }
}
module.exports = SequelizeClient;