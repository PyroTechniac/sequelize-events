const Event = require('./Event');
class afterCreateEvent extends Event {
    handle(instance, options) {
        this.client.emit('afterCreate', instance.dataValues, options);
    }
}
module.exports = afterCreateEvent;