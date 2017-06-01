'use strict';

const ModelBase = require('../modelBase.js');

/**
 * Class representing Group Members.
 */
class GroupMembers extends ModelBase {
  /**
   * Create Group Members.
   * @param client
   */
  constructor (client) {
      super(client);
  }

  /**
   * List group members.Get a list of group members viewable by the authenticated user.
   * @param {number} id - The ID or path of a user group
   * @returns {*}
   */
  list (id) {
    return this.http.get(`/groups/${encodeURIComponent(id)}/members`, {});
  }

  /**
   * Add group member.Adds a user to the list of group members.
   * @param {number} id - The ID or path of a group.
   * @param {Object} params 
   * @param {number} params.user_id - The ID of a user to add.
   * @param {number} params.access_level - Project access level.
   * @returns {*}
   */  
  add (id, params) {
    return this.http.post(`/groups/${encodeURIComponent(id)}/members`, params);
  }

  /**
   * Edit group team member.Updates a group team member to a specified access level.
   * @param {number} id - The ID of a group.
   * @param {number} user_id - The ID of a group member.
   * @param {Object} params
   * @param {number} params.access_level - Project access level.
   * @returns {*}
   */
  update (id, user_id, params) {
    return this.http.put(`/groups/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, params);
  }

  /**
   * Remove user team member.Removes user from user team.
   * @param {number} id - The ID or path of a user group.
   * @param {number} user_id - The ID of a group member.
   * @returns {*}
   */
  remove (id, user_id) {
    return this.http.delete(`/groups/${encodeURIComponent(id)}/members/${encodeURIComponent(user_id)}`, {});
  }
}

module.exports = GroupMembers;
