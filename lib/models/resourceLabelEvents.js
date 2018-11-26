
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Resource Label Events .
 */
class ResourceLabelEvents extends ModelBase {

     /**
     * Create Resource Label Events .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Resource label events keep track about who, when, and which label was added or removed to an issuable..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @returns {*}
     */

    resourceLabelEventsApi(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/resource_label_events`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all label events for a single issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @returns {*}
     */

    issues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/resource_label_events`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all label events for a single issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @returns {*}
     */

    listProjectIssueLabelEvents(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/resource_label_events`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single label event for a specific project issue.

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param resource_label_event_id {integer} - The ID of a label event
     * @param params {object}
     * @returns {*}
     */

    getSingleIssueLabelEvent(id, issue_iid, resource_label_event_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/resource_label_events/${encodeURIComponent(resource_label_event_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all label events for a single epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param params {object}
     * @returns {*}
     */

    epics(id, epic_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/resource_label_events`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all label events for a single epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param params {object}
     * @returns {*}
     */

    listGroupEpicLabelEvents(id, epic_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/resource_label_events`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single label event for a specific group epic.

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param resource_label_event_id {integer} - The ID of a label event
     * @param params {object}
     * @returns {*}
     */

    getSingleEpicLabelEvent(id, epic_id, resource_label_event_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/resource_label_events/${encodeURIComponent(resource_label_event_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all label events for a single merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param params {object}
     * @returns {*}
     */

    mergeRequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/resource_label_events`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all label events for a single merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param params {object}
     * @returns {*}
     */

    listProjectMergeRequestLabelEvents(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/resource_label_events`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single label event for a specific project merge request.

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param resource_label_event_id {integer} - The ID of a label event
     * @param params {object}
     * @returns {*}
     */

    getSingleMergeRequestLabelEvent(id, merge_request_iid, resource_label_event_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/resource_label_events/${encodeURIComponent(resource_label_event_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = ResourceLabelEvents;

