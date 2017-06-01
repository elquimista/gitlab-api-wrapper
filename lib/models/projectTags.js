'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Tags.
 */
class ProjectTags extends ModelBase {

  /**
   * Create Project Tags.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  init () {
    this.release = this.load('projectTagRelease');
  }

  /**
   * Get a list of repository tags from a project, sorted by name in reverse alphabetical order.
   * @param id {number} - The ID of a project
   * @returns {*}
   */
  list (id) {
    return this.http.get(`/projects/${id}/repository/tags`, {});
  }

  /**
   * Creates a new tag in the repository that points to the supplied ref.
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param params.tag_name {string} - The name of a tag
   * @param params.ref {string} - Create tag using commit SHA, another tag name, or branch name.
   * @param [params.message] {string} - Creates annotated tag
   * @param [params.release_description] {string} - Add release notes to the git tag and store it in the GitLab database
   * @returns {*}
   */
  create (id, params) {
    return this.http.post(`/projects/${id}/repository/tags`, params);
  }

}

module.exports = ProjectTags;
