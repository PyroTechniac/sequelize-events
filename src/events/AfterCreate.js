const Event = require('./Event');
class afterCreateEvent extends Event {
    handle(database, instance, options) {
        this.client.emit('afterCreate', (database, instance, options));
    }
}
module.exports = afterCreateEvent;