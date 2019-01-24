const database = require('./database');
const { INTEGER } = require('sequelize');
const { Client } = require('../src/index');
const client = new Client(database);
const test = database.define('test', {
    ranNum: INTEGER
});
test.create({
    ranNum: Math.floor(Math.random() * 32)
});
client.on('afterCreate', (test1, test2, test3) => {
    const arr = [test1, test2, test3];
    arr.forEach(input => {
        console.log(input);
    });
});