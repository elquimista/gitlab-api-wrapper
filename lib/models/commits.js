
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Commits .
 */
class Commits extends ModelBase {

     /**
     * Create Commits .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of repository commits in a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.ref_name {string} - The name of a repository branch or tag or if not given the default branch
     * @param params.since {string} - Only commits after or on this date will be returned in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ
     * @param params.until {string} - Only commits before or on this date will be returned in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ
     * @param params.path {string} - The file path
     * @param params.all {boolean} - Retrieve every commit from the repository
     * @param params.with_stats {boolean} - Stats about each commit will be added to the response
     * @returns {*}
     */

    commitsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of repository commits in a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.ref_name {string} - The name of a repository branch or tag or if not given the default branch
     * @param params.since {string} - Only commits after or on this date will be returned in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ
     * @param params.until {string} - Only commits before or on this date will be returned in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ
     * @param params.path {string} - The file path
     * @param params.all {boolean} - Retrieve every commit from the repository
     * @param params.with_stats {boolean} - Stats about each commit will be added to the response
     * @returns {*}
     */

    listRepositoryCommits(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits`, params); // eslint-disable-line quotes
    }

    /**
     * Create a commit by posting a JSON payload.

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.branch {string} - Name of the branch to commit into. To create a new branch, also provide start_branch.
     * @param params.commit_message {string} - Commit message
     * @param params.start_branch {string} - Name of the branch to start the new commit from
     * @param params.actions[] {array} - An array of action hashes to commit as a batch. See the next table for what attributes it can take.
     * @param params.author_email {string} - Specify the commit author’s email address
     * @param params.author_name {string} - Specify the commit author’s name
     * @param params.stats {boolean} - Include commit stats. Default is true
     * @returns {*}
     */

    createACommitWithMultipleFilesAndActions(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/commits`, params); // eslint-disable-line quotes
    }

    /**
     * Get a specific commit identified by the commit hash or name of a branch or tag..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit hash or name of a repository branch or tag
     * @param params {object}
     * @param params.stats {boolean} - Include commit stats. Default is true
     * @returns {*}
     */

    getASingleCommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get all references (from branches or tags) a commit is pushed to.
The pagination parameters page and per_page can be used to restrict the list of references..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit hash
     * @param params {object}
     * @param params.type {string} - The scope of commits. Possible values branch, tag, all. Default is all.
     * @returns {*}
     */

    getReferencesACommitIsPushedTo(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/refs`, params); // eslint-disable-line quotes
    }

    /**
     * Cherry picks a commit to a given branch..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit hash
     * @param params {object}
     * @param params.branch {string} - The name of the branch
     * @returns {*}
     */

    cherryPickACommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/cherry_pick`, params); // eslint-disable-line quotes
    }

    /**
     * Reverts a commit in a given branch..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param sha {string} - Commit SHA to revert
     * @param params {object}
     * @param params.branch {string} - Target branch name
     * @returns {*}
     */

    revertACommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/revert`, params); // eslint-disable-line quotes
    }

    /**
     * Get the diff of a commit in a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit hash or name of a repository branch or tag
     * @param params {object}
     * @returns {*}
     */

    getTheDiffOfACommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/diff`, params); // eslint-disable-line quotes
    }

    /**
     * Get the comments of a commit in a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit hash or name of a repository branch or tag
     * @param params {object}
     * @returns {*}
     */

    getTheCommentsOfACommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/comments`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a comment to a commit..

     * @param params {object}
     * @param params.shalinepath {} - undefined
     * @returns {*}
     */

    postCommentToCommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/comments`, params); // eslint-disable-line quotes
    }

    /**
     * Since GitLab 8.1, this is the new commit status API..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit SHA
     * @param params {object}
     * @param params.ref {string} - The name of a repository branch or tag or, if not given, the default branch
     * @param params.stage {string} - Filter by build stage, e.g., test

     * @param params.name {string} - Filter by job name, e.g., bundler:audit

     * @param params.all {boolean} - Return all statuses, not only the latest ones
     * @returns {*}
     */

    commitStatus(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/statuses`, params); // eslint-disable-line quotes
    }

    /**
     * List the statuses of a commit in a project.
The pagination parameters page and per_page can be used to restrict the list of references..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit SHA
     * @param params {object}
     * @param params.ref {string} - The name of a repository branch or tag or, if not given, the default branch
     * @param params.stage {string} - Filter by build stage, e.g., test

     * @param params.name {string} - Filter by job name, e.g., bundler:audit

     * @param params.all {boolean} - Return all statuses, not only the latest ones
     * @returns {*}
     */

    listTheStatusesOfACommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/statuses`, params); // eslint-disable-line quotes
    }

    /**
     * Adds or updates a build status of a commit..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit SHA
     * @param params {object}
     * @param params.state {string} - The state of the status. Can be one of the following: pending, running, success, failed, canceled

     * @param params.ref {string} - The ref (branch or tag) to which the status refers
     * @param params.
name or context
 {string} - The label to differentiate this status from the status of other systems. Default value is default

     * @param params.target_url {string} - The target URL to associate with this status
     * @param params.description {string} - The short description of the status
     * @param params.coverage {float} - The total code coverage
     * @returns {*}
     */

    postTheBuildStatusToACommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/statuses/${encodeURIComponent(sha)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of Merge Requests related to the specified commit..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param sha {string} - The commit SHA
     * @param params {object}
     * @returns {*}
     */

    listMergeRequestsAssociatedWithACommit(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/commits/${encodeURIComponent(sha)}/merge_requests`, params); // eslint-disable-line quotes
    }

}

module.exports = Commits;

