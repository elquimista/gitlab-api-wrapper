
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Wikis .
 */
class Wikis extends ModelBase {

     /**
     * Create Wikis .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Available only in APIv4..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.with_content {boolean} - Include pages' content
     * @returns {*}
     */

    wikisApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/wikis`, params); // eslint-disable-line quotes
    }

    /**
     * Get all wiki pages for a given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.with_content {boolean} - Include pages' content
     * @returns {*}
     */

    listWikiPages(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/wikis`, params); // eslint-disable-line quotes
    }

    /**
     * Get a wiki page for a given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param slug {string} - The slug (a unique string) of the wiki page
     * @param params {object}
     * @returns {*}
     */

    getAWikiPage(id, slug, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/wikis/${encodeURIComponent(slug)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new wiki page for the given repository with the given title, slug, and content..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.content {string} - The content of the wiki page
     * @param params.title {string} - The title of the wiki page
     * @param params.format {string} - The format of the wiki page. Available formats are: markdown (default), rdoc, and asciidoc

     * @returns {*}
     */

    createANewWikiPage(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/wikis`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing wiki page. At least one parameter is required to update the wiki page..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param slug {string} - The slug (a unique string) of the wiki page
     * @param params {object}
     * @param params.content {string} - The content of the wiki page
     * @param params.title {string} - The title of the wiki page
     * @param params.format {string} - The format of the wiki page. Available formats are: markdown (default), rdoc, and asciidoc

     * @returns {*}
     */

    editAnExistingWikiPage(id, slug, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/wikis/${encodeURIComponent(slug)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a wiki page with a given slug..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param slug {string} - The slug (a unique string) of the wiki page
     * @param params {object}
     * @returns {*}
     */

    deleteAWikiPage(id, slug, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/wikis/${encodeURIComponent(slug)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Wikis;

