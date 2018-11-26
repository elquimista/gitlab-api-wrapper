'use strict';

/**
 * Class representing Model Base
 */
class ModelBase {

    /**
     * Create Model Base
     * @param client {object} - Api instance
     */
    constructor(client) {
        this.client = client;
        this._init();
    }

    get DefalutPerPage() { // eslint-disable-line class-methods-use-this
        return 20;
    }

    _init() { // eslint-disable-line consistent-return
        this.http = {
            get: this.client.get.bind(this.client),
            getText: this.client.getText.bind(this.client),
            post: this.client.post.bind(this.client),
            put: this.client.put.bind(this.client),
            delete: this.client.delete.bind(this.client),
        };

        if (this.init) {
            return this.init();
        }
    }
}

module.exports = ModelBase;
