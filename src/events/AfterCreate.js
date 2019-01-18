const Event = require('./Event');
class afterCreateEvent extends Event {
    handle(instance, options) {
        this.client.emit('afterCreate', (instance, options));
    }
}
module.exports = afterCreateEvent;