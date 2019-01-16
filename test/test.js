const Sequelize = require('sequelize');
const { Client } = require('../src/index');
const db = require('./database');
const client = new Client(db);
client.authenticate();
client.sync();
