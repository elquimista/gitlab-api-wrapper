
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Group Milestones .
 */
class GroupMilestones extends ModelBase {

     /**
     * Create Group Milestones .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Returns a list of group milestones..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.iids[] {Array[integer]} - Return only the milestones having the given iid

     * @param params.state {string} - Return only active or closed milestones
     * @param params.search {string} - Return only milestones with a title or description matching the provided string
     * @returns {*}
     */

    groupMilestonesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/milestones`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a list of group milestones..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.iids[] {Array[integer]} - Return only the milestones having the given iid

     * @param params.state {string} - Return only active or closed milestones
     * @param params.search {string} - Return only milestones with a title or description matching the provided string
     * @returns {*}
     */

    listGroupMilestones(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/milestones`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single group milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSingleMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new group milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createNewMilestone(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/milestones`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing group milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    editMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Only for user with developer access to the group..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteGroupMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets all issues assigned to a single group milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getAllIssuesAssignedToASingleMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Gets all merge requests assigned to a single group milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getAllMergeRequestsAssignedToASingleMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}/merge_requests`, params); // eslint-disable-line quotes
    }

}

module.exports = GroupMilestones;

