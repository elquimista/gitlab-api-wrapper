
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Templates/gitlab Ci Ymls .
 */
class Templates_gitlabCiYmls extends ModelBase {

     /**
     * Create Templates/gitlab Ci Ymls .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get all GitLab CI YML templates..

     * @param params {object}
     * @returns {*}
     */

    gitlabCiYmlsApi(params) {
        return this.http.get(`/templates/gitlab_ci_ymls`, params); // eslint-disable-line quotes
    }

    /**
     * Get all GitLab CI YML templates..

     * @param params {object}
     * @returns {*}
     */

    listGitlabCiYmlTemplates(params) {
        return this.http.get(`/templates/gitlab_ci_ymls`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single GitLab CI YML template..

     * @param key {string} - The key of the GitLab CI YML template
     * @param params {object}
     * @returns {*}
     */

    singleGitlabCiYmlTemplate(key, params) { // eslint-disable-line camelcase
        return this.http.get(`/templates/gitlab_ci_ymls/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Templates_gitlabCiYmls;

