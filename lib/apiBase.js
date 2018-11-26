'use strict';

const HttpBase = require('./httpBase');

const path = require('path');
const glob = require('glob');

/**
 * Class representing Api Base
 */
class ApiBase extends HttpBase {

    /**
     * Create Api Base
     */
    constructor(options) {
        super(options);
        this.init();
    }

    init() {
        path.join(__dirname, 'models');
        const files = glob.sync(`${__dirname}/models/*`);
        files.forEach((file) => {
            const moduleName = file.replace(/.+\//, '').replace('.js', '');
            const Require = require(file); // eslint-disable-line import/no-dynamic-require, global-require
            this[moduleName] = new Require(this);
        });
    }

    /**
     * Check options
     */
    checkOptions() {
        if (!this.options.base_url) {
            throw new Error('[gitlab-api] "base_url" is required.');
        }

        if (!this.options.private_token) {
            throw new Error('[gitlab-api]"private_token" is required.');
        }

        if (!this.options.timeout) {
            this.options.timeout = 3000;
        }
    }
}

module.exports = ApiBase;
