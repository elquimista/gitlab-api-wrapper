
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Snippets .
 */
class Snippets extends ModelBase {

     /**
     * Create Snippets .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Snippets in GitLab can be either private, internal, or public.
You can set it with the visibility field in the snippet..

     * @param params {object}
     * @param params.private {The snippet is visible only to the snippet creator} - undefined
     * @param params.internal {The snippet is visible for any logged in user} - undefined
     * @param params.public {The snippet can be accessed without any authentication} - undefined
     * @returns {*}
     */

    snippetsApi(params) {
        return this.http.get(`/snippets`, params); // eslint-disable-line quotes
    }

    /**
     * Snippets in GitLab can be either private, internal, or public.
You can set it with the visibility field in the snippet..

     * @param params {object}
     * @param params.private {The snippet is visible only to the snippet creator} - undefined
     * @param params.internal {The snippet is visible for any logged in user} - undefined
     * @param params.public {The snippet can be accessed without any authentication} - undefined
     * @returns {*}
     */

    snippetVisibilityLevel(params) {
        return this.http.get(`/snippets`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of current user’s snippets..

     * @param params {object}
     * @param params.id {Integer} - The ID of a snippet
     * @returns {*}
     */

    listSnippets(params) {
        return this.http.get(`/snippets`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single snippet..

     * @param id {Integer} - The ID of a snippet
     * @param params {object}
     * @returns {*}
     */

    singleSnippet(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/snippets/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new snippet. The user must have permission to create new snippets..

     * @param params {object}
     * @param params.title {String} - The title of a snippet
     * @param params.file_name {String} - The name of a snippet file
     * @param params.content {String} - The content of a snippet
     * @param params.description {String} - The description of a snippet
     * @param params.visibility {String} - The snippet’s visibility
     * @returns {*}
     */

    createNewSnippet(params) {
        return this.http.post(`/snippets`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing snippet. The user must have permission to change an existing snippet..

     * @param id {Integer} - The ID of a snippet
     * @param params {object}
     * @param params.title {String} - The title of a snippet
     * @param params.file_name {String} - The name of a snippet file
     * @param params.description {String} - The description of a snippet
     * @param params.content {String} - The content of a snippet
     * @param params.visibility {String} - The snippet’s visibility
     * @returns {*}
     */

    updateSnippet(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/snippets/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing snippet..

     * @param id {Integer} - The ID of a snippet
     * @param params {object}
     * @returns {*}
     */

    deleteSnippet(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/snippets/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @param params.per_page {Integer} - number of snippets to return per page
     * @param params.page {Integer} - the page to retrieve
     * @returns {*}
     */

    exploreAllPublicSnippets(params) {
        return this.http.get(`/snippets/public`, params); // eslint-disable-line quotes
    }

    /**
     * Available only for admins..

     * @param id {Integer} - The ID of a snippet
     * @param params {object}
     * @returns {*}
     */

    getUserAgentDetails(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/snippets/${encodeURIComponent(id)}/user_agent_detail`, params); // eslint-disable-line quotes
    }

}

module.exports = Snippets;

