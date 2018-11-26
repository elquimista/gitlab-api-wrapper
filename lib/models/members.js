
'use strict';

/*eslint-disable */
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
     * Gets a list of group or project members viewable by the authenticated user.
Returns only direct members and not inherited members through ancestors groups..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param params {object}
     * @param params.query {string} - A query string to search for members
     * @returns {*}
     */

    listAllMembersOfAGroupOrProjectProjects(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/members`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of group or project members viewable by the authenticated user.
Returns only direct members and not inherited members through ancestors groups..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param params {object}
     * @param params.query {string} - A query string to search for members
     * @returns {*}
     */

    listAllMembersOfAGroupOrProjectGroups(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/members`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of group or project members viewable by the authenticated user, including inherited members through ancestor groups.
Returns multiple times the same user (with different member attributes) when the user is a member of the project/group and of one or more ancestor group..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param params {object}
     * @param params.query {string} - A query string to search for members
     * @returns {*}
     */

    listAllMembersOfAGroupOrProjectIncludingInheritedMembersProjects(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/members/all`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of group or project members viewable by the authenticated user, including inherited members through ancestor groups.
Returns multiple times the same user (with different member attributes) when the user is a member of the project/group and of one or more ancestor group..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param params {object}
     * @param params.query {string} - A query string to search for members
     * @returns {*}
     */

    listAllMembersOfAGroupOrProjectIncludingInheritedMembersGroups(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/members/all`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a member of a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @returns {*}
     */

    getAMemberOfAGroupOrProjectProjects(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a member of a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @returns {*}
     */

    getAMemberOfAGroupOrProjectGroups(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
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

    addAMemberToAGroupOrProjectProjects(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/members`, params); // eslint-disable-line quotes
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

    addAMemberToAGroupOrProjectGroups(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/members`, params); // eslint-disable-line quotes
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

    editAMemberOfAGroupOrProjectProjects(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
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

    editAMemberOfAGroupOrProjectGroups(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a user from a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @returns {*}
     */

    removeAMemberFromAGroupOrProjectProjects(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a user from a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project or group owned by the authenticated user
     * @param user_id {integer} - The user ID of the member
     * @param params {object}
     * @returns {*}
     */

    removeAMemberFromAGroupOrProjectGroups(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Members;

