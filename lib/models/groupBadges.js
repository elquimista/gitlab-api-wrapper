
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Group Badges .
 */
class GroupBadges extends ModelBase {

     /**
     * Create Group Badges .
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

    groupBadgesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/badges`, params); // eslint-disable-line quotes
    }

    /**
     * Badges support placeholders that will be replaced in real time in both the link and image URL. The allowed placeholders are:.

     * @param params {object}
     * @param params. {} - undefined
     * @returns {*}
     */

    placeholderTokens(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/badges`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of a group’s badges..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listAllBadgesOfAGroup(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/badges`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a badge of a group..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param badge_id {integer} - The badge ID
     * @param params {object}
     * @returns {*}
     */

    getABadgeOfAGroup(id, badge_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/badges/${encodeURIComponent(badge_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a badge to a group..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.link_url {string} - URL of the badge link
     * @param params.image_url {string} - URL of the badge image
     * @returns {*}
     */

    addABadgeToAGroup(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/badges`, params); // eslint-disable-line quotes
    }

    /**
     * Updates a badge of a group..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param badge_id {integer} - The badge ID
     * @param params {object}
     * @param params.link_url {string} - URL of the badge link
     * @param params.image_url {string} - URL of the badge image
     * @returns {*}
     */

    editABadgeOfAGroup(id, badge_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/badges/${encodeURIComponent(badge_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a badge from a group..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param badge_id {integer} - The badge ID
     * @param params {object}
     * @returns {*}
     */

    removeABadgeFromAGroup(id, badge_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/badges/${encodeURIComponent(badge_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Returns how the link_url and image_url final URLs would be after resolving the placeholder interpolation..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.link_url {string} - URL of the badge link
     * @param params.image_url {string} - URL of the badge image
     * @returns {*}
     */

    previewABadgeFromAGroup(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/badges/render`, params); // eslint-disable-line quotes
    }

}

module.exports = GroupBadges;

