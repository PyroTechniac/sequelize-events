class EventManager {
    constructor(client, database) {
        this.client = client;
        this.database = database;
        this.register(require('./AfterCreate'));
    }
    register(Event) {
        this[Event.name.replace(/Event$/, '')] = new Event(this.client);
    }
}