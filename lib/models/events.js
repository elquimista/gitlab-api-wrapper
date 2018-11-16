
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Events .
 */
class Events extends ModelBase {

     /**
     * Create Events .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of events for the authenticated user..

     * @param params {object}
     * @param params.action {string} - Include only events of a particular action type

     * @param params.target_type {string} - Include only events of a particular target type

     * @param params.before {date} - Include only events created before a particular date. Please see here for the supported format

     * @param params.after {date} - Include only events created after a particular date. Please see here for the supported format

     * @param params.sort {string} - Sort events in asc or desc order by created_at. Default is desc

     * @returns {*}
     */

    listCurrentlyAuthenticatedUserEvents(params) {
        return this.http.get(`/events`, params); // eslint-disable-line quotes
    }

    /**
     * Get the contribution events for the specified user, sorted from newest to oldest..

     * @param id {integer} - The ID or Username of the user
     * @param params {object}
     * @param params.action {string} - Include only events of a particular action type

     * @param params.target_type {string} - Include only events of a particular target type

     * @param params.before {date} - Include only events created before a particular date. Please see here for the supported format

     * @param params.after {date} - Include only events created after a particular date. Please see here for the supported format

     * @param params.sort {string} - Sort events in asc or desc order by created_at. Default is desc

     * @returns {*}
     */

    getUserContributionEvents(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/events`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of visible events for a particular project..

     * @param project_id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.action {string} - Include only events of a particular action type

     * @param params.target_type {string} - Include only events of a particular target type

     * @param params.before {date} - Include only events created before a particular date. Please see here for the supported format

     * @param params.after {date} - Include only events created after a particular date. Please see here for the supported format

     * @param params.sort {string} - Sort events in asc or desc order by created_at. Default is desc

     * @returns {*}
     */

    listAProjectVisibleEvents(project_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/${encodeURIComponent(project_id)}/events`, params); // eslint-disable-line quotes
    }

}

module.exports = Events;

