const Sequelize = require('sequelize');
const path = require('path');
const db = new Sequelize('database', '', '', {
    storage: path.join(__dirname, '../database.sqlite'),
    dialect: 'sqlite',
    operatorsAliases: false,
    host: 'localhost',
});
module.exports = db;