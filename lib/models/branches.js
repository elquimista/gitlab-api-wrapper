
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Branches .
 */
class Branches extends ModelBase {

     /**
     * Create Branches .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of repository branches from a project, sorted by name alphabetically.
This endpoint can be accessed without authentication if the repository is
publicly accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    branchesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/branches`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of repository branches from a project, sorted by name alphabetically.
This endpoint can be accessed without authentication if the repository is
publicly accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listRepositoryBranches(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/branches`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single project repository branch. This endpoint can be accessed without
authentication if the repository is publicly accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.branch {string} - The name of the branch
     * @returns {*}
     */

    getSingleRepositoryBranch(id, branch, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/branches/${encodeURIComponent(branch)}`, params); // eslint-disable-line quotes
    }

    /**
     * Protects a single project repository branch. This is an idempotent function,
protecting an already protected repository branch still returns a 200 OK
status code..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.branch {string} - The name of the branch
     * @param params.developers_can_push {boolean} - Flag if developers can push to the branch
     * @param params.developers_can_merge {boolean} - Flag if developers can merge to the branch
     * @returns {*}
     */

    protectRepositoryBranch(id, branch, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/repository/branches/${encodeURIComponent(branch)}/protect`, params); // eslint-disable-line quotes
    }

    /**
     * Unprotects a single project repository branch. This is an idempotent function,
unprotecting an already unprotected repository branch still returns a 200 OK
status code..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.branch {string} - The name of the branch
     * @returns {*}
     */

    unprotectRepositoryBranch(id, branch, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/repository/branches/${encodeURIComponent(branch)}/unprotect`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param id {integer} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.branch {string} - The name of the branch
     * @param params.ref {string} - The branch name or commit SHA to create branch from
     * @returns {*}
     */

    createRepositoryBranch(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/branches`, params); // eslint-disable-line quotes
    }

    /**
     * In case of an error, an explaining message is provided..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.branch {string} - The name of the branch
     * @returns {*}
     */

    deleteRepositoryBranch(id, branch, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/repository/branches/${encodeURIComponent(branch)}`, params); // eslint-disable-line quotes
    }

    /**
     * Will delete all branches that are merged into the project's default branch..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    deleteMergedBranches(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/repository/merged_branches`, params); // eslint-disable-line quotes
    }

}

module.exports = Branches;

