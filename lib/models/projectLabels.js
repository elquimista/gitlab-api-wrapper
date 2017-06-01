'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Labels.
 */
class ProjectLabels extends ModelBase {

  /**
   * Create Project Labels.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get all labels for given project.
   * @param id {number} - The ID of a project
   * @returns {*}
   */
  list (id) {
    return this.http.get(`/projects/${id}/labels`, {});
  }

  /**
   * Create a new label.
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param params.name {string} - The name of the label
   * @param params.color {string} - Color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)
   * @returns {*}
   */
  create (id, params) {
    return this.http.post(`/projects/${id}/labels`, params);
  }

  /**
   * Deletes a label given by its name.
   * @param id {number} - The ID of a project
   * @param name {string} - The name of the label
   * @returns {*|boolean}
   */
  ['delete'] (id, name) {
    return this.http.delete(`/projects/${id}/labels`, {
      name: name,
    });
  }

}

module.exports = ProjectLabels;
