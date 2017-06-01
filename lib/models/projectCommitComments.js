'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Commits Comments.
 */
class ProjectCommitComments extends ModelBase {

  /**
   * Create Project Commits Comments.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get the comments of a commit in a project.
   * @param id {number} - The ID of a project
   * @param sha {string} - The commit hash or name of a repository branch or tag
   * @returns {*}
   */
  list (id, sha) {
    return this.http.get(`/projects/${id}/repository/commits/${sha}/comments`, {});
  }

  /**
   * Adds a comment to a commit.
   * @param id {number} - The ID of a project
   * @param sha {string} - The commit hash or name of a repository branch or tag
   * @param params {object}
   * @param params.note {string} - Text of comment
   * @param [params.path] {string} - The file path
   * @param [params.line] {string} - The line number
   * @param [params.line_type] - The line type (new or old)
   * @returns {*}
   */
  create (id, sha, params) {
    return this.http.post(`/projects/${id}/repository/commits/${sha}/comments`, params);
  }

}

module.exports = ProjectCommitComments;
