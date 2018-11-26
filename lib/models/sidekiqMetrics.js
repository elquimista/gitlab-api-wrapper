
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Sidekiq Metrics .
 */
class SidekiqMetrics extends ModelBase {

     /**
     * Create Sidekiq Metrics .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * This API endpoint allows you to retrieve some information about the current state
of Sidekiq, its jobs, queues, and processes..

     * @param params {object}
     * @returns {*}
     */

    sidekiqMetricsApi(params) {
        return this.http.get(`/sidekiq/queue_metrics`, params); // eslint-disable-line quotes
    }

    /**
     * List information about all the registered queues, their backlog and their
latency..

     * @param params {object}
     * @returns {*}
     */

    getTheCurrentQueueMetrics(params) {
        return this.http.get(`/sidekiq/queue_metrics`, params); // eslint-disable-line quotes
    }

    /**
     * List information about all the Sidekiq workers registered to process your queues..

     * @param params {object}
     * @returns {*}
     */

    getTheCurrentProcessMetrics(params) {
        return this.http.get(`/sidekiq/process_metrics`, params); // eslint-disable-line quotes
    }

    /**
     * List information about the jobs that Sidekiq has performed..

     * @param params {object}
     * @returns {*}
     */

    getTheCurrentJobStatistics(params) {
        return this.http.get(`/sidekiq/job_stats`, params); // eslint-disable-line quotes
    }

    /**
     * List all the currently available information about Sidekiq..

     * @param params {object}
     * @returns {*}
     */

    getACompoundResponseOfAllThePreviouslyMentionedMetrics(params) {
        return this.http.get(`/sidekiq/compound_metrics`, params); // eslint-disable-line quotes
    }

}

module.exports = SidekiqMetrics;

