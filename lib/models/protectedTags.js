
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Protected Tags .
 */
class ProtectedTags extends ModelBase {

     /**
     * Create Protected Tags .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Valid access levels.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    protectedTagsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/protected_tags`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of protected tags from a project.
This function takes pagination parameters page and per_page to restrict the list of protected tags..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listProtectedTags(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/protected_tags`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single protected tag or wildcard protected tag.
The pagination parameters page and per_page can be used to restrict the list of protected tags..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param name {string} - The name of the tag or wildcard
     * @param params {object}
     * @returns {*}
     */

    getASingleProtectedTagOrWildcardProtectedTag(id, name, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/protected_tags/${encodeURIComponent(name)}`, params); // eslint-disable-line quotes
    }

    /**
     * Protects a single repository tag or several project repository
tags using a wildcard protected tag..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the tag or wildcard
     * @param params.create_access_level {string} - Access levels allowed to create (defaults: 40, maintainer access level)
     * @returns {*}
     */

    protectRepositoryTags(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/protected_tags`, params); // eslint-disable-line quotes
    }

    /**
     * Unprotects the given protected tag or wildcard protected tag..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param name {string} - The name of the tag
     * @param params {object}
     * @returns {*}
     */

    unprotectRepositoryTags(id, name, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/protected_tags/${encodeURIComponent(name)}`, params); // eslint-disable-line quotes
    }

}

module.exports = ProtectedTags;

