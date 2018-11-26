
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Pipelines .
 */
class Pipelines extends ModelBase {

     /**
     * Create Pipelines .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Example of response.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.scope {string} - The scope of pipelines, one of: running, pending, finished, branches, tags

     * @param params.status {string} - The status of pipelines, one of: running, pending, success, failed, canceled, skipped

     * @param params.ref {string} - The ref of pipelines
     * @param params.sha {string} - The sha or pipelines
     * @param params.yaml_errors {boolean} - Returns pipelines with invalid configurations
     * @param params.name {string} - The name of the user who triggered pipelines
     * @param params.username {string} - The username of the user who triggered pipelines
     * @param params.order_by {string} - Order pipelines by id, status, ref, or user_id (default: id)
     * @param params.sort {string} - Sort pipelines in asc or desc order (default: desc)
     * @returns {*}
     */

    pipelinesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pipelines`, params); // eslint-disable-line quotes
    }

    /**
     * Example of response.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.scope {string} - The scope of pipelines, one of: running, pending, finished, branches, tags

     * @param params.status {string} - The status of pipelines, one of: running, pending, success, failed, canceled, skipped

     * @param params.ref {string} - The ref of pipelines
     * @param params.sha {string} - The sha or pipelines
     * @param params.yaml_errors {boolean} - Returns pipelines with invalid configurations
     * @param params.name {string} - The name of the user who triggered pipelines
     * @param params.username {string} - The username of the user who triggered pipelines
     * @param params.order_by {string} - Order pipelines by id, status, ref, or user_id (default: id)
     * @param params.sort {string} - Sort pipelines in asc or desc order (default: desc)
     * @returns {*}
     */

    listProjectPipelines(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pipelines`, params); // eslint-disable-line quotes
    }

    /**
     * Example of response.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_id {integer} - The ID of a pipeline
     * @param params {object}
     * @returns {*}
     */

    getASinglePipeline(id, pipeline_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pipelines/${encodeURIComponent(pipeline_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Example of response.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.ref {string} - Reference to commit
     * @param params.variables {array} - An array containing the variables available in the pipeline, matching the structure [{ ‘key’ => ‘UPLOAD_TO_S3’, ‘value’ => ‘true’ }]
     * @returns {*}
     */

    createANewPipeline(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/pipeline`, params); // eslint-disable-line quotes
    }

    /**
     * Response:.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_id {integer} - The ID of a pipeline
     * @param params {object}
     * @returns {*}
     */

    retryJobsInAPipeline(id, pipeline_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/pipelines/${encodeURIComponent(pipeline_id)}/retry`, params); // eslint-disable-line quotes
    }

    /**
     * Response:.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_id {integer} - The ID of a pipeline
     * @param params {object}
     * @returns {*}
     */

    cancelAPipelinesJobs(id, pipeline_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/pipelines/${encodeURIComponent(pipeline_id)}/cancel`, params); // eslint-disable-line quotes
    }

    /**
     * .

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_id {integer} - The ID of a pipeline
     * @param params {object}
     * @returns {*}
     */

    deleteAPipeline(id, pipeline_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/pipelines/${encodeURIComponent(pipeline_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Pipelines;

