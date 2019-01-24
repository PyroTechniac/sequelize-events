class GenericEvent {
    constructor(client, database, event) {
        this.client = client;
        this.database = database;
        database.addHook(`${event}`, `${event}`, (instance, options, error) => {
            this.handle(this.database, instance, options, error);
        });
    }
}
module.exports = GenericEvent;