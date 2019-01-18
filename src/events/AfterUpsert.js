const Event = require('./Event');
class afterUpsertEvent extends Event {
    handle(created, options) {
        // This is just filler
    }
}
module.exports = afterUpsertEvent;