"use strict";

const ModelBase = require('../modelBase');

/**
 * Class representing User Keys.
 */
class UserKeys extends ModelBase {

  /**
   * Create User Keys.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get a list of currently authenticated user's SSH keys.
   * @returns {*}
   */
  list () {
    return this.http.get(`/user/keys`, {});
  }

  /**
   * Get a list of a specified user's SSH keys. Available only for admin.
   * @param uid {number} - The ID for a user
   */
  listForUser (uid) {
    return this.http.get(`/users/${uid}/keys`, {});
  }

  /**
   * Get a single key.
   * @param id {number} - The ID of a key
   * @returns {*}
   */
  one (id) {
    return this.http.get(`/user/keys/${id}`, {});
  }

  /**
   * Creates a new key owned by the currently authenticated user.
   * @param title {string} - new SSH Key's title
   * @param key {string} - key
   * @returns {*}
   */
  create (title, key) {
    return this.http.post(`/user/keys`, {
      title: title,
      key: key,
    });
  }

  /**
   * Create new key owned by specified user. Available only for admin
   * @param id - id of specified user
   * @param title {string} - new SSH Key's title
   * @param key {string} - new SSH key
   * @returns {*}
   */
  createForUser (id, title, key) {
    return this.http.post(`/user/${id}/keys`, {
      title: title,
      key: key,
    });
  }

  /**
   * Deletes key owned by currently authenticated user.
   * @param id {number} - SSH key ID
   * @returns {*}
   */
  ['delete'] (id) {
    return this.http.delete(`/users/keys/${id}`);
  }

  /**
   * Deletes key owned by a specified user. Available only for admin.
   * @param uid {number} - id of specified user
   * @param id {number} - SSH key ID
   * @returns {*}
   */
  deleteForUser (uid, id) {
    return this.http.delete(`/users/${uid}/keys/${id}`);
  }

}

module.exports = UserKeys;
