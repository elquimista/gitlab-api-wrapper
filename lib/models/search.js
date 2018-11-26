
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Search .
 */
class Search extends ModelBase {

     /**
     * Create Search .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Search globally across the GitLab instance..

     * @param params {object}
     * @param params.scope {string} - The scope to search in
     * @param params.search {string} - The search query
     * @returns {*}
     */

    globalSearchApi(params) {
        return this.http.get(`/search`, params); // eslint-disable-line quotes
    }

    /**
     * Search within the specified group..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.scope {string} - The scope to search in
     * @param params.search {string} - The search query
     * @returns {*}
     */

    groupSearchApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/search`, params); // eslint-disable-line quotes
    }

    /**
     * Search within the specified project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.scope {string} - The scope to search in
     * @param params.search {string} - The search query
     * @returns {*}
     */

    projectSearchApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/search`, params); // eslint-disable-line quotes
    }

}

module.exports = Search;

