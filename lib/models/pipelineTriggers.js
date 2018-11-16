
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Pipeline Triggers .
 */
class PipelineTriggers extends ModelBase {

     /**
     * Create Pipeline Triggers .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * You can read more about triggering pipelines through the API..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    pipelineTriggersApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/triggers`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of project's build triggers..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listProjectTriggers(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/triggers`, params); // eslint-disable-line quotes
    }

    /**
     * Get details of project's build trigger..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param trigger_id {integer} - The trigger id
     * @param params {object}
     * @returns {*}
     */

    getTriggerDetails(id, trigger_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/triggers/${encodeURIComponent(trigger_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Create a trigger for a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.description {string} - The trigger name
     * @returns {*}
     */

    createAProjectTrigger(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/triggers`, params); // eslint-disable-line quotes
    }

    /**
     * Update a trigger for a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param trigger_id {integer} - The trigger id
     * @param params {object}
     * @param params.description {string} - The trigger name
     * @returns {*}
     */

    updateAProjectTrigger(id, trigger_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/triggers/${encodeURIComponent(trigger_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Update an owner of a project trigger..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param trigger_id {integer} - The trigger id
     * @param params {object}
     * @returns {*}
     */

    takeOwnershipOfAProjectTrigger(id, trigger_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/triggers/${encodeURIComponent(trigger_id)}/take_ownership`, params); // eslint-disable-line quotes
    }

    /**
     * Remove a project's build trigger..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param trigger_id {integer} - The trigger id
     * @param params {object}
     * @returns {*}
     */

    removeAProjectTrigger(id, trigger_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/triggers/${encodeURIComponent(trigger_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = PipelineTriggers;

