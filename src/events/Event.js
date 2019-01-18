class GenericEvent {
    constructor(client, database, eventName) {
        this.client = client;
        this.database = database;
        database.addHook(`${eventName}`, `${eventName}`, (data, options) => this.handle(data, options));
    }
    process(data) {
        return data;
    }
}
module.exports = GenericEvent;