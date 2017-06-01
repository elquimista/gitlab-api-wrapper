'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Commits Status.
 */
class ProjectCommitsStauts extends ModelBase {

  /**
   * Create Project Commits Status.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get the statuses of a commit in a project.
   * @param id {number} - The ID of a project
   * @param sha {string} - The commit hash or name of a repository branch or tag
   * @param params {object}
   * @param [params.ref] {string} - Filter by ref name, it can be branch or tag
   * @param [params.stage] {string} - Filter by stage
   * @param [params.name] {string} - Filer by status name, eg. jenkins
   * @param [params.all] {string} - The flag to return all statuses, not only latest ones
   * @returns {*}
   */
  list (id, sha, params) {
    return this.http.get(`/projects/${id}/repository/commits/${sha}/statuses`, params);
  }

  /**
   * Adds or updates a status of a commit.
   * @param id {number} - The ID of a project
   * @param sha {string} - The commit hash or name of a repository branch or tag
   * @param params {object}
   * @param params.state {string} - The state of the status. Can be: pending, running, success, failed, canceled
   * @param [params.ref] {string} - Filter by ref name, it can be branch or tag
   * @param [params.name | params.context] {string} - The label to differentiate this status from the status of other systems. Default: "default"
   * @param [params.target_url] {string} - The target URL to associate with this status
   * @param [params.description] {string} - The short description of the status
   * @returns {*}
   */
  create (id, sha, params) {
    return this.http.post(`/projects/${id}/statuses/${sha}`, params);
  }

}

module.exports = ProjectCommitsStauts;
