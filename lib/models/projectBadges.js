
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Project Badges .
 */
class ProjectBadges extends ModelBase {

     /**
     * Create Project Badges .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Badges support placeholders that will be replaced in real time in both the link and image URL. The allowed placeholders are:.

     * @param params {object}
     * @param params. {} - undefined
     * @returns {*}
     */

    projectBadgesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/badges`, params); // eslint-disable-line quotes
    }

    /**
     * Badges support placeholders that will be replaced in real time in both the link and image URL. The allowed placeholders are:.

     * @param params {object}
     * @param params. {} - undefined
     * @returns {*}
     */

    placeholderTokens(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/badges`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of a project’s badges and its group badges..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listAllBadgesOfAProject(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/badges`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a badge of a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param badge_id {integer} - The badge ID
     * @param params {object}
     * @returns {*}
     */

    getABadgeOfAProject(id, badge_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/badges/${encodeURIComponent(badge_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a badge to a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project  owned by the authenticated user
     * @param params {object}
     * @param params.link_url {string} - URL of the badge link
     * @param params.image_url {string} - URL of the badge image
     * @returns {*}
     */

    addABadgeToAProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/badges`, params); // eslint-disable-line quotes
    }

    /**
     * Updates a badge of a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param badge_id {integer} - The badge ID
     * @param params {object}
     * @param params.link_url {string} - URL of the badge link
     * @param params.image_url {string} - URL of the badge image
     * @returns {*}
     */

    editABadgeOfAProject(id, badge_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/badges/${encodeURIComponent(badge_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a badge from a project. Only project’s badges will be removed by using this endpoint..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param badge_id {integer} - The badge ID
     * @param params {object}
     * @returns {*}
     */

    removeABadgeFromAProject(id, badge_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/badges/${encodeURIComponent(badge_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Returns how the link_url and image_url final URLs would be after resolving the placeholder interpolation..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.link_url {string} - URL of the badge link
     * @param params.image_url {string} - URL of the badge image
     * @returns {*}
     */

    previewABadgeFromAProject(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/badges/render`, params); // eslint-disable-line quotes
    }

}

module.exports = ProjectBadges;

