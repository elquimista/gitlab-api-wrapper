
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing License .
 */
class License extends ModelBase {

     /**
     * Create License .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * In order to interact with license endpoints, you need to authenticate yourself
as an admin..

     * @param params {object}
     * @param params.license {string} - The license string
     * @returns {*}
     */

    license(params) {
        return this.http.get(`/license`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @param params.license {string} - The license string
     * @returns {*}
     */

    retrieveInformationAboutTheCurrentLicense(params) {
        return this.http.get(`/license`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @param params.license {string} - The license string
     * @returns {*}
     */

    addANewLicense(params) {
        return this.http.post(`/license`, params); // eslint-disable-line quotes
    }

}

module.exports = License;

