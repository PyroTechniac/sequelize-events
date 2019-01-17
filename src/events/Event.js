class GenericEvent {
    constructor(client, database) {
        this.client = client;
        this.database = database;
    }
    process(data) {
        return data;
    }
}
module.exports = GenericEvent;