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
client.database.sync({ force: true });
const test = db.define('test', {
    ranNum: Sequelize.INTEGER
});
test.create({
    ranNum: Math.floor(Math.random() * 32)
});
client.on('afterCreate', (test1, test2) => {
    console.log(test1);
    console.log(test2);
});
client.on('beforeCreate', (test3, test4) => {
    console.log(test3);
    console.log(test4);
});