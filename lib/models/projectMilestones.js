'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Milestones.
 */
class ProjectMilestones extends ModelBase {

  /**
   * Create Project Milestones.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * List project milestones.
   * @param id {number} - The ID of a project
   * @param [iid] {number} - Return the milestone having the given iid
   * @returns {*}
   */
  list (id, iid) {
    return this.http.get(`/projects/${id}/milestones`, {iid: iid});
  }

  /**
   * Gets a single project milestone.
   * @param id {number} - The ID of a project
   * @param milestone_id {number} - The ID of a project milestone
   * @returns {*}
   */
  one (id, milestone_id) {
    return this.http.get(`/projects/${id}/milestones/${milestone_id}`, {});
  }

  /**
   * Creates a new project milestone.
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param params.title {string} - The title of an milestone
   * @param [params.description] {string} - The description of the milestone
   * @param [params.due_date] {string} - The due date of the milestone
   * @returns {*}
   */
  create (id, params) {
    return this.http.post(`/projects/${id}/milestones`, params);
  }

  /**
   * Updates an existing project milestone.
   * @param id {number} - The ID of a project
   * @param milestone_id {number} - The ID of a project milestone
   * @param params {object}
   * @param [params.title] {string} - The title of an milestone
   * @param [params.description] {string} - The description of the milestone
   * @param [params.due_date] {string} - The due date of the milestone
   * @returns {*}
   */
  update (id, milestone_id, params) {
    return this.http.put(`/projects/${id}/milestones/${milestone_id}`, params);
  }

  /**
   * Gets all issues assigned to a single project milestone.
   * @param id {number} - The ID of a project
   * @param milestone_id {number} - The ID of a project milestone
   * @returns {*}
   */
  getMilestoneIssues (id, milestone_id) {
    return this.http.get(`/projects/${id}/milestones/${milestone_id}/issues`, {});
  }

}

module.exports = ProjectMilestones;
