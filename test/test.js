const Sequelize = require('sequelize');
const { Client } = require('../src/index');
const { join } = require('path');
const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    logging: false,
    operatorsAliases: false,
    storage: join(__dirname, '../database.sqlite'),
    host: 'localhost'
});
const client = new Client(db);
client.sync();
const test = db.define('test', {
    ranNum: Sequelize.INTEGER
});
test.create({
    ranNum: Math.floor(Math.random() * 32)
});