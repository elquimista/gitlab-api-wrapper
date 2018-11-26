
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Issue Links .
 */
class IssueLinks extends ModelBase {

     /**
     * Create Issue Links .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of related issues of a given issue, sorted by the relationship creation datetime (ascending).
Issues will be filtered according to the user authorizations..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    issueLinksApi(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/links`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of related issues of a given issue, sorted by the relationship creation datetime (ascending).
Issues will be filtered according to the user authorizations..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    listIssueRelations(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/links`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a two-way relation between two issues. User must be allowed to update both issues in order to succeed..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @param params.target_project_id {integer/string} - The ID or URL-encoded path of the project of a target project
     * @param params.target_issue_iid {integer/string} - The internal ID of a target project’s issue
     * @returns {*}
     */

    createAnIssueLink(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/links`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an issue link, thus removes the two-way relationship..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param issue_link_id {integer/string} - The ID of an issue relationship
     * @param params {object}
     * @returns {*}
     */

    deleteAnIssueLink(id, issue_iid, issue_link_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/links/${encodeURIComponent(issue_link_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = IssueLinks;

