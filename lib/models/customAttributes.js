
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Custom Attributes .
 */
class CustomAttributes extends ModelBase {

     /**
     * Create Custom Attributes .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get all custom attributes on a resource..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    listCustomAttributesByUsers(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Get all custom attributes on a resource..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    listCustomAttributesByGroups(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Get all custom attributes on a resource..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    listCustomAttributesByProjects(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    singleCustomAttributeByUsers(id, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    singleCustomAttributeByGroups(id, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    singleCustomAttributeByProjects(id, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Set a custom attribute on a resource. The attribute will be updated if it already exists,
or newly created otherwise..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @param params.value {string} - The value of the custom attribute
     * @returns {*}
     */

    setCustomAttributeByUsers(id, key, params) { // eslint-disable-line camelcase
        return this.http.put(`/users/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Set a custom attribute on a resource. The attribute will be updated if it already exists,
or newly created otherwise..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @param params.value {string} - The value of the custom attribute
     * @returns {*}
     */

    setCustomAttributeByGroups(id, key, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Set a custom attribute on a resource. The attribute will be updated if it already exists,
or newly created otherwise..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @param params.value {string} - The value of the custom attribute
     * @returns {*}
     */

    setCustomAttributeByProjects(id, key, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Delete a custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    deleteCustomAttributeByUsers(id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/users/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Delete a custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    deleteCustomAttributeByGroups(id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Delete a custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    deleteCustomAttributeByPrjects(id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = CustomAttributes;

