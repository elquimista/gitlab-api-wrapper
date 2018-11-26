
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Repositories .
 */
class Repositories extends ModelBase {

     /**
     * Create Repositories .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of repository files and directories in a project. This endpoint can
be accessed without authentication if the repository is publicly accessible..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    repositoriesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/tree`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of repository files and directories in a project. This endpoint can
be accessed without authentication if the repository is publicly accessible..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    listRepositoryTree(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/tree`, params); // eslint-disable-line quotes
    }

    /**
     * Allows you to receive information about blob in repository like size and
content. Note that blob content is Base64 encoded. This endpoint can be accessed
without authentication if the repository is publicly accessible..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getABlobFromRepository(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/blobs/${encodeURIComponent(sha)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get the raw file contents for a blob by blob SHA. This endpoint can be accessed
without authentication if the repository is publicly accessible..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    rawBlobContent(id, sha, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/blobs/${encodeURIComponent(sha)}/raw`, params); // eslint-disable-line quotes
    }

    /**
     * Get an archive of the repository. This endpoint can be accessed without
authentication if the repository is publicly accessible..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getFileArchive(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/archive`, params); // eslint-disable-line quotes
    }

    /**
     * This endpoint can be accessed without authentication if the repository is
publicly accessible..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    compareBranchesTagsOrCommits(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/compare`, params); // eslint-disable-line quotes
    }

    /**
     * Get repository contributors list. This endpoint can be accessed without
authentication if the repository is publicly accessible..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    contributors(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/contributors`, params); // eslint-disable-line quotes
    }

    /**
     * Get the common ancestor for 2 refs (commit SHAs, branch names or tags)..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.refs {array} - The refs to find the common ancestor of, multiple refs can be passed
     * @returns {*}
     */

    mergeBase(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/merge_base`, params); // eslint-disable-line quotes
    }

}

module.exports = Repositories;

