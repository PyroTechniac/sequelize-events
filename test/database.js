const { Sequelize, STRING } = require('sequelize');
const { join } = require('path');
const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: join(__dirname, '../database.sqlite'),
    operatorsAliases: false,
    logging: false,
    host: 'localhost'
});
module.exports = db;