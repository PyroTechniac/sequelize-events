const Sequelize = require('sequelize');
const { EventEmitter } = require('events');
class SequelizeClient extends EventEmitter {
    constructor(database) {
        super();
        this.database = database;
    }
}
module.exports = SequelizeClient;