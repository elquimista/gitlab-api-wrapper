
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Managed Licenses .
 */
class ManagedLicenses extends ModelBase {

     /**
     * Create Managed Licenses .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get all managed licenses for a given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    managedLicensesApiUltimate(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/managed_licenses`, params); // eslint-disable-line quotes
    }

    /**
     * Get all managed licenses for a given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listManagedLicenses(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/managed_licenses`, params); // eslint-disable-line quotes
    }

    /**
     * Shows an existing managed license..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param managed_license_id {integer/string} - The ID or URL-encoded name of the license belonging to the project
     * @param params {object}
     * @returns {*}
     */

    showAnExistingManagedLicense(id, managed_license_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/managed_licenses/${encodeURIComponent(managed_license_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new managed license for the given project with the given name and approval status..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the managed license
     * @param params.approval_status {string} - The approval status. “approved” or “blacklisted”
     * @returns {*}
     */

    createANewManagedLicense(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/managed_licenses`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a managed license with a given id..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param managed_license_id {integer/string} - The ID or URL-encoded name of the license belonging to the project
     * @param params {object}
     * @returns {*}
     */

    deleteAManagedLicense(id, managed_license_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/managed_licenses/${encodeURIComponent(managed_license_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing managed license with a new approval status..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param managed_license_id {integer/string} - The ID or URL-encoded name of the license belonging to the project
     * @param params {object}
     * @param params.approval_status {string} - The approval status. “approved” or “blacklisted”
     * @returns {*}
     */

    editAnExistingManagedLicense(id, managed_license_id, params) { // eslint-disable-line camelcase
        return this.http.patch(`/projects/${encodeURIComponent(id)}/managed_licenses/${encodeURIComponent(managed_license_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = ManagedLicenses;

