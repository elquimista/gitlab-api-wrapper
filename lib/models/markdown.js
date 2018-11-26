
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Markdown .
 */
class Markdown extends ModelBase {

     /**
     * Create Markdown .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Available only in APIv4..

     * @param params {object}
     * @param params.text {string} - The markdown text to render
     * @param params.gfm {boolean} - Render text using GitLab Flavored Markdown. Default is false

     * @param params.project {string} - Use project as a context when creating references using GitLab Flavored Markdown. Authentication is required if a project is not public.
     * @returns {*}
     */

    markdownApi(params) {
        return this.http.post(`/api/v4/markdown`, params); // eslint-disable-line quotes
    }

    /**
     * Response example:.

     * @param params {object}
     * @param params.text {string} - The markdown text to render
     * @param params.gfm {boolean} - Render text using GitLab Flavored Markdown. Default is false

     * @param params.project {string} - Use project as a context when creating references using GitLab Flavored Markdown. Authentication is required if a project is not public.
     * @returns {*}
     */

    renderAnArbitraryMarkdownDocument(params) {
        return this.http.post(`/api/v4/markdown`, params); // eslint-disable-line quotes
    }

}

module.exports = Markdown;

