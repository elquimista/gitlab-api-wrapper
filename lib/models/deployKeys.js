
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Deploy Keys .
 */
class DeployKeys extends ModelBase {

     /**
     * Create Deploy Keys .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of all deploy keys across all projects of the GitLab instance. This endpoint requires admin access..

     * @param params {object}
     * @returns {*}
     */

    deployKeysApi(params) {
        return this.http.get(`/deploy_keys`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of all deploy keys across all projects of the GitLab instance. This endpoint requires admin access..

     * @param params {object}
     * @returns {*}
     */

    listAllDeployKeys(params) {
        return this.http.get(`/deploy_keys`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of a project's deploy keys..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listProjectDeployKeys(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/deploy_keys`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single key..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param key_id {integer} - The ID of the deploy key
     * @param params {object}
     * @returns {*}
     */

    singleDeployKey(id, key_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/deploy_keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new deploy key for a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.title {string} - New deploy key's title
     * @param params.key {string} - New deploy key
     * @param params.can_push {boolean} - Can deploy key push to the project's repository
     * @returns {*}
     */

    addDeployKey(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/deploy_keys`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a deploy key from the project. If the deploy key is used only for this project, it will be deleted from the system..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param key_id {integer} - The ID of the deploy key
     * @param params {object}
     * @returns {*}
     */

    deleteDeployKey(id, key_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/deploy_keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Enables a deploy key for a project so this can be used. Returns the enabled key, with a status code 201 when successful..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param key_id {integer} - The ID of the deploy key
     * @param params {object}
     * @returns {*}
     */

    enableADeployKey(id, key_id, params) { // eslint-disable-line camelcase
        return this.http.post(`https://gitlab.example.com/api/v4/projects/${encodeURIComponent(id)}/deploy_keys/${encodeURIComponent(key_id)}/enable`, params); // eslint-disable-line quotes
    }

}

module.exports = DeployKeys;

