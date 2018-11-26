
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Project Snippets .
 */
class ProjectSnippets extends ModelBase {

     /**
     * Create Project Snippets .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Snippets in GitLab can be either private, internal or public.
You can set it with the visibility field in the snippet..

     * @param params {object}
     * @param params.private {The snippet is visible only the snippet creator} - undefined
     * @param params.internal {The snippet is visible for any logged in user} - undefined
     * @param params.public {The snippet can be accessed without any authentication} - undefined
     * @returns {*}
     */

    projectSnippets(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets`, params); // eslint-disable-line quotes
    }

    /**
     * Snippets in GitLab can be either private, internal or public.
You can set it with the visibility field in the snippet..

     * @param params {object}
     * @param params.private {The snippet is visible only the snippet creator} - undefined
     * @param params.internal {The snippet is visible for any logged in user} - undefined
     * @param params.public {The snippet can be accessed without any authentication} - undefined
     * @returns {*}
     */

    snippetVisibilityLevel(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of project snippets..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    listSnippets(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single project snippet..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    singleSnippet(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new project snippet. The user must have permission to create new snippets..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createNewSnippet(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/snippets`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing project snippet. The user must have permission to change an existing snippet..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    updateSnippet(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing project snippet. This returns a 204 No Content status code if the operation was successfully or 404 if the resource was not found..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteSnippet(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Returns the raw project snippet as plain text..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    snippetContent(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/raw`, params); // eslint-disable-line quotes
    }

    /**
     * Available only for admins..

     * @param id {Integer} - The ID of a project
     * @param snippet_id {Integer} - The ID of a snippet
     * @param params {object}
     * @returns {*}
     */

    getUserAgentDetails(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/user_agent_detail`, params); // eslint-disable-line quotes
    }

}

module.exports = ProjectSnippets;

