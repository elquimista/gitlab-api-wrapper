
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Environments .
 */
class Environments extends ModelBase {

     /**
     * Create Environments .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get all environments for a given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    environmentsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/environments`, params); // eslint-disable-line quotes
    }

    /**
     * Get all environments for a given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listEnvironments(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/environments`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new environment with the given name and external_url..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the environment
     * @param params.external_url {string} - Place to link to for this environment
     * @returns {*}
     */

    createANewEnvironment(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/environment`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing environment's name and/or external_url..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.environment_id {integer} - The ID of the environment
     * @param params.name {string} - The new name of the environment
     * @param params.external_url {string} - The new external_url
     * @returns {*}
     */

    editAnExistingEnvironment(id, environments_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/environments/${encodeURIComponent(environments_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * It returns 204 if the environment was successfully deleted, and 404 if the environment does not exist..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param environment_id {integer} - The ID of the environment
     * @param params {object}
     * @returns {*}
     */

    deleteAnEnvironment(id, environment_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/environments/${encodeURIComponent(environment_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * It returns 200 if the environment was successfully stopped, and 404 if the environment does not exist..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param environment_id {integer} - The ID of the environment
     * @param params {object}
     * @returns {*}
     */

    stopAnEnvironment(id, environment_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/environments/${encodeURIComponent(environment_id)}/stop`, params); // eslint-disable-line quotes
    }

}

module.exports = Environments;

