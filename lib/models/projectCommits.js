'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Commits.
 */
class ProjectCommits extends ModelBase {

  /**
   * Create Project Commits.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  init () {
    this.comments = this.load('projectCommitComments');
    this.status = this.load('projectCommitsStatus');
  }

  /**
   * Get a list of repository commits in a project.
   * @param id {number} - The ID of a project
   * @param ref_name {string} - The name of a repository branch or tag or if not given the default branch
   * @returns {*}
   */
  list (id, ref_name) {
    return this.http.get(`/projects/${id}/repository/commits`, {
      ref_name: ref_name,
    });
  }

  /**
   * Creates a new commit by posting JSON payload.
   * @param id {number} - The ID of a project
   * @param params {object} - FYI, https://docs.gitlab.com/ce/api/commits.html#create-a-commit-with-multiple-files-and-actions
   */
  create (id, params) {
    return this.http.post(`/projects/${id}/repository/commits`, params || {});
  }

  /**
   * Get a specific commit identified by the commit hash or name of a branch or tag.
   * @param id {number} - The ID of a project
   * @param sha {string} - The commit hash or name of a repository branch or tag
   * @returns {*}
   */
  one (id, sha) {
    return this.http.get(`/projects/${id}/repository/commits/${sha}`, {});
  }

  /**
   * Get the diff of a commit in a project.
   * @param id {number} - The ID of a project
   * @param sha {string} - The commit hash or name of a repository branch or tag
   * @returns {*}
   */
  diff (id, sha) {
    return this.http.get(`/projects/${id}/repository/commits/${sha}/diff`, {});
  }

}

module.exports = ProjectCommits;
