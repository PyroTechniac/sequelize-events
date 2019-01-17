class EventManager {
    constructor(client) {
        this.client = client;
        this.database = client.database;
        this.register(require('./BeforeBulkCreate'));
        this.register(require('./BeforeBulkDestroy'));
        this.register(require('./BeforeBulkUpdate'));
        this.register(require('./BeforeValidate'));
        this.register(require('./AfterValidate'));
        this.register(require('./ValidationFailed'));
        this.register(require('./BeforeCreate'));
        this.register(require('./BeforeDestroy'));
        this.register(require('./BeforeUpdate'));
        this.register(require('./BeforeSave'));
        this.register(require('./BeforeUpsert'));
        this.register(require('./AfterCreate'));
        this.register(require('./AfterDestroy'));
        this.register(require('./AfterUpdate'));
        this.register(require('./AfterSave'));
        this.register(require('./AfterUpsert'));
        this.register(require('./AfterBulkCreate'));
        this.register(require('./AfterBulkDestroy'));
        this.register(require('./AfterBulkUpdate'));
    }
    register(Event) {
        const hookName = Event.name.replace(/Event$/, '');
        this[Event.name.replace(/Event$/, '')] = new Event(this.client, this.database);
        this.database.addHook(`${hookName}`, `${Event.name}`, (data) => this.client.emit(`${hookName}`, (data)));
    }
}
module.exports = EventManager;