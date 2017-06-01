'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Issues.
 */
class PorjectIssues extends ModelBase {

  /**
   * Create Project Issues.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  init () {
    this.comments = this.load('projectIssueComments');
  }

  /**
   * Get all issues created by authenticated user.
   * @param params
   * @param [params.state] {string} - Return all issues or just those that are opened or closed
   * @param [params.labels] {string} - Comma-separated list of label names
   * @param [params.order_by] {string} - Return requests ordered by created_at or updated_at fields. Default is created_at
   * @param [params.sort] {string} - Return requests sorted in asc or desc order. Default is desc
   * @param [params.page] {number} - page number
   * @param [params.per_page] {number} - page size
   */
  listMy (params) {
    return this.http.get(`/issues`, params || {});
  }

  /**
   * Get a list of project issues.
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param [params.page] {number} - Page number
   * @param [params.per_page] {number} - Page size
   * @param [params.iid] {number} - The ID of a project
   * @param [params.state] {string} - Return all issues or just those that are opened or closed
   * @param [params.labels] {string} - Comma-separated list of label names
   * @param [params.milestone] {string} - Milestone title
   * @param [params.order_by] {string} - Return requests ordered by created_at or updated_at fields. Default is created_at
   * @param [params.sort] {string} - Return requests sorted in asc or desc order. Default is desc
   * @returns {*}
   */
  list (id, params) {
    return this.http.get(`/projects/${id}/issues`, params || {});
  }

  /**
   * Gets a single project issue.
   * @param id - The ID of a project
   * @param issue_id - The ID of a project issue
   * @returns {*}
   */
  one (id, issue_id) {
    return this.http.get(`/projects/${id}/issues/${issue_id}`, {});
  }

  /**
   * Creates a new project issue.
   * @param id - The ID of a project
   * @param params {object}
   * @param params.title {string} - The title of an issue
   * @param [params.description] {string} - The description of an issue
   * @param [params.assignee_id] {number} - The ID of a user to assign issue
   * @param [params.milestone_id] {number} - The ID of a milestone to assign issue
   * @param [params.labels} {string} - Comma-separated label names for an issue
   * @returns {*}
   */
  create (id, params) {
    return this.http.post(`/projects/${id}/issues`, params || {});
  }

  /**
   * Updates an existing project issue.
   * @param id {number} - The ID of a project
   * @param issue_id {number} - The ID of a project's issue
   * @param params {object}
   * @param [params.title] {string} - The title of an issue
   * @param [params.description] {string} - The description of an issue
   * @param [params.assignee_id] {number} - The ID of a user to assign issue
   * @param [params.milestone_id] {number} - The ID of a milestone to assign issue
   * @param [params.labels} {string} - Comma-separated label names for an issue
   * @param [params.state_event] {string} - The state event of an issue ('close' to close issue and 'reopen' to reopen it)
   * @returns {*}
   */
  update (id, issue_id, params) {
    return this.http.put(`/projects/${id}/issues/${issue_id}`, params || {});
  }

}

module.exports = PorjectIssues;
