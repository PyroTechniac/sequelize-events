const { Events } = require('../../util/Constants');
class EventManager {
    constructor(client, database) {
        this.database = database;
        this.client = client;
        this.register(require('./AfterCreate'));
    }
    register(Event) {
        this[Event.name.replace(/Event$/, '')] = new Event(this.client, this.database);
        console.log(Event.name.replace(/Event$/, ''));
    }
}
module.exports = EventManager;