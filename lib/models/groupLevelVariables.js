
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Group Level Variables .
 */
class GroupLevelVariables extends ModelBase {

     /**
     * Create Group Level Variables .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get list of a group's variables..

     * @param id {integer/string} - The ID of a group or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    groupLevelVariablesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/variables`, params); // eslint-disable-line quotes
    }

    /**
     * Get list of a group's variables..

     * @param id {integer/string} - The ID of a group or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listGroupVariables(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/variables`, params); // eslint-disable-line quotes
    }

    /**
     * Get the details of a group's specific variable..

     * @param id {integer/string} - The ID of a group or URL-encoded path of the group owned by the authenticated user
     * @param key {string} - The key of a variable
     * @param params {object}
     * @returns {*}
     */

    showVariableDetails(id, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/variables/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Create a new variable..

     * @param id {integer/string} - The ID of a group or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.key {string} - The key of a variable; must have no more than 255 characters; only A-Z, a-z, 0-9, and _ are allowed
     * @param params.value {string} - The value of a variable
     * @param params.protected {boolean} - Whether the variable is protected
     * @returns {*}
     */

    createVariable(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/variables`, params); // eslint-disable-line quotes
    }

    /**
     * Update a group's variable..

     * @param id {integer/string} - The ID of a group or URL-encoded path of the group owned by the authenticated user
     * @param key {string} - The key of a variable
     * @param params {object}
     * @param params.value {string} - The value of a variable
     * @param params.protected {boolean} - Whether the variable is protected
     * @returns {*}
     */

    updateVariable(id, key, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/variables/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Remove a group's variable..

     * @param id {integer/string} - The ID of a group or URL-encoded path of the group owned by the authenticated user
     * @param key {string} - The key of a variable
     * @param params {object}
     * @returns {*}
     */

    removeVariable(id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/variables/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = GroupLevelVariables;

