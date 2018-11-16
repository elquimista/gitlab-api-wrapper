
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Notification Settings .
 */
class NotificationSettings extends ModelBase {

     /**
     * Create Notification Settings .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get current notification settings and email address..

     * @param params {object}
     * @returns {*}
     */

    globalNotificationSettings(params) {
        return this.http.get(`/notification_settings`, params); // eslint-disable-line quotes
    }

    /**
     * Update current notification settings and email address..

     * @param params {object}
     * @param params.level {string} - The global notification level
     * @param params.notification_email {string} - The email address to send notifications
     * @param params.new_note {boolean} - Enable/disable this notification
     * @param params.new_issue {boolean} - Enable/disable this notification
     * @param params.reopen_issue {boolean} - Enable/disable this notification
     * @param params.close_issue {boolean} - Enable/disable this notification
     * @param params.reassign_issue {boolean} - Enable/disable this notification
     * @param params.new_merge_request {boolean} - Enable/disable this notification
     * @param params.reopen_merge_request {boolean} - Enable/disable this notification
     * @param params.close_merge_request {boolean} - Enable/disable this notification
     * @param params.reassign_merge_request {boolean} - Enable/disable this notification
     * @param params.merge_merge_request {boolean} - Enable/disable this notification
     * @param params.failed_pipeline {boolean} - Enable/disable this notification
     * @param params.success_pipeline {boolean} - Enable/disable this notification
     * @returns {*}
     */

    updateGlobalNotificationSettings(params) {
        return this.http.put(`/notification_settings`, params); // eslint-disable-line quotes
    }

    /**
     * Get current group or project notification settings..

     * @param id {integer/string} - The group/project ID or path
     * @param params {object}
     * @returns {*}
     */

    groupLevelNotificationSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/notification_settings`, params); // eslint-disable-line quotes
    }

    /**
     * Get current group or project notification settings..

     * @param id {integer/string} - The group/project ID or path
     * @param params {object}
     * @returns {*}
     */

    projectLevelNotificationSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/notification_settings`, params); // eslint-disable-line quotes
    }

    /**
     * Update current group/project notification settings..

     * @param id {integer/string} - The group/project ID or path
     * @param params {object}
     * @param params.level {string} - The global notification level
     * @param params.new_note {boolean} - Enable/disable this notification
     * @param params.new_issue {boolean} - Enable/disable this notification
     * @param params.reopen_issue {boolean} - Enable/disable this notification
     * @param params.close_issue {boolean} - Enable/disable this notification
     * @param params.reassign_issue {boolean} - Enable/disable this notification
     * @param params.new_merge_request {boolean} - Enable/disable this notification
     * @param params.reopen_merge_request {boolean} - Enable/disable this notification
     * @param params.close_merge_request {boolean} - Enable/disable this notification
     * @param params.reassign_merge_request {boolean} - Enable/disable this notification
     * @param params.merge_merge_request {boolean} - Enable/disable this notification
     * @param params.failed_pipeline {boolean} - Enable/disable this notification
     * @param params.success_pipeline {boolean} - Enable/disable this notification
     * @returns {*}
     */

    updateGroupLevelNotificationSettings(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/notification_settings`, params); // eslint-disable-line quotes
    }

    /**
     * Update current group/project notification settings..

     * @param id {integer/string} - The group/project ID or path
     * @param params {object}
     * @param params.level {string} - The global notification level
     * @param params.new_note {boolean} - Enable/disable this notification
     * @param params.new_issue {boolean} - Enable/disable this notification
     * @param params.reopen_issue {boolean} - Enable/disable this notification
     * @param params.close_issue {boolean} - Enable/disable this notification
     * @param params.reassign_issue {boolean} - Enable/disable this notification
     * @param params.new_merge_request {boolean} - Enable/disable this notification
     * @param params.reopen_merge_request {boolean} - Enable/disable this notification
     * @param params.close_merge_request {boolean} - Enable/disable this notification
     * @param params.reassign_merge_request {boolean} - Enable/disable this notification
     * @param params.merge_merge_request {boolean} - Enable/disable this notification
     * @param params.failed_pipeline {boolean} - Enable/disable this notification
     * @param params.success_pipeline {boolean} - Enable/disable this notification
     * @returns {*}
     */

    updateProjectLevelNotificationSettings(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/notification_settings`, params); // eslint-disable-line quotes
    }

}

module.exports = NotificationSettings;

