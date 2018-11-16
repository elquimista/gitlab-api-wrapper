
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Templates/licenses .
 */
class Templates_licenses extends ModelBase {

     /**
     * Create Templates/licenses .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get all license templates..

     * @param params {object}
     * @param params.popular {boolean} - If passed, returns only popular licenses
     * @returns {*}
     */

    licensesApi(params) {
        return this.http.get(`/templates/licenses`, params); // eslint-disable-line quotes
    }

    /**
     * Get all license templates..

     * @param params {object}
     * @param params.popular {boolean} - If passed, returns only popular licenses
     * @returns {*}
     */

    listLicenseTemplates(params) {
        return this.http.get(`/templates/licenses`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single license template. You can pass parameters to replace the license
placeholder..

     * @param key {string} - The key of the license template
     * @param params {object}
     * @param params.project {string} - The copyrighted project name
     * @param params.fullname {string} - The full-name of the copyright holder
     * @returns {*}
     */

    singleLicenseTemplate(key, params) { // eslint-disable-line camelcase
        return this.http.get(`/templates/licenses/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Templates_licenses;

