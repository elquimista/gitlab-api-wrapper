"use strict";

const ModelBase = require('../modelBase');

/**
 * Class representing Users Api
 */
class Users extends ModelBase {

  /**
   * Create Users Api.
   * @param client {object} - Api instance
   */
  constructor (client) {
    super(client);
  }

  init () {
    this.keys = this.load('userKeys');
    this.emails = this.load('userEmails');
  }

  /**
   * List users.
   * @param emailOrUsername {string} - email or username
   * @param [page] {number} - page number
   * @param [per_page] {number} - page size
   * @returns {*}
   */
  search (emailOrUsername, page, per_page) {
    return this.http.get('/users', {
      search: emailOrUsername || '',
      page: page || 0,
      per_page: per_page || ModelBase.DefalutPerPage,
    });
  }

  /**
   * Single user.
   * @param id {number} - The ID of a user
   * @returns {*}
   */
  one (id) {
    return this.http.get(`/users/${id}`, {});
  }

  /**
   * Create a user.
   * @param params {object} - User infomation
   * @param params.email {string}
   * @param params.password {string}
   * @param params.username {string}
   * @param params.name {string}
   * @param [params.skype] {string}
   * @param [params.linkedin] {string}
   * @param [params.twitter] {string}
   * @param [params.website_url] {string}
   * @param [params.projects_limit] {number}
   * @param [params.extern_uid] {string}
   * @param [params.provider] {string}
   * @param [params.bio] {string}
   * @param [params.admin] {boolean}
   * @param [params.can_create_group] {boolean}
   * @param [params.confirm] {boolean}
   */
  create (params) {
    return this.http.post(`/users/`, params);
  }

  /**
   * Update a user.
   * @param id {number} - The ID of a user
   * @param params {object}
   * @param params.email {string}
   * @param params.password {string}
   * @param params.username {string}
   * @param params.name {string}
   * @param params.skype {string}
   * @param params.linkedin {string}
   * @param params.twitter {string}
   * @param params.website_url {string}
   * @param params.projects_limit {number}
   * @param params.extern_uid {string}
   * @param params.provider {string}
   * @param params.bio {string}
   * @param [params.admin] {boolean}
   * @param [params.can_create_group] {boolean}
   */
  update (id, params) {
    return this.http.put(`/users/${id}`, params);
  }

  /**
   * Delete a user.
   * @param id {number} - The ID of a user
   */
  ['delete'] (id) {
    return this.http.delete(`/users/${id}`);
  }

  /**
   * Gets currently authenticated user.
   * @returns {*}
   */
  current () {
    return this.http.get(`/user`, {});
  }

  /**
   * Blocks the specified user. Available only for admin.
   * @param uid {number} - id of specified user
   * @returns {*}
   */
  block (uid) {
    return this.http.put(`/users/${uid}/block`, {});
  }

  /**
   * Unblocks the specified user. Available only for admin.
   * @param uid {number} - id of specified user
   * @returns {*}
   */
  unblock (uid) {
    return this.http.put(`/users/${uid}/unblock`, {});
  }

  /**
   * Login to get private token.
   * @param email {string} - The email of user
   * @param password {string} - Valid password
   */
  session (email, password) {
    return this.http.post(`/session`, {
      email: email,
      password: password,
    });
  }

  /**
   * Get a list of namespaces. (As user: my namespaces, as admin: all namespaces)
   * @return {*}
   */
  namespaces () {
    return this.http.get(`/namespaces`, {});
  }

}

module.exports = Users;
