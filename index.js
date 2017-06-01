'use strict';

const ApiV4 = require('./lib/apiV4');

module.exports = (options) => {
  return new ApiV4(options);
};

module.exports.ApiV4 = ApiV4;
