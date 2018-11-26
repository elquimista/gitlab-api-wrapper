
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Features .
 */
class Features extends ModelBase {

     /**
     * Create Features .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * All methods require administrator authorization..

     * @param params {object}
     * @returns {*}
     */

    featuresFlagsApi(params) {
        return this.http.get(`/features`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of all persisted features, with its gate values..

     * @param params {object}
     * @returns {*}
     */

    listAllFeatures(params) {
        return this.http.get(`/features`, params); // eslint-disable-line quotes
    }

    /**
     * Set a feature’s gate value. If a feature with the given name doesn’t exist yet
it will be created. The value can be a boolean, or an integer to indicate
percentage of time..

     * @param name {string} - Name of the feature to create or update
     * @param params {object}
     * @param params.value {integer/string} - 
true or false to enable/disable, or an integer for percentage of time
     * @param params.feature_group {string} - A Feature group name
     * @param params.user {string} - A GitLab username
     * @returns {*}
     */

    setOrCreateAFeature(name, params) { // eslint-disable-line camelcase
        return this.http.post(`/features/${encodeURIComponent(name)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a feature gate. Response is equal when the gate exists, or doesn’t..

     * @param params {object}
     * @returns {*}
     */

    deleteAFeature(name, params) { // eslint-disable-line camelcase
        return this.http.delete(`/features/${encodeURIComponent(name)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Features;

