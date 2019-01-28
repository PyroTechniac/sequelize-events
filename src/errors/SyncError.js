module.exports = class SyncError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'SyncError';
    }
};