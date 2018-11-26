
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Repository Submodules .
 */
class RepositorySubmodules extends ModelBase {

     /**
     * Create Repository Submodules .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * In some workflows, especially automated ones, it can be useful to update a
submodule’s reference to keep up to date other projects that use it.
This endpoint allows you to update a Git submodule reference in a
specific branch..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.submodule {string} - URL encoded full path to the submodule. For example, lib%2Fclass%2Erb

     * @param params.branch {string} - Name of the branch to commit into
     * @param params.commit_sha {string} - Full commit SHA to update the submodule to
     * @param params.commit_message {string} - Commit message. If no message is provided, a default one will be set
     * @returns {*}
     */

    repositorySubmodulesApi(id, submodule, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/repository/submodules/${encodeURIComponent(submodule)}`, params); // eslint-disable-line quotes
    }

    /**
     * In some workflows, especially automated ones, it can be useful to update a
submodule’s reference to keep up to date other projects that use it.
This endpoint allows you to update a Git submodule reference in a
specific branch..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.submodule {string} - URL encoded full path to the submodule. For example, lib%2Fclass%2Erb

     * @param params.branch {string} - Name of the branch to commit into
     * @param params.commit_sha {string} - Full commit SHA to update the submodule to
     * @param params.commit_message {string} - Commit message. If no message is provided, a default one will be set
     * @returns {*}
     */

    updateExistingSubmoduleReferenceInRepository(id, submodule, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/repository/submodules/${encodeURIComponent(submodule)}`, params); // eslint-disable-line quotes
    }

}

module.exports = RepositorySubmodules;

