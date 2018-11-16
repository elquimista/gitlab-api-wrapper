
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Deployments .
 */
class Deployments extends ModelBase {

     /**
     * Create Deployments .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of deployments in a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    deploymentsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/deployments`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of deployments in a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listProjectDeployments(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/deployments`, params); // eslint-disable-line quotes
    }

    /**
     * Example of response.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param deployment_id {integer} - The ID of the deployment
     * @param params {object}
     * @returns {*}
     */

    getASpecificDeployment(id, deployment_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/deployments/${encodeURIComponent(deployment_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Deployments;

