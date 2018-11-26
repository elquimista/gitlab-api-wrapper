
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Templates/gitignores .
 */
class Templates_gitignores extends ModelBase {

     /**
     * Create Templates/gitignores .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get all gitignore templates..

     * @param params {object}
     * @returns {*}
     */

    gitignoresApi(params) {
        return this.http.get(`/templates/gitignores`, params); // eslint-disable-line quotes
    }

    /**
     * Get all gitignore templates..

     * @param params {object}
     * @returns {*}
     */

    listGitignoreTemplates(params) {
        return this.http.get(`/templates/gitignores`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single gitignore template..

     * @param key {string} - The key of the gitignore template
     * @param params {object}
     * @returns {*}
     */

    singleGitignoreTemplate(key, params) { // eslint-disable-line camelcase
        return this.http.get(`/templates/gitignores/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Templates_gitignores;

