'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Branches.
 */
class ProjectBranches extends ModelBase {

  /**
   * Create Project Branches.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Lists all branches of a project.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   */
  list (id) {
    return this.http.get(`/projects/${id}/repository/branches`);
  }

  /**
   * Lists a specific branch of a project.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param branch {string} - The name of the branch
   * @returns {*}
   */
  one (id, branch) {
    return this.http.get(`/projects/${id}/repository/branches/${branch}`, {});
  }

  /**
   * Protects a single branch of a project.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param branch {string} - The name of the branch
   */
  protect (id, branch) {
    return this.http.put(`/projects/${id}/repository/branches/${branch}/protect`, {});
  }

  /**
   * Unprotects a single branch of a project.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param branch {string} - The name of the branch
   */
  unprotect (id, branch) {
    return this.http.put(`/projects/${id}/repository/branches/${branch}/unprotect`, {});
  }

  /**
   * Create repository branch.
   * @param id {number} - The ID of a project
   * @param branch_name {string} - The name of the branch
   * @param ref {string} - Create branch from commit SHA or existing branch
   * @returns {*}
   */
  create (id, branch_name, ref) {
    return this.http.post(`/projects/${id}/repository/branches`, {
      branch_name: branch_name,
      ref: ref,
    });
  }

  /**
   * Delete repository branch.
   * @param id {number} - The ID of a project
   * @param branch {string} - The name of the branch
   * @returns {*}
   */
  ['delete'] (id, branch) {
    return this.http.delete(`/projects/${id}/repository/branches/${branch}`, {});
  }

}

module.exports = ProjectBranches;
