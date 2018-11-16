
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Merge Requests .
 */
class MergeRequests extends ModelBase {

     /**
     * Create Merge Requests .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Every API call to merge requests must be authenticated..

     * @param params {object}
     * @returns {*}
     */

    mergeRequestsApi(params) {
        return this.http.get(`/merge_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Get all merge requests the authenticated user has access to. By
default it returns only merge requests created by the current user. To
get all merge requests, use parameter scope=all..

     * @param params {object}
     * @param params.state {string} - Return all merge requests or just those that are opened, closed, or merged

     * @param params.order_by {string} - Return requests ordered by created_at or updated_at fields. Default is created_at

     * @param params.sort {string} - Return requests sorted in asc or desc order. Default is desc

     * @param params.milestone {string} - Return merge requests for a specific milestone
     * @param params.view {string} - If simple, returns the iid, URL, title, description, and basic state of merge request
     * @param params.labels {string} - Return merge requests matching a comma separated list of labels
     * @param params.created_after {datetime} - Return merge requests created after the given time (inclusive)
     * @param params.created_before {datetime} - Return merge requests created before the given time (inclusive)
     * @param params.scope {string} - Return merge requests for the given scope: created-by-me, assigned-to-me or all. Defaults to created-by-me

     * @param params.author_id {integer} - Returns merge requests created by the given user id. Combine with scope=all or scope=assigned-to-me

     * @param params.assignee_id {integer} - Returns merge requests assigned to the given user id

     * @param params.my_reaction_emoji {string} - Return merge requests reacted by the authenticated user by the given emoji (Introduced in GitLab 10.0)

     * @returns {*}
     */

    listMergeRequests(params) {
        return this.http.get(`/merge_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Get all merge requests for this project.
The state parameter can be used to get only merge requests with a given state (opened, closed, or merged) or all of them (all).
The pagination parameters page and per_page can be used to restrict the list of merge requests..

     * @param id {integer} - The ID of a project
     * @param params {object}
     * @param params.iids[] {Array[integer]} - Return the request having the given iid

     * @param params.state {string} - Return all merge requests or just those that are opened, closed, or merged

     * @param params.order_by {string} - Return requests ordered by created_at or updated_at fields. Default is created_at

     * @param params.sort {string} - Return requests sorted in asc or desc order. Default is desc

     * @param params.milestone {string} - Return merge requests for a specific milestone
     * @param params.view {string} - If simple, returns the iid, URL, title, description, and basic state of merge request
     * @param params.labels {string} - Return merge requests matching a comma separated list of labels
     * @param params.created_after {datetime} - Return merge requests created after the given time (inclusive)
     * @param params.created_before {datetime} - Return merge requests created before the given time (inclusive)
     * @param params.scope {string} - Return merge requests for the given scope: created-by-me, assigned-to-me or all (Introduced in GitLab 9.5)

     * @param params.author_id {integer} - Returns merge requests created by the given user id (Introduced in GitLab 9.5)

     * @param params.assignee_id {integer} - Returns merge requests assigned to the given user id (Introduced in GitLab 9.5)

     * @param params.my_reaction_emoji {string} - Return merge requests reacted by the authenticated user by the given emoji (Introduced in GitLab 10.0)

     * @returns {*}
     */

    listProjectMergeRequests(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Shows information about a single merge request..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSingleMr(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of merge request commits..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSingleMrCommits(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/commits`, params); // eslint-disable-line quotes
    }

    /**
     * Shows information about the merge request including its files and changes..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSingleMrChanges(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/changes`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.source_branch {string} - The source branch
     * @param params.target_branch {string} - The target branch
     * @param params.title {string} - Title of MR
     * @param params.assignee_id {integer} - Assignee user ID
     * @param params.description {string} - Description of MR
     * @param params.target_project_id {integer} - The target project (numeric id)
     * @param params.labels {string} - Labels for MR as a comma-separated list
     * @param params.milestone_id {integer} - The ID of a milestone
     * @param params.remove_source_branch {boolean} - Flag indicating if a merge request should remove the source branch when merging
     * @param params.approvals_before_merge {integer} - Number of approvals required before this can be merged (see below)
     * @param params.squash {boolean} - Squash commits into a single commit when merging
     * @returns {*}
     */

    createMr(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing merge request. You can change the target branch, title, or even close the MR..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The ID of a merge request
     * @param params {object}
     * @param params.target_branch {string} - The target branch
     * @param params.title {string} - Title of MR
     * @param params.assignee_id {integer} - Assignee user ID
     * @param params.description {string} - Description of MR
     * @param params.state_event {string} - New state (close/reopen)
     * @param params.labels {string} - Labels for MR as a comma-separated list
     * @param params.milestone_id {integer} - The ID of a milestone
     * @param params.remove_source_branch {boolean} - Flag indicating if a merge request should remove the source branch when merging
     * @param params.squash {boolean} - Squash commits into a single commit when merging
     * @param params.discussion_locked {boolean} - Flag indicating if the merge request's discussion is locked. If the discussion is locked only project members can add, edit or resolve comments.
     * @returns {*}
     */

    updateMr(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Only for admins and project owners. Soft deletes the merge request in question..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @returns {*}
     */

    deleteAMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Merge changes submitted with MR using this API..

     * @param params {object}
     * @returns {*}
     */

    acceptMr(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/merge`, params); // eslint-disable-line quotes
    }

    /**
     * You can request information about a merge request's approval status using the
following endpoint:.

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @returns {*}
     */

    mergeRequestApprovals(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/approvals`, params); // eslint-disable-line quotes
    }

    /**
     * If you are allowed to, you can approve a merge request using the following
endpoint:.

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @param params.sha {string} - The HEAD of the MR
     * @returns {*}
     */

    approveMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/approve`, params); // eslint-disable-line quotes
    }

    /**
     * If you did approve a merge request, you can unapprove it using the following
endpoint:.

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @returns {*}
     */

    unapproveMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/unapprove`, params); // eslint-disable-line quotes
    }

    /**
     * If you don't have permissions to accept this merge request - you'll get a 401.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    cancelMergeWhenPipelineSucceeds(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/cancel_merge_when_pipeline_succeeds`, params); // eslint-disable-line quotes
    }

    /**
     * Comments are done via the notes resource..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @returns {*}
     */

    commentsOnMergeRequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/closes_issues`, params); // eslint-disable-line quotes
    }

    /**
     * Get all the issues that would be closed by merging the provided merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @returns {*}
     */

    listIssuesThatWillCloseOnMerge(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/closes_issues`, params); // eslint-disable-line quotes
    }

    /**
     * Subscribes the authenticated user to a merge request to receive notification. If the user is already subscribed to the merge request, the
status code 304 is returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @returns {*}
     */

    subscribeToAMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/subscribe`, params); // eslint-disable-line quotes
    }

    /**
     * Unsubscribes the authenticated user from a merge request to not receive
notifications from that merge request. If the user is
not subscribed to the merge request, the status code 304 is returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @returns {*}
     */

    unsubscribeFromAMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/unsubscribe`, params); // eslint-disable-line quotes
    }

