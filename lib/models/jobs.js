
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Jobs .
 */
class Jobs extends ModelBase {

     /**
     * Create Jobs .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of jobs in a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.scope {string or array of strings} - The scope of jobs to show, one or array of: created, pending, running, failed, success, canceled, skipped, manual; showing all jobs if none provided
     * @returns {*}
     */

    jobsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/jobs`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of jobs in a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.scope {string or array of strings} - The scope of jobs to show, one or array of: created, pending, running, failed, success, canceled, skipped, manual; showing all jobs if none provided
     * @returns {*}
     */

    listProjectJobs(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/jobs`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of jobs for a pipeline..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_id {integer} - The ID of a pipeline
     * @param params {object}
     * @param params.scope {string or array of strings} - The scope of jobs to show, one or array of: created, pending, running, failed, success, canceled, skipped, manual; showing all jobs if none provided
     * @returns {*}
     */

    listPipelineJobs(id, pipeline_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pipelines/${encodeURIComponent(pipeline_id)}/jobs`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single job of a project.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param job_id {integer} - The ID of a job
     * @param params {object}
     * @returns {*}
     */

    getASingleJob(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get job artifacts of a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param job_id {integer} - The ID of a job
     * @param params {object}
     * @param params.job_token {string} - To be used with triggers for multi-project pipelines. Is should be invoked only inside .gitlab-ci.yml. Its value is always $CI_JOB_TOKEN.
     * @returns {*}
     */

    getJobArtifacts(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}/artifacts`, params); // eslint-disable-line quotes
    }

    /**
     * Download the artifacts archive from the given reference name and job provided the
job finished successfully..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param ref_name {string} - The ref from a repository (can only be branch or tag name, not HEAD or SHA)
     * @param params {object}
     * @param params.job {string} - The name of the job
     * @param params.job_token {string} - To be used with triggers for multi-project pipelines. Is should be invoked only inside .gitlab-ci.yml. Its value is always $CI_JOB_TOKEN.
     * @returns {*}
     */

    downloadTheArtifactsArchive(id, ref_name, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/jobs/artifacts/${encodeURIComponent(ref_name)}/download`, params); // eslint-disable-line quotes
    }

    /**
     * Download a single artifact file from within the job’s artifacts archive..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.job_id   {integer} - The unique job identifier
     * @param params.artifact_path {string} - Path to a file inside the artifacts archive
     * @returns {*}
     */

    downloadASingleArtifactFile(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}/artifacts/*artifact_path`, params); // eslint-disable-line quotes
    }

    /**
     * Get a trace of a specific job of a project.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param job_id {integer} - The ID of a job
     * @param params {object}
     * @returns {*}
     */

    getATraceFile(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}/trace`, params); // eslint-disable-line quotes
    }

    /**
     * Cancel a single job of a project.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param job_id {integer} - The ID of a job
     * @param params {object}
     * @returns {*}
     */

    cancelAJob(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}/cancel`, params); // eslint-disable-line quotes
    }

    /**
     * Retry a single job of a project.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param job_id {integer} - The ID of a job
     * @param params {object}
     * @returns {*}
     */

    retryAJob(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}/retry`, params); // eslint-disable-line quotes
    }

    /**
     * Erase a single job of a project (remove job artifacts and a job trace).

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param job_id {integer} - The ID of a job
     * @param params {object}
     * @returns {*}
     */

    eraseAJob(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}/erase`, params); // eslint-disable-line quotes
    }

    /**
     * Prevents artifacts from being deleted when expiration is set..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param job_id {integer} - The ID of a job
     * @param params {object}
     * @returns {*}
     */

    keepArtifacts(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}/artifacts/keep`, params); // eslint-disable-line quotes
    }

    /**
     * Triggers a manual action to start a job..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param job_id {integer} - The ID of a job
     * @param params {object}
     * @returns {*}
     */

    playAJob(id, job_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/jobs/${encodeURIComponent(job_id)}/play`, params); // eslint-disable-line quotes
    }

}

module.exports = Jobs;

