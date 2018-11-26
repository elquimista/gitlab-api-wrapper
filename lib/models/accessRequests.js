
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Access Requests .
 */
class AccessRequests extends ModelBase {

     /**
     * Create Access Requests .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Gets a list of access requests viewable by the authenticated user..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listAccessRequestsForAGroupOrProjectProjects(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/access_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of access requests viewable by the authenticated user..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listAccessRequestsForAGroupOrProjectGroups(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/access_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Requests access for the authenticated user to a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    requestAccessToAGroupOrProjectProjects(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/access_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Requests access for the authenticated user to a group or project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    requestAccessToAGroupOrProjectGroups(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/access_requests`, params); // eslint-disable-line quotes
    }

    /**
     * Approves an access request for the given user..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param user_id {integer} - The user ID of the access requester
     * @param params {object}
     * @param params.access_level {integer} - A valid access level (defaults: 30, developer access level)
     * @returns {*}
     */

    approveAnAccessRequestProjects(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/access_requests/${encodeURIComponent(user_id)}/approve`, params); // eslint-disable-line quotes
    }

    /**
     * Approves an access request for the given user..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param user_id {integer} - The user ID of the access requester
     * @param params {object}
     * @param params.access_level {integer} - A valid access level (defaults: 30, developer access level)
     * @returns {*}
     */

    approveAnAccessRequestGroups(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/access_requests/${encodeURIComponent(user_id)}/approve`, params); // eslint-disable-line quotes
    }

    /**
     * Denies an access request for the given user..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param user_id {integer} - The user ID of the access requester
     * @param params {object}
     * @returns {*}
     */

    denyAnAccessRequestProjects(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/access_requests/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Denies an access request for the given user..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param user_id {integer} - The user ID of the access requester
     * @param params {object}
     * @returns {*}
     */

    denyAnAccessRequestGroups(id, user_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/access_requests/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = AccessRequests;

