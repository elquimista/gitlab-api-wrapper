
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Namespaces .
 */
class Namespaces extends ModelBase {

     /**
     * Create Namespaces .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Usernames and groupnames fall under a special category called namespaces..

     * @param params {object}
     * @returns {*}
     */

    namespacesApi(params) {
        return this.http.get(`/namespaces`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of the namespaces of the authenticated user. If the user is an
administrator, a list of all namespaces in the GitLab instance is shown..

     * @param params {object}
     * @returns {*}
     */

    listNamespaces(params) {
        return this.http.get(`/namespaces`, params); // eslint-disable-line quotes
    }

    /**
     * Get all namespaces that match a string in their name or path..

     * @param params {object}
     * @param params.search {string} - Returns a list of namespaces the user is authorized to see based on the search criteria
     * @returns {*}
     */

    searchForNamespace(params) {
        return this.http.get(`/namespaces?search=foobar`, params); // eslint-disable-line quotes
    }

}

module.exports = Namespaces;

