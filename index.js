'use strict';

const ApiV3 = require('./lib/apiV3');

module.exports = (options) => {
  return new ApiV3(options);
};

module.exports.ApiV3 = ApiV3;
