const Event = require('./Event');
class beforeBulkCreateEvent extends Event {
    handle(instances, options) {
        // This is just filler
    }
}
module.exports = beforeBulkCreateEvent;