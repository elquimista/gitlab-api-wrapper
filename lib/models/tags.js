
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Tags .
 */
class Tags extends ModelBase {

     /**
     * Create Tags .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of repository tags from a project, sorted by name in reverse
alphabetical order. This endpoint can be accessed without authentication if the
repository is publicly accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.order_by {string} - Return tags ordered by name or updated fields. Default is updated

     * @param params.sort {string} - Return tags sorted in asc or desc order. Default is desc

     * @returns {*}
     */

    tagsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/tags`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of repository tags from a project, sorted by name in reverse
alphabetical order. This endpoint can be accessed without authentication if the
repository is publicly accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.order_by {string} - Return tags ordered by name or updated fields. Default is updated

     * @param params.sort {string} - Return tags sorted in asc or desc order. Default is desc

     * @returns {*}
     */

    listProjectRepositoryTags(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/tags`, params); // eslint-disable-line quotes
    }

    /**
     * Get a specific repository tag determined by its name. This endpoint can be
accessed without authentication if the repository is publicly accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param tag_name {string} - The name of the tag
     * @param params {object}
     * @returns {*}
     */

    getASingleRepositoryTag(id, tag_name, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/tags/${encodeURIComponent(tag_name)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new tag in the repository that points to the supplied ref..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createANewTag(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/tags`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a tag of a repository with given name..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteATag(id, tag_name, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/repository/tags/${encodeURIComponent(tag_name)}`, params); // eslint-disable-line quotes
    }

    /**
     * Add release notes to the existing git tag. If there
already exists a release for the given tag, status code 409 is returned..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createANewRelease(id, tag_name, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/tags/${encodeURIComponent(tag_name)}/release`, params); // eslint-disable-line quotes
    }

    /**
     * Updates the release notes of a given release..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    updateARelease(id, tag_name, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/repository/tags/${encodeURIComponent(tag_name)}/release`, params); // eslint-disable-line quotes
    }

}

module.exports = Tags;

