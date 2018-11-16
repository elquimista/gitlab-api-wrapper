
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Runners .
 */
class Runners extends ModelBase {

     /**
     * Create Runners .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of specific runners available to the user..

     * @param params {object}
     * @param params.scope {string} - The scope of specific runners to show, one of: active, paused, online; showing all runners if none provided
     * @returns {*}
     */

    listOwnedRunners(params) {
        return this.http.get(`/runners`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of all runners in the GitLab instance (specific and shared). Access
is restricted to users with admin privileges..

     * @param params {object}
     * @param params.scope {string} - The scope of runners to show, one of: specific, shared, active, paused, online; showing all runners if none provided
     * @returns {*}
     */

    listAllRunners(params) {
        return this.http.get(`/runners/all`, params); // eslint-disable-line quotes
    }

    /**
     * Get details of a runner..

     * @param id {integer} - The ID of a runner
     * @param params {object}
     * @returns {*}
     */

    getRunnerDetails(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/runners/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Update details of a runner..

     * @param id {integer} - The ID of a runner
     * @param params {object}
     * @param params.description {string} - The description of a runner
     * @param params.active {boolean} - The state of a runner; can be set to true or false

     * @param params.tag_list {array} - The list of tags for a runner; put array of tags, that should be finally assigned to a runner
     * @param params.run_untagged {boolean} - Flag indicating the runner can execute untagged jobs
     * @param params.locked {boolean} - Flag indicating the runner is locked
     * @param params.access_level {string} - The access_level of the runner; not_protected or ref_protected

     * @returns {*}
     */

    updateRunnerDetails(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/runners/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Remove a runner..

     * @param id {integer} - The ID of a runner
     * @param params {object}
     * @returns {*}
     */

    removeARunner(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/runners/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * List all runners (specific and shared) available in the project. Shared runners
are listed if at least one shared runner is defined and shared runners
usage is enabled in the project's settings..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listProjectRunners(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/runners`, params); // eslint-disable-line quotes
    }

    /**
     * Enable an available specific runner in the project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.runner_id {integer} - The ID of a runner
     * @returns {*}
     */

    enableARunnerInProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/runners`, params); // eslint-disable-line quotes
    }

    /**
     * Disable a specific runner from the project. It works only if the project isn't
the only project associated with the specified runner. If so, an error is
returned. Use the Remove a runner call instead..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param runner_id {integer} - The ID of a runner
     * @param params {object}
     * @returns {*}
     */

    disableARunnerFromProject(id, runner_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/runners/${encodeURIComponent(runner_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Runners;

