
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Pages Domains .
 */
class PagesDomains extends ModelBase {

     /**
     * Create Pages Domains .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Endpoints for connecting custom domain(s) and TLS certificates in GitLab Pages..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    pagesDomainsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pages/domains`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of project pages domains. The user must have permissions to view pages domains..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listPagesDomains(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pages/domains`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single project pages domain. The user must have permissions to view pages domains..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.domain {string} - The domain
     * @returns {*}
     */

    singlePagesDomain(id, domain, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/pages/domains/${encodeURIComponent(domain)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new pages domain. The user must have permissions to create new pages domains..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.domain {string} - The domain
     * @param params.certificate {file/string} - The certificate in PEM format with intermediates following in most specific to least specific order.
     * @param params.key {file/string} - The certificate key in PEM format.
     * @returns {*}
     */

    createNewPagesDomain(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/pages/domains`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing project pages domain. The user must have permissions to change an existing pages domains..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.domain {string} - The domain
     * @param params.certificate {file/string} - The certificate in PEM format with intermediates following in most specific to least specific order.
     * @param params.key {file/string} - The certificate key in PEM format.
     * @returns {*}
     */

    updatePagesDomain(id, domain, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/pages/domains/${encodeURIComponent(domain)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing project pages domain..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.domain {string} - The domain
     * @returns {*}
     */

    deletePagesDomain(id, domain, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/pages/domains/${encodeURIComponent(domain)}`, params); // eslint-disable-line quotes
    }

}

module.exports = PagesDomains;

