'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Hooks.
 */
class PorjectHooks extends ModelBase {

  /**
   * Create Project Hooks.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get a list of a project's team members.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @returns {*}
   */
  list (id) {
    return this.http.get(`/projects/${encodeURIComponent(id)}/hooks`, {});
  }

  /**
   * Gets a project hoook.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param hook_id {number} - The ID of a project hook
   * @returns {*}
   */
  one (id, hook_id) {
    return this.http.get(`/projects/${id}/hooks/${hook_id}`, {});
  }

  /**
   * Adds a hook to a specified project.
   * @param id {nunmber} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param params {object}
   * @param params.url {string} - The hook URL
   * @param [params.push_events] {boolean} - Trigger hook on push events
   * @param [params.issues_events] {boolean} - Trigger hook on issues events
   * @param [params.merge_requests_events] {boolean} - Trigger hook on merge_requests events
   * @param [params.tag_push_events] {boolean} - Trigger hook on push_tag events
   * @param [params.note_events] {boolean} - Trigger hook on note events
   * @param [params.enable_ssl_verification] {boolean} - Do SSL verification when triggering the hook
   * @returns {*}
   */
  create (id, params) {
    return this.http.post(`/projects/${id}/hooks`, params);
  }

  /**
   * Edits a hook for a specified project.
   * @param id {nunmber} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param hook_id {number} - The ID of a project hook
   * @param params {object}
   * @param params.url {string} - The hook URL
   * @param [params.push_events] {boolean} - Trigger hook on push events
   * @param [params.issues_events] {boolean} - Trigger hook on issues events
   * @param [params.merge_requests_events] {boolean} - Trigger hook on merge_requests events
   * @param [params.tag_push_events] {boolean} - Trigger hook on push_tag events
   * @param [params.note_events] {boolean} - Trigger hook on note events
   * @param [params.enable_ssl_verification] {boolean} - Do SSL verification when triggering the hook
   * @returns {*|Promise}
   */
  update (id, hook_id, params) {
    return this.http.put(`/projects/${id}/hooks/${hook_id}`, params);
  }

  /**
   * Removes a hook from a project.
   * @param id {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @param hook_id {number} - The ID of a hook to delete
   * @returns {*}
   */
  ['delete'] (id, hook_id) {
    return this.http.delete(`/projects/${id}/hooks/${hook_id}`);
  }

}

module.exports = PorjectHooks;
