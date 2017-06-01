'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Deploy Keys.
 */
class ProjectDeployKeys extends ModelBase {

  /**
   * Create Project Deploy Keys.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get a list of a project's deploy keys.
   * @param id {number} - The ID of the project
   * @returns {*}
   */
  list (id) {
    return this.http.get(`/projects/${id}/keys`, {});
  }

  /**
   * Get a single key.
   * @param id {number} - The ID of the project
   * @param key_id {number} - The ID of the deploy key
   * @returns {*}
   */
  one (id, key_id) {
    return this.http.get(`/projects/${id}/keys/${key_id}`, {});
  }

  /**
   * Creates a new deploy key for a project.
   * @param id {number} - The ID of a project
   * @param title {string} - New deploy key's title
   * @param key {string} - New deploy key
   * @returns {Promise|*}
   */
  create (id, title, key) {
    return this.post(`/projects/${id}/keys`, {
      title: title,
      key: key,
    });
  }

  /**
   * Delete a deploy key from a project.
   * @param id {number} - The ID of a project
   * @param key_id {number} - The ID of the deploy key
   * @returns {*}
   */
  ['delete'] (id, key_id) {
    return this.http.delete(`/projects/${id}/keys/${key_id}`);
  }

}

module.exports = ProjectDeployKeys;
