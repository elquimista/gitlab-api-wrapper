
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Geo Nodes .
 */
class GeoNodes extends ModelBase {

     /**
     * Create Geo Nodes .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * In order to interact with Geo node endpoints, you need to authenticate yourself
as an admin..

     * @param params {object}
     * @returns {*}
     */

    geoNodesApi(params) {
        return this.http.get(`/geo_nodes`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @returns {*}
     */

    retrieveConfigurationAboutAllGeoNodes(params) {
        return this.http.get(`/geo_nodes`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @returns {*}
     */

    retrieveConfigurationAboutASpecificGeoNode(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/geo_nodes/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @returns {*}
     */

    retrieveStatusAboutAllSecondaryGeoNodes(params) {
        return this.http.get(`/geo_nodes/status`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @returns {*}
     */

    retrieveStatusAboutASpecificSecondaryGeoNode(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/geo_nodes/${encodeURIComponent(id)}/status`, params); // eslint-disable-line quotes
    }

}

module.exports = GeoNodes;

