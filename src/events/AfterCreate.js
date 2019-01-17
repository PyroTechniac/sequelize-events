const { Events } = require('../../util/Constants');
const Event = require('./Event');
class afterCreateEvent extends Event {
    handle(data) {
        const database = this.database;
        const client = this.client;
    }
}
module.exports = afterCreateEvent;