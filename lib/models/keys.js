
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Keys .
 */
class Keys extends ModelBase {

     /**
     * Create Keys .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get SSH key with user by ID of an SSH key. Note only administrators can lookup SSH key with user by ID of an SSH key..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    keysApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/keys/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get SSH key with user by ID of an SSH key. Note only administrators can lookup SSH key with user by ID of an SSH key..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSshKeyWithUserByIdOfAnSshKey(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/keys/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Keys;