    /**
     * Manually creates a todo for the current user on a merge request.
If there already exists a todo for the user on that merge request,
status code 304 is returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @returns {*}
     */

    createATodo(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/todo`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of merge request diff versions..

     * @param id {String} - The ID of the project
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @returns {*}
     */

    getMrDiffVersions(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/versions`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single merge request diff version..

     * @param id {String} - The ID of the project
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param version_id {integer} - The ID of the merge request diff version
     * @param params {object}
     * @returns {*}
     */

    getASingleMrDiffVersion(id, merge_request_iid, version_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/versions/${encodeURIComponent(version_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Sets an estimated time of work for this merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @param params.duration {string} - The duration in human format. e.g: 3h30m
     * @returns {*}
     */

    setATimeEstimateForAMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/time_estimate`, params); // eslint-disable-line quotes
    }

    /**
     * Resets the estimated time for this merge request to 0 seconds..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of a project's merge_request
     * @param params {object}
     * @returns {*}
     */

    resetTheTimeEstimateForAMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/reset_time_estimate`, params); // eslint-disable-line quotes
    }

    /**
     * Adds spent time for this merge request.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @param params.duration {string} - The duration in human format. e.g: 3h30m
     * @returns {*}
     */

    addSpentTimeForAMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/add_spent_time`, params); // eslint-disable-line quotes
    }

    /**
     * Resets the total spent time for this merge request to 0 seconds..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of a project's merge_request
     * @param params {object}
     * @returns {*}
     */

    resetSpentTimeForAMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/reset_spent_time`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of the merge request
     * @param params {object}
     * @returns {*}
     */

    getTimeTrackingStats(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/time_stats`, params); // eslint-disable-line quotes
    }

}

module.exports = MergeRequests;

