
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Issues .
 */
class Issues extends ModelBase {

     /**
     * Create Issues .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Every API call to issues must be authenticated..

     * @param params {object}
     * @returns {*}
     */

    issuesApi(params) {
        return this.http.get(`/issues`, params); // eslint-disable-line quotes
    }

    /**
     * By default, GET requests return 20 results at a time because the API results
are paginated..

     * @param params {object}
     * @param params.state {string} - Return all issues or just those that are opened or closed

     * @param params.labels {string} - Comma-separated list of label names, issues must have all labels to be returned. No+Label lists all issues with no labels
     * @param params.milestone {string} - The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.
     * @param params.scope {string} - Return issues for the given scope: created_by_me, assigned_to_me or all. Defaults to created_by_me For versions before 11.0, use the now deprecated created-by-me or assigned-to-me scopes instead. (Introduced in GitLab 9.5. Changed to snake_case in GitLab 11.0)

     * @param params.author_id {integer} - Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. (Introduced in GitLab 9.5)

     * @param params.assignee_id {integer} - Return issues assigned to the given user id. None returns unassigned issues. Any returns issues with an assignee. (Introduced in GitLab 9.5)

     * @param params.my_reaction_emoji {string} - Return issues reacted by the authenticated user by the given emoji. None returns issues not given a reaction. Any returns issues given at least one reaction. (Introduced in GitLab 10.0)

     * @param params.weight {integer} - Return issues with the specified weight. None returns issues with no weight assigned. Any returns issues with a weight assigned.
     * @param params.iids[] {Array[integer]} - Return only the issues having the given iid

     * @param params.order_by {string} - Return issues ordered by created_at or updated_at fields. Default is created_at

     * @param params.sort {string} - Return issues sorted in asc or desc order. Default is desc

     * @param params.search {string} - Search issues against their title and description

     * @param params.created_after {datetime} - Return issues created on or after the given time
     * @param params.created_before {datetime} - Return issues created on or before the given time
     * @param params.updated_after {datetime} - Return issues updated on or after the given time
     * @param params.updated_before {datetime} - Return issues updated on or before the given time
     * @returns {*}
     */

