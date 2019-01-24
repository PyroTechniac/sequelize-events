const Event = require('./Event');
class afterBulkCreateEvent extends Event {
    handle(instances, options) {
        this.client.emit('afterBulkCreate', instances, options);
    }
}
module.exports = afterBulkCreateEvent;