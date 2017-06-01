'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Members.
 */
class PorjectMembers extends ModelBase {

  /**
   * Create Project Members.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get a list of a project's team members.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param [query] {string} - Query string to search for members
   * @returns {*}
   */
  list (id, query) {
    return this.http.get(`/projects/${id}/members`, {
      query: query || '',
    });
  }

  /**
   * Gets a project team member.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param user_id {number} - The ID of a user
   * @returns {*}
   */
  one (id, user_id) {
    return this.http.get(`/projects/${id}/members/${user_id}`, {});
  }

  /**
   * Adds a user to a project team.
   * @param id {nunmber} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param user_id {number} - The ID of a user to add
   * @param access_level {string} - Project access level
   * @returns {*}
   */
  add (id, user_id, access_level) {
    return this.http.post(`/projects/${id}/members`, {
      user_id: user_id,
      access_level: access_level,
    });
  }

  /**
   * Updates a project team member to a specified access level.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param user_id {number} - The ID of a user to update
   * @param params {object}
   * @param params.access_level {string} - Project access level
   */
  update (id, user_id, params) {
    return this.http.put(`/projects/${id}/members/${user_id}`, params);
  }

  /**
   * Removes a user from a project team.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param user_id {number} - The ID of a team member
   * @returns {*}
   */
  remove (id, user_id) {
    return this.http.delete(`/projects/${id}/members/${user_id}`);
  }

}

module.exports = PorjectMembers;
