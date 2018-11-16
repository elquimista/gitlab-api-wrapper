
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing System Hooks .
 */
class SystemHooks extends ModelBase {

     /**
     * Create System Hooks .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * All methods require administrator authorization..

     * @param params {object}
     * @returns {*}
     */

    systemHooksApi(params) {
        return this.http.get(`/hooks`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of all system hooks..

     * @param params {object}
     * @returns {*}
     */

    listSystemHooks(params) {
        return this.http.get(`/hooks`, params); // eslint-disable-line quotes
    }

    /**
     * Add a new system hook..

     * @param params {object}
     * @param params.url {string} - The hook URL
     * @param params.token {string} - Secret token to validate received payloads; this will not be returned in the response
     * @param params.push_events {boolean} - When true, the hook will fire on push events
     * @param params.tag_push_events {boolean} - When true, the hook will fire on new tags being pushed
     * @param params.enable_ssl_verification {boolean} - Do SSL verification when triggering the hook
     * @returns {*}
     */

    addNewSystemHook(params) {
        return this.http.post(`/hooks`, params); // eslint-disable-line quotes
    }

    /**
     * Example request:.

     * @param id {integer} - The ID of the hook
     * @param params {object}
     * @returns {*}
     */

    testSystemHook(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/hooks/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a system hook..

     * @param id {integer} - The ID of the hook
     * @param params {object}
     * @returns {*}
     */

    deleteSystemHook(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/hooks/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = SystemHooks;

