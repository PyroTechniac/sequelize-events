const Sequelize = require('sequelize');
const path = require('path');
const { Events } = require('../util/Constants');
const db = new Sequelize('database', '', '', {
    storage: path.join(__dirname, '../database.sqlite'),
    dialect: 'sqlite',
    operatorsAliases: false,
    host: 'localhost',
    logging: false,
});
const test = db.define('test', {
    test: Sequelize.STRING,
});
module.exports = {
    db: db,
    test: test,
};