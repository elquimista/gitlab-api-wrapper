
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Milestones .
 */
class Milestones extends ModelBase {

     /**
     * Create Milestones .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Returns a list of project milestones..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.iids[] {Array[integer]} - Return only the milestones having the given iid

     * @param params.state {string} - Return only active or closed milestones
     * @param params.search {string} - Return only milestones with a title or description matching the provided string
     * @returns {*}
     */

    milestonesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/milestones`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a list of project milestones..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.iids[] {Array[integer]} - Return only the milestones having the given iid

     * @param params.state {string} - Return only active or closed milestones
     * @param params.search {string} - Return only milestones with a title or description matching the provided string
     * @returns {*}
     */

    listProjectMilestones(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/milestones`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single project milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSingleMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new project milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createNewMilestone(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/milestones`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing project milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    editMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Only for user with developer access to the project..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteProjectMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets all issues assigned to a single project milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getAllIssuesAssignedToASingleMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}/issues`, params); // eslint-disable-line quotes
    }

    /**
     * Gets all merge requests assigned to a single project milestone..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getAllMergeRequestsAssignedToASingleMilestone(id, milestone_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/milestones/${encodeURIComponent(milestone_id)}/merge_requests`, params); // eslint-disable-line quotes
    }

}

module.exports = Milestones;

