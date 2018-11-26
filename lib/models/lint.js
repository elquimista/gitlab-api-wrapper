
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Lint .
 */
class Lint extends ModelBase {

     /**
     * Create Lint .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Checks if your .gitlab-ci.yml file is valid..

     * @param params {object}
     * @param params.content {string} - the .gitlab-ci.yaml content
     * @returns {*}
     */

    validateTheGitlabCiymlApi(params) {
        return this.http.post(`/lint`, params); // eslint-disable-line quotes
    }

}

module.exports = Lint;

