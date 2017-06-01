"use strict";

/**
 * Class representing Model Base
 */
class ModelBase {

  /**
   * Create Model Base
   * @param client {object} - Api instance
   */
  constructor (client) {
    this.client = client;
    this._init();
  }

  get DefalutPerPage () {
    return 20;
  }

  _init () {
    this.http = {
      'get': this.client.get.bind(this.client),
      'getText': this.client.getText.bind(this.client),
      'post': this.client.post.bind(this.client),
      'put': this.client.put.bind(this.client),
      'delete': this.client.delete.bind(this.client),
    };

    if (this.init) {
      return this.init();
    }
  }

  load (model) {
    const Model = require(`./models/${model}`);
    return new Model(this.client);
  }

}

module.exports = ModelBase;
