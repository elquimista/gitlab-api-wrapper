'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Tag Release.
 */
class ProjectTags extends ModelBase {

  /**
   * Create Project Tag Release.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Add release notes to the existing git tag.
   * @param id {number} - The ID of a project
   * @param tag_name {string} - The name of a tag
   * @param description {stirng} - Release notes with markdown support
   * @returns {*}
   */
  create (id, tag_name, description) {
    return this.http.post(`/projects/${id}/repository/tags/${tag_name}/release`, {
      description: description,
    });
  }

  /**
   * Updates the release notes of a given release.
   * @param id {number} - The ID of a project
   * @param tag_name {string} - The name of a tag
   * @param description {stirng} - Release notes with markdown support
   * @returns {*}
   */
  update (id, tag_name, description) {
    return this.http.put(`/projects/${id}/repository/tags/${tag_name}/release`, {
      description: description,
    });
  }

}

module.exports = ProjectTags;
