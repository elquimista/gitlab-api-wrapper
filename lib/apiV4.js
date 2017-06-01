"use strict";

const ApiBase = require('./apiBase');

/**
 * Class representing Api@V4
 */
class ApiV4 extends ApiBase {

  /**
   * Create Api@V4
   */
  constructor (options) {
    // @TODO: 格式化
    options['base_url'] = options['base_url'] + '/api/v4';
    super(options);

    this.checkOptions();
  }

}

module.exports = ApiV4;
