
'use strict';

/*eslint-disable */
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
     * Updates an existing Geo secondary node. The primary node cannot be edited..

     * @param id {integer} - The ID of the Geo node.
     * @param params {object}
     * @param params.enabled {boolean} - Flag indicating if the Geo node is enabled.
     * @param params.url {string} - The URL to connect to the Geo node.
     * @param params.files_max_capacity {integer} - Control the maximum concurrency of LFS/attachment backfill for this secondary node.
     * @param params.repos_max_capacity {integer} - Control the maximum concurrency of repository backfill for this secondary node.
     * @param params.verification_max_capacity {integer} - Control the maximum concurrency of verification for this node.
     * @returns {*}
     */

    editAGeoNode(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/geo_nodes/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes the Geo node..

     * @param id {integer} - The ID of the Geo node.
     * @param params {object}
     * @returns {*}
     */

    deleteAGeoNode(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/geo_nodes/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * To repair the OAuth authentication of a Geo node..

     * @param params {object}
     * @returns {*}
     */

    repairAGeoNode(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/geo_nodes/${encodeURIComponent(id)}/repair`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @returns {*}
     */

    retrieveStatusAboutAllGeoNodes(params) {
        return this.http.get(`/geo_nodes/status`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @returns {*}
     */

    retrieveStatusAboutASpecificGeoNode(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/geo_nodes/${encodeURIComponent(id)}/status`, params); // eslint-disable-line quotes
    }

    /**
     * This only works on a secondary node..

     * @param params {object}
     * @param params.type {string} - Type of failed objects (repository/wiki)
     * @param params.failure_type {string} - Type of failures (sync/checksum_mismatch/verification)
     * @returns {*}
     */

    retrieveProjectSyncOrVerificationFailuresThatOccurredOnTheCurrentNode(params) {
        return this.http.get(`/geo_nodes/current/failures`, params); // eslint-disable-line quotes
    }

}

module.exports = GeoNodes;

