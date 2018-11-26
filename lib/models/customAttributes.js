
'use strict';

/*eslint-disable */
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
     * Every API call to custom attributes must be authenticated as administrator..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    customAttributesApiGroups(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Every API call to custom attributes must be authenticated as administrator..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    customAttributesApiProjects(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Every API call to custom attributes must be authenticated as administrator..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    customAttributesApiUsers(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Get all custom attributes on a resource..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    listCustomAttributesGroups(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Get all custom attributes on a resource..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    listCustomAttributesProjects(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Get all custom attributes on a resource..

     * @param id {integer} - The ID of a resource
     * @param params {object}
     * @returns {*}
     */

    listCustomAttributesUsers(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/custom_attributes`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    singleCustomAttributeGroups(id, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    singleCustomAttributeProjects(id, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    singleCustomAttributeUsers(id, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
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

    setCustomAttributeGroups(id, key, params) { // eslint-disable-line camelcase
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

    setCustomAttributeProjects(id, key, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
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

    setCustomAttributeUsers(id, key, params) { // eslint-disable-line camelcase
        return this.http.put(`/users/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Delete a custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    deleteCustomAttributeGroups(id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Delete a custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    deleteCustomAttributeProjects(id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

    /**
     * Delete a custom attribute on a resource..

     * @param id {integer} - The ID of a resource
     * @param key {string} - The key of the custom attribute
     * @param params {object}
     * @returns {*}
     */

    deleteCustomAttributeUsers(id, key, params) { // eslint-disable-line camelcase
        return this.http.delete(`/users/${encodeURIComponent(id)}/custom_attributes/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = CustomAttributes;

