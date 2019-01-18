const Event = require('./Event');
class afterDestroyEvent extends Event {
    handle(instance, options) {
        // This is just filler
    }
}
module.exports = afterDestroyEvent;