
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Templates/dockerfiles .
 */
class Templates_dockerfiles extends ModelBase {

     /**
     * Create Templates/dockerfiles .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get all Dockerfile templates..

     * @param params {object}
     * @returns {*}
     */

    dockerfilesApi(params) {
        return this.http.get(`/templates/dockerfiles`, params); // eslint-disable-line quotes
    }

    /**
     * Get all Dockerfile templates..

     * @param params {object}
     * @returns {*}
     */

    listDockerfileTemplates(params) {
        return this.http.get(`/templates/dockerfiles`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single Dockerfile template..

     * @param key {string} - The key of the Dockerfile template
     * @param params {object}
     * @returns {*}
     */

    singleDockerfileTemplate(key, params) { // eslint-disable-line camelcase
        return this.http.get(`/templates/dockerfiles/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Templates_dockerfiles;

