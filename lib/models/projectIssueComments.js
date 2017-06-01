'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Issue Comments.
 */
class PorjectIssueComments extends ModelBase {

  /**
   * Create Project Issue Comments.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Gets a list of all notes for a single issue.
   * @param id {number} - The ID of a project
   * @param issue_id {number} - The ID of an issue
   * @returns {*}
   */
  list (id, issue_id) {
    return this.http.get(`/projects/${id}/issues/${issue_id}/notes`, {});
  }

  /**
   * Returns a single note for a specific project issue.
   * @param id {number} - The ID of a project
   * @param issue_id {number} - The ID of an issue
   * @param note_id {number} - The ID of an issue note
   * @returns {*}
   */
  one (id, issue_id, note_id) {
    return this.http.get(`/projects/${id}/issues/${issue_id}/notes/${note_id}`, {});
  }

  /**
   * Creates a new note to a single project issue.
   * @param id {number} - The ID of a project
   * @param issue_id {number} - The ID of an issue
   * @param body {string} - The content of a note
   * @returns {*}
   */
  create (id, issue_id, body) {
    return this.http.post(`/projects/${id}/issues/${issue_id}/notes`, {
      body: body,
    });
  }

  /**
   * Modify existing note of an issue.
   * @param id {number} - The ID of a project
   * @param issue_id {number} - The ID of an issue
   * @param note_id {number} - The ID of an issue note
   * @param body {string} - The content of a note
   * @returns {*}
   */
  update (id, issue_id, note_id, body) {
    return this.http.put(`/projects/:id/issues/:issue_id/notes/:note_id`, {
      body: body,
    });
  }

}

module.exports = PorjectIssueComments;
