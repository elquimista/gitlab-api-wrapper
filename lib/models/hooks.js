"use strict";

const ModelBase = require('../modelBase');

/**
 * Class representing Hooks Api
 * All methods require admin authorization.
 */
class Hooks extends ModelBase {

  /**
   * Create Hooks Api.
   * @param client {object} - Api instance
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get list of system hooks.
   * @returns {*}
   */
  list () {
    return this.http.get(`/hooks`, {});
  }

  /**
   * Add new system hook.
   * @param url {string} - The hook URL
   * @returns {*}
   */
  create (url) {
    return this.http.post(`/hooks`, {
      url: url,
    });
  }

  /**
   * Test system hook.
   * @param id {number} - The ID of hook
   * @returns {*}
   */
  test (id) {
    return this.http.get(`/hooks/${id}`, {});
  }

  /**
   * DElete system hook.
   * @param id {number} - The ID of hook
   * @returns {*}
   */
  ['delete'] (id) {
    return this.http.delete(`/hooks/${id}`);
  }

}

module.exports = Hooks;
