'use strict';

const ModelBase  = require('../modelBase');

/**
 * Class representing Project MergeRequest Comments.
 */
class ProjectMergeRequestComments extends ModelBase {

  /**
   * Create Project MergeRequest Comments.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Gets all the comments associated with a merge request.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   */
  list (id, merge_request_id) {
    return this.http.get(`/projects/${id}/merge_request/${merge_request_id}/comments`, {});
  }

  /**
   * Returns a single note for a given merge request.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of a project merge request
   * @param note_id {number} - The ID of a merge request note
   * @returns {*}
   */
  one (id, merge_request_id, note_id) {
    return this.http.get(`/projects/${id}/merge_requests/${merge_request_id}/notes/${note_id}`, {});
  }

  /**
   * Adds a comment to a merge request.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   * @param body {string} - The content of a note
   */
  create (id, merge_request_id, body) {
    return this.http.post(`/projects/${id}/merge_request/${merge_request_id}/notes`, {
      body: body,
    });
  }

  /**
   * Modify existing note of a merge request.
   * @param id {number} - The ID of a project
   * @param merge_request_id {number} - The ID of MR
   * @param note_id {number} - The ID of a merge request note
   * @param body {string} - The content of a note
   */
  update (id, merge_request_id, note_id, body) {
    return this.http.put(`/projects/${id}/merge_requests/${merge_request_id}/notes/${note_id}`, {
      body: body,
    });
  }

}

module.exports = ProjectMergeRequestComments;
