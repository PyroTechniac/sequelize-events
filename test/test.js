const Sequelize = require('sequelize');
const { Client } = require('../src/index');
const { test, db } = require('./database');
const client = new Client(db);
client.authenticate();
client.sync();
db.addHook('afterCreate', 'testEvent', (instance, options) => {
    client.emit('afterCreate', (instance, options));
});
test.create({
    test: 'Testing things 2',
});
client.on('afterCreate', (instance, options) => {
    console.log(instance);
    console.log(options);
});