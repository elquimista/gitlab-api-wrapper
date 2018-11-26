
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Epics .
 */
class Epics extends ModelBase {

     /**
     * Create Epics .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Every API call to epic must be authenticated..

     * @param params {object}
     * @returns {*}
     */

    epicsApiUltimate(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics`, params); // eslint-disable-line quotes
    }

    /**
     * The epic issues API allows you to interact with issues associated with an epic..

     * @param params {object}
     * @returns {*}
     */

    epicIssuesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics`, params); // eslint-disable-line quotes
    }

    /**
     * Since start date and due date can be dynamically sourced from related issue milestones, when user has edit permission, additional fields will be shown. These include two boolean fields start_date_is_fixed and due_date_is_fixed, and four date fields start_date_fixed, start_date_from_milestones, due_date_fixed and due_date_from_milestones..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.author_id {integer} - Return epics created by the given user id

     * @param params.labels {string} - Return epics matching a comma separated list of labels names. Label names from the epic group or a parent group can be used
     * @param params.order_by {string} - Return epics ordered by created_at or updated_at fields. Default is created_at

     * @param params.sort {string} - Return epics sorted in asc or desc order. Default is desc

     * @param params.search {string} - Search epics against their title and description

     * @param params.state {string} - Search epics against their state, possible filters: opened, closed and all, default: all

     * @returns {*}
     */

    milestoneDatesIntegration(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics`, params); // eslint-disable-line quotes
    }

    /**
     * Gets all epics of the requested group and its subgroups..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.author_id {integer} - Return epics created by the given user id

     * @param params.labels {string} - Return epics matching a comma separated list of labels names. Label names from the epic group or a parent group can be used
     * @param params.order_by {string} - Return epics ordered by created_at or updated_at fields. Default is created_at

     * @param params.sort {string} - Return epics sorted in asc or desc order. Default is desc

     * @param params.search {string} - Search epics against their title and description

     * @param params.state {string} - Search epics against their state, possible filters: opened, closed and all, default: all

     * @returns {*}
     */

    listEpicsForAGroup(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single epic.

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param epic_iid {integer/string} - The internal ID  of the epic.
     * @param params {object}
     * @returns {*}
     */

    singleEpic(id, epic_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.title {string} - The title of the epic
     * @param params.labels {string} - The comma separated list of labels
     * @param params.description {string} - The description of the epic
     * @param params.start_date_is_fixed {boolean} - Whether start date should be sourced from start_date_fixed or from milestones (since 11.3)
     * @param params.start_date_fixed {string} - The fixed start date of an epic (since 11.3)
     * @param params.due_date_is_fixed {boolean} - Whether due date should be sourced from due_date_fixed or from milestones (since 11.3)
     * @param params.due_date_fixed {string} - The fixed due date of an epic (since 11.3)
     * @returns {*}
     */

    newEpic(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/epics`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param epic_iid {integer/string} - The internal ID  of the epic
     * @param params {object}
     * @param params.title {string} - The title of an epic
     * @param params.description {string} - The description of an epic
     * @param params.labels {string} - The comma separated list of labels
     * @param params.start_date_is_fixed {boolean} - Whether start date should be sourced from start_date_fixed or from milestones (since 11.3)
     * @param params.start_date_fixed {string} - The fixed start date of an epic (since 11.3)
     * @param params.due_date_is_fixed {boolean} - Whether due date should be sourced from due_date_fixed or from milestones (since 11.3)
     * @param params.due_date_fixed {string} - The fixed due date of an epic (since 11.3)
     * @param params.state_event {string} - State event for an epic. Set close to close the epic and reopen to reopen it (since 11.4)
     * @returns {*}
     */

    updateEpic(id, epic_iid, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an epic.

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param epic_iid {integer/string} - The internal ID  of the epic.
     * @param params {object}
     * @returns {*}
     */

    deleteEpic(id, epic_iid, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Manually creates a todo for the current user on an epic. If
there already exists a todo for the user on that epic, status code 304 is
returned..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.epic_iid  {integer} - The internal ID of a group’s epic
     * @returns {*}
     */

    createATodo(id, epic_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}/todo`, params); // eslint-disable-line quotes
    }

}

module.exports = Epics;

