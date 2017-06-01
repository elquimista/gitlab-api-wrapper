"use strict";

const ApiBase = require('./apiBase');

/**
 * Class representing Api@V3
 */
class ApiV3 extends ApiBase {

  /**
   * Create Api@V3
   */
  constructor (options) {
    // @TODO: 格式化
    options['base_url'] = options['base_url'] + '/api/v3';
    super(options);

    this.checkOptions();
  }

}

module.exports = ApiV3;
