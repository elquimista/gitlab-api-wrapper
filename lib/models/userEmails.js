"use strict";

const ModelBase = require('../modelBase');

/**
 * Class representing User Emails.
 */
class UserEmails extends ModelBase {

  /**
   * Create User Emails.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get a list of currently authenticated user's emails.
   * @returns {*}
   */
  list () {
    return this.http.get(`/user/emails`, {});
  }

  /**
   * Get a list of a specified user's emails. Available only for admin.
   * @param uid {number} - id of specified user
   * @returns {*}
   */
  listForUser (uid) {
    return this.http.get(`/users/${uid}/emails`, {});
  }

  /**
   * Get a single email.
   * @param id {number} - email ID
   * @returns {*}
   */
  one (id) {
    return this.http.get(`/user/emails/${id}`, {});
  }

  /**
   * Creates a new email owned by the currently authenticated user.
   * @param email {string} - email address
   */
  create (email) {
    return this.http.post(`/user/emails`, {
      email: email,
    });
  }

  /**
   * Create new email owned by specified user. Available only for admin.
   * @param id {number} - id of specified user
   * @param email {string} - email address
   * @returns {*}
   */
  createForUser (id, email) {
    return this.http.post(`/users/${id}/emails`, {
      email: email,
    });
  }

  /**
   * Deletes email owned by currently authenticated user.
   * @param id {number} - email ID
   * @returns {*}
   */
  ['delete'] (id) {
    return this.http.delete(`/user/emails/${id}`, {});
  }

  /**
   * Deletes email owned by a specified user. Available only for admin.
   * @param uid {number} - id of specified user
   * @param id {number} - email ID
   * @returns {*}
   */
  deleteForUser (uid, id) {
    return this.http.delete(`/users/${uid}/emails/${id}`, {});
  }

}

module.exports = UserEmails;