    issuesPagination(params) {
        return this.http.get(`/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Get all issues the authenticated user has access to. By default it
returns only issues created by the current user. To get all issues,
use parameter scope=all..

     * @param params {object}
     * @param params.state {string} - Return all issues or just those that are opened or closed

     * @param params.labels {string} - Comma-separated list of label names, issues must have all labels to be returned. No+Label lists all issues with no labels
     * @param params.milestone {string} - The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.
     * @param params.scope {string} - Return issues for the given scope: created_by_me, assigned_to_me or all. Defaults to created_by_me For versions before 11.0, use the now deprecated created-by-me or assigned-to-me scopes instead. (Introduced in GitLab 9.5. Changed to snake_case in GitLab 11.0)

     * @param params.author_id {integer} - Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. (Introduced in GitLab 9.5)

     * @param params.assignee_id {integer} - Return issues assigned to the given user id. None returns unassigned issues. Any returns issues with an assignee. (Introduced in GitLab 9.5)

     * @param params.my_reaction_emoji {string} - Return issues reacted by the authenticated user by the given emoji. None returns issues not given a reaction. Any returns issues given at least one reaction. (Introduced in GitLab 10.0)

     * @param params.weight {integer} - Return issues with the specified weight. None returns issues with no weight assigned. Any returns issues with a weight assigned.
     * @param params.iids[] {Array[integer]} - Return only the issues having the given iid

     * @param params.order_by {string} - Return issues ordered by created_at or updated_at fields. Default is created_at

     * @param params.sort {string} - Return issues sorted in asc or desc order. Default is desc

     * @param params.search {string} - Search issues against their title and description

     * @param params.created_after {datetime} - Return issues created on or after the given time
     * @param params.created_before {datetime} - Return issues created on or before the given time
     * @param params.updated_after {datetime} - Return issues updated on or after the given time
     * @param params.updated_before {datetime} - Return issues updated on or before the given time
     * @returns {*}
     */

    listIssues(params) {
        return this.http.get(`/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of a group’s issues..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.state {string} - Return all issues or just those that are opened or closed

     * @param params.labels {string} - Comma-separated list of label names, issues must have all labels to be returned. No+Label lists all issues with no labels
     * @param params.iids[] {Array[integer]} - Return only the issues having the given iid

     * @param params.milestone {string} - The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.
     * @param params.scope {string} - Return issues for the given scope: created_by_me, assigned_to_me or all. For versions before 11.0, use the now deprecated created-by-me or assigned-to-me scopes instead. (Introduced in GitLab 9.5. Changed to snake_case in GitLab 11.0)

     * @param params.author_id {integer} - Return issues created by the given user id (Introduced in GitLab 9.5)

     * @param params.assignee_id {integer} - Return issues assigned to the given user id. None returns unassigned issues. Any returns issues with an assignee. (Introduced in GitLab 9.5)

     * @param params.my_reaction_emoji {string} - Return issues reacted by the authenticated user by the given emoji. None returns issues not given a reaction. Any returns issues given at least one reaction. (Introduced in GitLab 10.0)

     * @param params.weight {integer} - Return issues with the specified weight. None returns issues with no weight assigned. Any returns issues with a weight assigned.
     * @param params.order_by {string} - Return issues ordered by created_at or updated_at fields. Default is created_at

     * @param params.sort {string} - Return issues sorted in asc or desc order. Default is desc

     * @param params.search {string} - Search group issues against their title and description

     * @param params.created_after {datetime} - Return issues created on or after the given time
     * @param params.created_before {datetime} - Return issues created on or before the given time
     * @param params.updated_after {datetime} - Return issues updated on or after the given time
     * @param params.updated_before {datetime} - Return issues updated on or before the given time
     * @returns {*}
     */

    listGroupIssues(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of a project’s issues..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.iids[] {Array[integer]} - Return only the milestone having the given iid

     * @param params.state {string} - Return all issues or just those that are opened or closed

     * @param params.labels {string} - Comma-separated list of label names, issues must have all labels to be returned. No+Label lists all issues with no labels
     * @param params.milestone {string} - The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.
     * @param params.scope {string} - Return issues for the given scope: created_by_me, assigned_to_me or all. For versions before 11.0, use the now deprecated created-by-me or assigned-to-me scopes instead. (Introduced in GitLab 9.5. Changed to snake_case in GitLab 11.0)

     * @param params.author_id {integer} - Return issues created by the given user id (Introduced in GitLab 9.5)

     * @param params.assignee_id {integer} - Return issues assigned to the given user id. None returns unassigned issues. Any returns issues with an assignee. (Introduced in GitLab 9.5)

     * @param params.my_reaction_emoji {string} - Return issues reacted by the authenticated user by the given emoji. None returns issues not given a reaction. Any returns issues given at least one reaction. (Introduced in GitLab 10.0)

     * @param params.weight {integer} - Return issues with the specified weight. None returns issues with no weight assigned. Any returns issues with a weight assigned.
     * @param params.order_by {string} - Return issues ordered by created_at or updated_at fields. Default is created_at

     * @param params.sort {string} - Return issues sorted in asc or desc order. Default is desc

     * @param params.search {string} - Search project issues against their title and description

     * @param params.created_after {datetime} - Return issues created on or after the given time
     * @param params.created_before {datetime} - Return issues created on or before the given time
     * @param params.updated_after {datetime} - Return issues updated on or after the given time
     * @param params.updated_before {datetime} - Return issues updated on or before the given time
     * @returns {*}
     */

    listProjectIssues(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single project issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    singleIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new project issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.iid {integer/string} - The internal ID of the project’s issue (requires admin or project owner rights)
     * @param params.title {string} - The title of an issue
     * @param params.description {string} - The description of an issue
     * @param params.confidential {boolean} - Set an issue to be confidential. Default is false.
     * @param params.assignee_ids {Array[integer]} - The ID of a user to assign issue
     * @param params.milestone_id {integer} - The global ID of a milestone to assign issue
     * @param params.labels {string} - Comma-separated label names for an issue
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @param params.due_date {string} - Date time string in the format YEAR-MONTH-DAY, e.g. 2016-03-11

     * @param params.merge_request_to_resolve_discussions_of {integer} - The IID of a merge request in which to resolve all issues. This will fill the issue with a default description and mark all discussions as resolved. When passing a description or title, these values will take precedence over the default values.
     * @param params.discussion_to_resolve {string} - The ID of a discussion to resolve. This will fill in the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.
     * @param params.weight {integer} - The weight of the issue. Valid values are greater than or equal to 0.
     * @returns {*}
     */

    newIssue(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing project issue. This call is also used to mark an issue as
closed..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @param params.title {string} - The title of an issue
     * @param params.description {string} - The description of an issue
     * @param params.confidential {boolean} - Updates an issue to be confidential
     * @param params.assignee_ids {Array[integer]} - The ID of the user(s) to assign the issue to. Set to 0 or provide an empty value to unassign all assignees.
     * @param params.milestone_id {integer} - The global ID of a milestone to assign the issue to. Set to 0 or provide an empty value to unassign a milestone.
     * @param params.labels {string} - Comma-separated label names for an issue. Set to an empty string to unassign all labels.
     * @param params.state_event {string} - The state event of an issue. Set close to close the issue and reopen to reopen it
     * @param params.updated_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project owner rights)
     * @param params.due_date {string} - Date time string in the format YEAR-MONTH-DAY, e.g. 2016-03-11

     * @param params.weight {integer} - The weight of the issue. Valid values are greater than or equal to 0. 0
     * @param params.discussion_locked {boolean} - Flag indicating if the issue’s discussion is locked. If the discussion is locked only project members can add or edit comments.
     * @returns {*}
     */

    editIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Only for admins and project owners. Soft deletes the issue in question..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    deleteAnIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}`, params); // eslint-disable-line quotes
    }

    /**
     * Moves an issue to a different project. If the target project
equals the source project or the user has insufficient permissions to move an
issue, error 400 together with an explaining error message is returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @param params.to_project_id {integer} - The ID of the new project
     * @returns {*}
     */

    moveAnIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/move`, params); // eslint-disable-line quotes
    }

    /**
     * Subscribes the authenticated user to an issue to receive notifications.
If the user is already subscribed to the issue, the status code 304
is returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    subscribeToAnIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/subscribe`, params); // eslint-disable-line quotes
    }

    /**
     * Unsubscribes the authenticated user from the issue to not receive notifications
from it. If the user is not subscribed to the issue, the
status code 304 is returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    unsubscribeFromAnIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/unsubscribe`, params); // eslint-disable-line quotes
    }

    /**
     * Manually creates a todo for the current user on an issue. If
there already exists a todo for the user on that issue, status code 304 is
returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    createATodo(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/todo`, params); // eslint-disable-line quotes
    }

    /**
     * Sets an estimated time of work for this issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @param params.duration {string} - The duration in human format. e.g: 3h30m
     * @returns {*}
     */

    setATimeEstimateForAnIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/time_estimate`, params); // eslint-disable-line quotes
    }

    /**
     * Resets the estimated time for this issue to 0 seconds..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    resetTheTimeEstimateForAnIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/reset_time_estimate`, params); // eslint-disable-line quotes
    }

    /**
     * Adds spent time for this issue.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @param params.duration {string} - The duration in human format. e.g: 3h30m
     * @returns {*}
     */

    addSpentTimeForAnIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/add_spent_time`, params); // eslint-disable-line quotes
    }

    /**
     * Resets the total spent time for this issue to 0 seconds..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    resetSpentTimeForAnIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/reset_spent_time`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    getTimeTrackingStats(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/time_stats`, params); // eslint-disable-line quotes
    }

    /**
     * Get all the merge requests that are related to the issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.issue_iid {integer} - The internal ID of a project’s issue
     * @returns {*}
     */

    listMergeRequestsRelatedToIssue(id, issue_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_id)}/related_merge_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Get all the merge requests that will close issue when merged..

     * @param id {integer} - The ID of a project
     * @param issue_iid {integer} - The internal ID of a project issue
     * @param params {object}
     * @returns {*}
     */

    listMergeRequestsThatWillCloseIssueOnMerge(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/closed_by`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    participantsOnIssues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/participants`, params); // eslint-disable-line quotes
    }

    /**
     * Comments are done via the notes resource..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    commentsOnIssues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/user_agent_detail`, params); // eslint-disable-line quotes
    }

    /**
     * Available only for admins..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of a project’s issue
     * @param params {object}
     * @returns {*}
     */

    getUserAgentDetails(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/user_agent_detail`, params); // eslint-disable-line quotes
    }

}

module.exports = Issues;

