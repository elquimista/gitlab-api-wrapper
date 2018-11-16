
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Version .
 */
class Version extends ModelBase {

     /**
     * Create Version .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Retrieve version information for this GitLab instance. Responds 200 OK for
authenticated users..

     * @param params {object}
     * @returns {*}
     */

    versionApi(params) {
        return this.http.get(`/version`, params); // eslint-disable-line quotes
    }

}

module.exports = Version;

