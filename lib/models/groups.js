"use strict";

const ModelBase = require('../modelBase');

/**
 * Class representing Groups Api
 */
class Groups extends ModelBase {

  /**
   * Create Users Api.
   * @param client {object} - Api instance
   */
  constructor (client) {
    super(client);
  }

  init () {
    this.members = this.load('groupMembers');
  }

  /**
   * Get group access levels.
   */
  static get ACCESS_LEVELS() {
    return {
      GUEST: 10,    
      REPORTER: 20,
      DEVELOPER: 30,
      MASTER: 40,
      OWNER: 50
    };
  }

  /**
   * List groups. Get a list of groups. (As user: my groups, as admin: all groups)   
   * @returns {*}
   */
  list () {
    return this.http.get(`/groups`, {});
  }

  /**
   * List a group's projects. Get a list of projects in this group. 
   * @param {number} id - The ID or path of a group. 
   * @param {Object} params
   * @param {string=} params.archived - if passed, limit by archived status.
   * @param {string} [params.order_by=created_at] - Return requests ordered by id, name, path, created_at, updated_at or last_activity_at fields. Default is created_at.
   * @param {string} [params.sort=desc] - Return requests sorted in asc or desc order. Default is desc.
   * @param {string=} params.search - Return list of authorized projects according to a search criteria.
   * @param {boolean} [params.ci_enabled_first=false] Return projects ordered by ci_enabled flag. Projects with enabled GitLab CI go first. 
   * @returns {*}
   */ 
  projects (id, params) {
    params = params || {};

    return this.http.get(`/groups/${encodeURIComponent(id)}/projects`, params)
  }

  /**  
   * Details of a group. Get all details of a group. 
   * @param {number} id - The ID or path of a group.
   * @returns {*}
   */
  detail (id) {
    return this.http.get(`/groups/${encodeURIComponent(id)}`, {});
  }

  /**
   * New group. Creates a new project group. Available only for users who can create groups. 
   * @param {Object} params
   * @param {string} params.name - The name of the group.
   * @param {string} params.path - The path of the group.
   * @param {string=} params.description - The group's description.
   * @returns {*}
   */
  create (params) {
    return this.http.post(`/groups`, params);
  }

  /**
   * Transfer project to group.Transfer a project to the Group namespace. Available only for admin.
   * @param {number} id - The ID or path of a group.
   * @param {number} project_id - The ID of a project.
   * @returns {*}
   */
  transfer (id, project_id) {
    return this.http.post(`/groups/${encodeURIComponent(id)}/projects/${encodeURIComponent(project_id)}`, {});
  }

  /**
   * Remove group.Removes group with all projects inside.
   * @param {number} id - The ID or path of a user group
   * @returns {*}
   */
  remove (id) {
    return this.http.delete(`/groups/${encodeURIComponent(id)}`, {});
  }

  /**
   * Search for group.Get all groups that match your string in their name or path.
   * @param {Object} params
   * @param {string} params.search
   * @returns {*}
   */
  search (params) {
    return this.http.get(`/groups`, params);
  }

  /**
   * Namespaces in groups.By default, groups only get 20 namespaces at a time because the API results are paginated.To get more (up to 100), pass the following as an argument to the API call: 
   * @param {Object=} params
   * @param {number} [per_page=20] 
   * @param {number} [page=1]
   * @returns {*}
   */
  namespaces (params) {
    params = params || {};

    return this.http.get(`/groups`, params);
  }  
}

module.exports = Groups;
