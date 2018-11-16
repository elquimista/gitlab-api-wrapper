
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Pipeline Schedules .
 */
class PipelineSchedules extends ModelBase {

     /**
     * Create Pipeline Schedules .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * You can read more about pipeline schedules..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.scope {string} - The scope of pipeline schedules, one of: active, inactive

     * @returns {*}
     */

    pipelineSchedules(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pipeline_schedules`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of the pipeline schedules of a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.scope {string} - The scope of pipeline schedules, one of: active, inactive

     * @returns {*}
     */

    getAllPipelineSchedules(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pipeline_schedules`, params); // eslint-disable-line quotes
    }

    /**
     * Get the pipeline schedule of a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_schedule_id {integer} - The pipeline schedule id
     * @param params {object}
     * @returns {*}
     */

    getASinglePipelineSchedule(id, pipeline_schedule_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pipeline_schedules/${encodeURIComponent(pipeline_schedule_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Create a new pipeline schedule of a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.description {string} - The description of pipeline schedule
     * @param params.ref {string} - The branch/tag name will be triggered
     * @param params.cron {string} - The cron (e.g. 0 1 * * *) (Cron syntax)
     * @param params.cron_timezone {string} - The timezone supproted by ActiveSupport::TimeZone (e.g. Pacific Time (US & Canada)) (default: 'UTC')
     * @param params.active {boolean} - The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially (default: true)
     * @returns {*}
     */

    createANewPipelineSchedule(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/pipeline_schedules`, params); // eslint-disable-line quotes
    }

    /**
     * Updates the pipeline schedule  of a project. Once the update is done, it will be rescheduled automatically..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_schedule_id {integer} - The pipeline schedule id
     * @param params {object}
     * @param params.description {string} - The description of pipeline schedule
     * @param params.ref {string} - The branch/tag name will be triggered
     * @param params.cron {string} - The cron (e.g. 0 1 * * *) (Cron syntax)
     * @param params.cron_timezone {string} - The timezone supproted by ActiveSupport::TimeZone (e.g. Pacific Time (US & Canada)) or TZInfo::Timezone (e.g. America/Los_Angeles)
     * @param params.active {boolean} - The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially.
     * @returns {*}
     */

    editAPipelineSchedule(id, pipeline_schedule_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/pipeline_schedules/${encodeURIComponent(pipeline_schedule_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Update the owner of the pipeline schedule of a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_schedule_id {integer} - The pipeline schedule id
     * @param params {object}
     * @returns {*}
     */

    takeOwnershipOfAPipelineSchedule(id, pipeline_schedule_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/pipeline_schedules/${encodeURIComponent(pipeline_schedule_id)}/take_ownership`, params); // eslint-disable-line quotes
    }

    /**
     * Delete the pipeline schedule of a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_schedule_id {integer} - The pipeline schedule id
     * @param params {object}
     * @returns {*}
     */

    deleteAPipelineSchedule(id, pipeline_schedule_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/pipeline_schedules/${encodeURIComponent(pipeline_schedule_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Create a new variable of a pipeline schedule..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_schedule_id {integer} - The pipeline schedule id
     * @param params {object}
     * @param params.key {string} - The key of a variable; must have no more than 255 characters; only A-Z, a-z, 0-9, and _ are allowed
     * @param params.value {string} - The value of a variable
     * @returns {*}
     */

    pipelineScheduleVariable(id, pipeline_schedule_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/pipeline_schedules/${encodeURIComponent(pipeline_schedule_id)}/variables`, params); // eslint-disable-line quotes
    }

    /**
     * Create a new variable of a pipeline schedule..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_schedule_id {integer} - The pipeline schedule id
     * @param params {object}
     * @param params.key {string} - The key of a variable; must have no more than 255 characters; only A-Z, a-z, 0-9, and _ are allowed
     * @param params.value {string} - The value of a variable
     * @returns {*}
     */

    createANewPipelineScheduleVariable(id, pipeline_schedule_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/pipeline_schedules/${encodeURIComponent(pipeline_schedule_id)}/variables`, params); // eslint-disable-line quotes
    }

    /**
     * Updates the variable of a pipeline schedule..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_schedule_id {integer} - The pipeline schedule id
     * @param key {string} - The key of a variable
     * @param params {object}
     * @param params.value {string} - The value of a variable
     * @returns {*}
     */

    editAPipelineScheduleVariable(id, pipeline_schedule_id, key, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/pipeline_schedules/${encodeURIComponent(pipeline_schedule_id)}/variables/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Delete the variable of a pipeline schedule..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param pipeline_schedule_id {integer} - The pipeline schedule id
     * @param key {string} - The key of a variable
     * @param params {object}
     * @returns {*}
     */

    deleteAPipelineScheduleVariable(id, pipeline_schedule_id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/pipeline_schedules/${encodeURIComponent(pipeline_schedule_id)}/variables/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = PipelineSchedules;

