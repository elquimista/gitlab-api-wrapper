'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project MergeRequests.
 */
class ProjectMergeRequests extends ModelBase {

  /**
   * Create Project MergeRequests.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  init () {
    this.comments = this.load('projectMergeRequestComments');
  }

  /**
   * List merge requests.
   * @param id {number} - The ID of a project
   * @param query {object}
   * @param [query.iid] {number} - Return the request having the given iid
   * @param [query.state] {string} - Return all requests or just those that are merged, opened or closed
   * @param [query.order_by] {string} - Return requests ordered by created_at or updated_at fields. Default is created_at
   * @param [query.sort] {string} - Return requests sorted in asc or desc order. Default is desc
   * @param [query.page] {number} - page number
   * @param [query.per_page] {number} - page size
   * @returns {*}
   */
  list (id, query) {
    return this.http.get(`/projects/${id}/merge_requests`, query);
  }

  /**
   * Get single MR.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   * @returns {*}
   */
  one (id, merge_request_id) {
    return this.http.get(`/projects/${id}/merge_request/${merge_request_id}`, {});
  }

  /**
   * Get a list of merge request commits.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   * @returns {*}
   */
  commits (id, merge_request_id) {
    return this.http.get(`/projects/${id}/merge_request/${merge_request_id}/commits`, {});
  }

  /**
   * Shows information about the merge request including its files and changes.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   * @returns {*}
   */
  changes (id, merge_request_id) {
    return this.http.get(`/projects/${id}/merge_request/${merge_request_id}/changes`, {});
  }

  /**
   * Creates a new merge request.
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param params.source_branch {string} - The source branch
   * @param params.target_branch {string} - The target branch
   * @param [params.assignee_id] {number} - Assignee user ID
   * @param params.title {string} - Title of MR
   * @param [params.description] {string} - Description of MR
   * @param [params.target_project_id] {number} - The target project (numeric id)
   * @param [params.labels] {string} - Labels for MR as a comma-separated list
   * @returns {*}
   */
  create (id, params) {
    return this.http.post(`/projects/${id}/merge_requests`, params);
  }

  /**
   * Updates an existing merge request.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   * @param params {object}
   * @param params.target_branch {string} - The target branch
   * @param params.assignee_id {number} - Assignee user ID
   * @param params.title {string} - Title of MR
   * @param params.description {string} - Description of MR
   * @param params.state_event {string} - New state (close|reopen|merge)
   * @param [params.labels] {string} - Labels for MR as a comma-separated list
   * @returns {*}
   */
  update (id, merge_request_id, params) {
    return this.http.put(`/projects/${id}/merge_request/${merge_request_id}`, params);
  }

  /**
   * Merge changes submitted with MR using this API.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   * @param params {object}
   * @param [params.merge_commit_message] {string} - Custom merge commit message
   * @param [params.should_remove_source_branch] {boolean} - if true removes the source branch
   * @param [params.merged_when_build_succeeds] {boolean} - if true the MR is merge when the build succeeds
   * @returns {*}
   */
  accept (id, merge_request_id, params) {
    return this.http.put(`/projects/${id}/merge_request/${merge_request_id}/merge`, params);
  }

  /**
   * Cancel Merge When Build Succeeds.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   * @returns {*|Promise}
   */
  cancel (id, merge_request_id) {
    return this.put(`/projects/${id}/merge_request/${merge_request_id}/cancel_merge_when_build_succeeds`, {});
  }

}

module.exports = ProjectMergeRequests;
