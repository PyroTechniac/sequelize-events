const Event = require('./Event');
class beforeDestroyEvent extends Event {
    handle(instance, options) {
        // This is just filler
    }
}
module.exports = beforeDestroyEvent;