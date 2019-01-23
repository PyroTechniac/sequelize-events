const Event = require('./Event');
class beforeCreateEvent extends Event {
    handle(instance, options) {
        this.client.emit('beforeCreate', (instance, options));
    }
}
module.exports = beforeCreateEvent;