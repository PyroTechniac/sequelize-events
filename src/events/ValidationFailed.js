const Event = require('./Event');
class validationFailedEvent extends Event {
    handle(instance, options, error) {
        // This is just filler
    }
}
module.exports = validationFailedEvent;