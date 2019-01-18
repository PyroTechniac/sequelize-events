const Event = require('./Event');
class afterBulkCreateEvent extends Event {
    handle(instances, options) {
        // This is just filler
    }
}
module.exports = afterBulkCreateEvent;