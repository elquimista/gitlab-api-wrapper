
'use strict';

/*eslint-disable */
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
     * @param params.scope {string} - Deprecated: Use type or status instead. The scope of specific runners to show, one of: active, paused, online, offline; showing all runners if none provided
     * @param params.type {string} - The type of runners to show, one of: instance_type, group_type, project_type

     * @param params.status {string} - The status of runners to show, one of: active, paused, online, offline

     * @returns {*}
     */

    runnersApi(params) {
        return this.http.get(`/runners`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of specific runners available to the user..

     * @param params {object}
     * @param params.scope {string} - Deprecated: Use type or status instead. The scope of specific runners to show, one of: active, paused, online, offline; showing all runners if none provided
     * @param params.type {string} - The type of runners to show, one of: instance_type, group_type, project_type

     * @param params.status {string} - The status of runners to show, one of: active, paused, online, offline

     * @returns {*}
     */

    listOwnedRunners(params) {
        return this.http.get(`/runners`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of all runners in the GitLab instance (specific and shared). Access
is restricted to users with admin privileges..

     * @param params {object}
     * @param params.scope {string} - Deprecated: Use type or status instead. The scope of runners to show, one of: specific, shared, active, paused, online, offline; showing all runners if none provided
     * @param params.type {string} - The type of runners to show, one of: instance_type, group_type, project_type

     * @param params.status {string} - The status of runners to show, one of: active, paused, online, offline

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

    getRunnersDetails(id, params) { // eslint-disable-line camelcase
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

     * @param params.maximum_timeout {integer} - Maximum timeout set when this Runner will handle the job
     * @returns {*}
     */

    updateRunnersDetails(id, params) { // eslint-disable-line camelcase
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
     * List jobs that are being processed or were processed by specified Runner..

     * @param id {integer} - The ID of a runner
     * @param params {object}
     * @param params.status {string} - Status of the job; one of: running, success, failed, canceled

     * @returns {*}
     */

    listRunnersJobs(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/runners/${encodeURIComponent(id)}/jobs`, params); // eslint-disable-line quotes
    }

    /**
     * List all runners (specific and shared) available in the project. Shared runners
are listed if at least one shared runner is defined..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.scope {string} - Deprecated: Use type or status instead. The scope of specific runners to show, one of: active, paused, online, offline; showing all runners if none provided
     * @param params.type {string} - The type of runners to show, one of: instance_type, group_type, project_type

     * @param params.status {string} - The status of runners to show, one of: active, paused, online, offline

     * @returns {*}
     */

    listProjectsRunners(id, params) { // eslint-disable-line camelcase
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
     * Disable a specific runner from the project. It works only if the project isn’t
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

    /**
     * Register a new Runner for the instance..

     * @param params {object}
     * @param params.token {string} - Registration token (Read how to obtain a token)
     * @param params.description {string} - Runner’s description
     * @param params.info {hash} - Runner’s metadata
     * @param params.active {boolean} - Whether the Runner is active
     * @param params.locked {boolean} - Whether the Runner should be locked for current project
     * @param params.run_untagged {boolean} - Whether the Runner should handle untagged jobs
     * @param params.tag_list {Array[String]} - List of Runner’s tags
     * @param params.maximum_timeout {integer} - Maximum timeout set when this Runner will handle the job
     * @returns {*}
     */

    registerANewRunner(params) {
        return this.http.post(`/runners`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a registed Runner..

     * @param params {object}
     * @param params.token {string} - Runner’s authentication token
     * @returns {*}
     */

    deleteARegisteredRunner(params) {
        return this.http.delete(`/runners`, params); // eslint-disable-line quotes
    }

    /**
     * Validates authentication credentials for a registered Runner..

     * @param params {object}
     * @param params.token {string} - Runner’s authentication token
     * @returns {*}
     */

    verifyAuthenticationForARegisteredRunner(params) {
        return this.http.post(`/runners/verify`, params); // eslint-disable-line quotes
    }

}

module.exports = Runners;

