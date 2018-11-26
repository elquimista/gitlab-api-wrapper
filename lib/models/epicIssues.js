
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Epic Issues .
 */
class EpicIssues extends ModelBase {

     /**
     * Create Epic Issues .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Every API call to epic_issues must be authenticated..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param epic_iid {integer/string} - The internal ID  of the epic.
     * @param params {object}
     * @returns {*}
     */

    epicIssuesApiUltimate(id, epic_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Gets all issues that are assigned to an epic and the authenticated user has  access to..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param epic_iid {integer/string} - The internal ID  of the epic.
     * @param params {object}
     * @returns {*}
     */

    listIssuesForAnEpic(id, epic_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Creates an epic - issue association. If the issue in question belongs to another epic it is unassigned from that epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param epic_iid {integer/string} - The internal ID  of the epic.
     * @param issue_id {integer/string} - The ID  of the issue.
     * @param params {object}
     * @returns {*}
     */

    assignAnIssueToTheEpic(id, epic_iid, issue_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}/issues/${encodeURIComponent(issue_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes an epic - issue association..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param epic_iid {integer/string} - The internal ID  of the epic.
     * @param epic_issue_id {integer/string} - The ID  of the issue - epic association.
     * @param params {object}
     * @returns {*}
     */

    removeAnIssueFromTheEpic(id, epic_iid, epic_issue_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}/issues/${encodeURIComponent(epic_issue_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an epic - issue association..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param epic_iid {integer/string} - The internal ID  of the epic.
     * @param epic_issue_id {integer/string} - The ID of the issue - epic association.
     * @param params {object}
     * @param params.move_before_id {integer/string} - The ID of the issue - epic association that should be placed before the link in the question.
     * @param params.move_after_id {integer/string} - The ID of the issue - epic association that should be placed after the link in the question.
     * @returns {*}
     */

    updateEpicIssueAssociation(id, epic_iid, epic_issue_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_iid)}/issues/${encodeURIComponent(epic_issue_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = EpicIssues;

