"use strict";

const HttpBase = require('./httpBase');
const Users = require('./models/users');
const Projects = require('./models/projects');
const Groups = require('./models/groups');

/**
 * Class representing Api Base
 */
class ApiBase extends HttpBase {

  /**
   * Create Api Base
   */
  constructor (options) {
    super(options);
    this.init();
  }

  init () {
    this.users = new Users(this);
    this.projects = new Projects(this);
    this.groups = new Groups(this);
  }

  /**
   * Check options
   */
  checkOptions () {
    if (!this.options.base_url) {
      throw `[gitlab-api]'base_url' is required.`;
    }

    if (!this.options['private_token']) {
      throw `[gitlab-api]'private_token' is required.`;
    }

    if (!this.options.timeout) {
      this.options.timeout = 3000;
    }
  }

}

module.exports = ApiBase;
