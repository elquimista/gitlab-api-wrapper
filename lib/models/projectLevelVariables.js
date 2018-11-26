
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Project Level Variables .
 */
class ProjectLevelVariables extends ModelBase {

     /**
     * Create Project Level Variables .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get list of a project’s variables..

     * @param id {integer/string} - The ID of a project or urlencoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    projectLevelVariablesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/variables`, params); // eslint-disable-line quotes
    }

    /**
     * Get list of a project’s variables..

     * @param id {integer/string} - The ID of a project or urlencoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listProjectVariables(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/variables`, params); // eslint-disable-line quotes
    }

    /**
     * Get the details of a project’s specific variable..

     * @param id {integer/string} - The ID of a project or urlencoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user
     * @param key {string} - The key of a variable
     * @param params {object}
     * @returns {*}
     */

    showVariableDetails(id, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/variables/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Create a new variable..

     * @param id {integer/string} - The ID of a project or urlencoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user
     * @param params {object}
     * @param params.key {string} - The key of a variable; must have no more than 255 characters; only A-Z, a-z, 0-9, and _ are allowed
     * @param params.value {string} - The value of a variable
     * @param params.protected {boolean} - Whether the variable is protected
     * @param params.environment_scope {string} - The environment_scope of the variable
     * @returns {*}
     */

    createVariable(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/variables`, params); // eslint-disable-line quotes
    }

    /**
     * Update a project’s variable..

     * @param id {integer/string} - The ID of a project or urlencoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user
     * @param key {string} - The key of a variable
     * @param params {object}
     * @param params.value {string} - The value of a variable
     * @param params.protected {boolean} - Whether the variable is protected
     * @param params.environment_scope {string} - The environment_scope of the variable
     * @returns {*}
     */

    updateVariable(id, key, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/variables/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Remove a project’s variable..

     * @param id {integer/string} - The ID of a project or urlencoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user
     * @param key {string} - The key of a variable
     * @param params {object}
     * @returns {*}
     */

    removeVariable(id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/variables/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = ProjectLevelVariables;

