
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Members .
 */
class Members extends ModelBase {

     /**
     * Create Members .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Gets a list of group or project members viewable by the authenticated user..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param params {object}
     * @param params.query {string} - A query string to search for members
     * @returns {*}
     */

    listAllMembersOfAGroup(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/members`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of group or project members viewable by the authenticated user..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param params {object}
     * @param params.query {string} - A query string to search for members
     * @returns {*}
     */

    listAllMembersOfAProject(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/members`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a member of a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @returns {*}
     */

    getAMemberOfAGroup(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a member of a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @returns {*}
     */

    getAMemberOfAProject(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a member to a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param params {object}
     * @param params.user_id {integer} - The user ID of the new member
     * @param params.access_level {integer} - A valid access level
     * @param params.expires_at {string} - A date string in the format YEAR-MONTH-DAY
     * @returns {*}
     */

    addAMemberToAGroup(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/members`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a member to a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param params {object}
     * @param params.user_id {integer} - The user ID of the new member
     * @param params.access_level {integer} - A valid access level
     * @param params.expires_at {string} - A date string in the format YEAR-MONTH-DAY
     * @returns {*}
     */

    addAMemberToAProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/members`, params); // eslint-disable-line quotes
    }

    /**
     * Updates a member of a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @param params.access_level {integer} - A valid access level
     * @param params.expires_at {string} - A date string in the format YEAR-MONTH-DAY
     * @returns {*}
     */

    editAMemberOfAGroup(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Updates a member of a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @param params.access_level {integer} - A valid access level
     * @param params.expires_at {string} - A date string in the format YEAR-MONTH-DAY
     * @returns {*}
     */

    editAMemberOfAProject(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a user from a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @returns {*}
     */

    removeAMemberFromAGroup(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a user from a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @returns {*}
     */

    removeAMemberFromAProject(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Members;

