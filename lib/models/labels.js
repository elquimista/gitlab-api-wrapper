
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Labels .
 */
class Labels extends ModelBase {

     /**
     * Create Labels .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get all labels for a given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    labelsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/labels`, params); // eslint-disable-line quotes
    }

    /**
     * Get all labels for a given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listLabels(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/labels`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new label for the given repository with the given name and color..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the label
     * @param params.color {string} - The color of the label given in 6-digit hex notation with leading ‘#’ sign (e.g. #FFAABB) or one of the CSS color names

     * @param params.description {string} - The description of the label
     * @param params.priority {integer} - The priority of the label. Must be greater or equal than zero or null to remove the priority.
     * @returns {*}
     */

    createANewLabel(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/labels`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a label with a given name..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the label
     * @returns {*}
     */

    deleteALabel(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/labels`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing label with new name or new color. At least one parameter
is required, to update the label..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the existing label
     * @param params.new_name {string} - The new name of the label
     * @param params.color {string} - The color of the label given in 6-digit hex notation with leading ‘#’ sign (e.g. #FFAABB) or one of the CSS color names

     * @param params.description {string} - The new description of the label
     * @param params.priority {integer} - The new priority of the label. Must be greater or equal than zero or null to remove the priority.
     * @returns {*}
     */

    editAnExistingLabel(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/labels`, params); // eslint-disable-line quotes
    }

    /**
     * Subscribes the authenticated user to a label to receive notifications.
If the user is already subscribed to the label, the status code 304
is returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param label_id {integer or string} - The ID or title of a project’s label
     * @param params {object}
     * @returns {*}
     */

    subscribeToALabel(id, label_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/labels/${encodeURIComponent(label_id)}/subscribe`, params); // eslint-disable-line quotes
    }

    /**
     * Unsubscribes the authenticated user from a label to not receive notifications
from it. If the user is not subscribed to the label, the
status code 304 is returned..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param label_id {integer or string} - The ID or title of a project’s label
     * @param params {object}
     * @returns {*}
     */

    unsubscribeFromALabel(id, label_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/labels/${encodeURIComponent(label_id)}/unsubscribe`, params); // eslint-disable-line quotes
    }

}

module.exports = Labels;

