module.exports = class AuthError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'AuthError';
    }
};