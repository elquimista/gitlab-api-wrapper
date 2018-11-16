
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Users .
 */
class Users extends ModelBase {

     /**
     * Create Users .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Active users = Total accounts - Blocked users.

     * @param params {object}
     * @returns {*}
     */

    usersApi(params) {
        return this.http.get(`/users`, params); // eslint-disable-line quotes
    }

    /**
     * Active users = Total accounts - Blocked users.

     * @param params {object}
     * @returns {*}
     */

    listUsers(params) {
        return this.http.get(`/users`, params); // eslint-disable-line quotes
    }

    /**
     * In addition, you can filter users based on states eg. blocked, active
This works only to filter users who are blocked or active.
It does not support active=false or blocked=false..

     * @param params {object}
     * @returns {*}
     */

    forNormalUsers(params) {
        return this.http.get(`/users`, params); // eslint-disable-line quotes
    }

    /**
     * You can search for users by email or username with: /users?search=John.

     * @param params {object}
     * @returns {*}
     */

    forAdmins(params) {
        return this.http.get(`/users`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single user..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    singleUser(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Parameters:.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    forUser(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Parameters:.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    forAdmin(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new user. Note only administrators can create new users. Either password or reset_password should be specified (reset_password takes priority)..

     * @param params {object}
     * @param params.email {} - undefined
     * @returns {*}
     */

    userCreation(params) {
        return this.http.post(`/users`, params); // eslint-disable-line quotes
    }

    /**
     * Modifies an existing user. Only administrators can change attributes of a user..

     * @param params {object}
     * @param params.email {} - undefined
     * @returns {*}
     */

    userModification(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/users/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a user. Available only for administrators.
This returns a 204 No Content status code if the operation was successfully or 404 if the resource was not found..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    userDeletion(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/users/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets currently authenticated user..

     * @param params {object}
     * @param params.sudo {} - undefined
     * @returns {*}
     */

    user(params) {
        return this.http.get(`/user`, params); // eslint-disable-line quotes
    }

    /**
     * Gets currently authenticated user..

     * @param params {object}
     * @param params.sudo {} - undefined
     * @returns {*}
     */

    forNormalUsers(params) {
        return this.http.get(`/user`, params); // eslint-disable-line quotes
    }

    /**
     * Parameters:.

     * @param params {object}
     * @param params.sudo {} - undefined
     * @returns {*}
     */

    forAdmins(params) {
        return this.http.get(`/user`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of currently authenticated user's SSH keys..

     * @param params {object}
     * @param params. {} - undefined
     * @returns {*}
     */

    listSshKeys(params) {
        return this.http.get(`/user/keys`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of a specified user's SSH keys. Available only for admin.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    listSshKeysForUser(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/keys`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single key..

     * @param key_id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    singleSshKey(key_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/user/keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new key owned by the currently authenticated user..

     * @param params {object}
     * @param params.title {} - undefined
     * @returns {*}
     */

    addSshKey(params) {
        return this.http.post(`/user/keys`, params); // eslint-disable-line quotes
    }

    /**
     * Create new key owned by specified user. Available only for admin.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    addSshKeyForUser(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/users/${encodeURIComponent(id)}/keys`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes key owned by currently authenticated user.
This returns a 204 No Content status code if the operation was successfully or 404 if the resource was not found..

     * @param key_id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteSshKeyForCurrentUser(key_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/user/keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes key owned by a specified user. Available only for admin..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteSshKeyForGivenUser(id, key_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/users/${encodeURIComponent(id)}/keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of currently authenticated user's GPG keys..

     * @param params {object}
     * @returns {*}
     */

    listAllGpgKeys(params) {
        return this.http.get(`/user/gpg_keys`, params); // eslint-disable-line quotes
    }

    /**
     * Get a specific GPG key of currently authenticated user..

     * @param key_id {integer} - The ID of the GPG key
     * @param params {object}
     * @returns {*}
     */

    getASpecificGpgKey(key_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/user/gpg_keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new GPG key owned by the currently authenticated user..

     * @param params {object}
     * @param params.key {string} - The new GPG key
     * @returns {*}
     */

    addAGpgKey(params) {
        return this.http.post(`/user/gpg_keys`, params); // eslint-disable-line quotes
    }

    /**
     * Delete a GPG key owned by currently authenticated user..

     * @param key_id {integer} - The ID of the GPG key
     * @param params {object}
     * @returns {*}
     */

    deleteAGpgKey(key_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/user/gpg_keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of a specified user's GPG keys. Available only for admins..

     * @param id {integer} - The ID of the user
     * @param params {object}
     * @returns {*}
     */

    listAllGpgKeysForGivenUser(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/gpg_keys`, params); // eslint-disable-line quotes
    }

    /**
     * Get a specific GPG key for a given user. Available only for admins..

     * @param id {integer} - The ID of the user
     * @param key_id {integer} - The ID of the GPG key
     * @param params {object}
     * @returns {*}
     */

    getASpecificGpgKeyForAGivenUser(id, key_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/gpg_keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Create new GPG key owned by the specified user. Available only for admins..

     * @param id {integer} - The ID of the user
     * @param params {object}
     * @param params.key_id {integer} - The ID of the GPG key
     * @returns {*}
     */

    addAGpgKeyForAGivenUser(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/users/${encodeURIComponent(id)}/gpg_keys`, params); // eslint-disable-line quotes
    }

    /**
     * Delete a GPG key owned by a specified user. Available only for admins..

     * @param id {integer} - The ID of the user
     * @param key_id {integer} - The ID of the GPG key
     * @param params {object}
     * @returns {*}
     */

    deleteAGpgKeyForAGivenUser(id, key_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/users/${encodeURIComponent(id)}/gpg_keys/${encodeURIComponent(key_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of currently authenticated user's emails..

     * @param params {object}
     * @param params. {} - undefined
     * @returns {*}
     */

    listEmails(params) {
        return this.http.get(`/user/emails`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of a specified user's emails. Available only for admin.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    listEmailsForUser(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(id)}/emails`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single email..

     * @param email_id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    singleEmail(email_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/user/emails/${encodeURIComponent(email_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new email owned by the currently authenticated user..

     * @param params {object}
     * @param params.email {} - undefined
     * @returns {*}
     */

    addEmail(params) {
        return this.http.post(`/user/emails`, params); // eslint-disable-line quotes
    }

    /**
     * Create new email owned by specified user. Available only for admin.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    addEmailForUser(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/users/${encodeURIComponent(id)}/emails`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes email owned by currently authenticated user.
This returns a 204 No Content status code if the operation was successfully or 404 if the resource was not found..

     * @param email_id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteEmailForCurrentUser(email_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/user/emails/${encodeURIComponent(email_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes email owned by a specified user. Available only for admin..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteEmailForGivenUser(id, email_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/users/${encodeURIComponent(id)}/emails/${encodeURIComponent(email_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Blocks the specified user.  Available only for admin..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    blockUser(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/users/${encodeURIComponent(id)}/block`, params); // eslint-disable-line quotes
    }

    /**
     * Unblocks the specified user.  Available only for admin..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    unblockUser(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/users/${encodeURIComponent(id)}/unblock`, params); // eslint-disable-line quotes
    }

    /**
     * Please refer to the Events API documentation.

     * @param user_id {integer} - The ID of the user
     * @param params {object}
     * @param params.state {string} - filter tokens based on state (all, active, inactive)
     * @returns {*}
     */

    getUserContributionEvents(user_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(user_id)}/impersonation_tokens`, params); // eslint-disable-line quotes
    }

    /**
     * It retrieves every impersonation token of the user. Use the pagination
parameters page and per_page to restrict the list of impersonation tokens..

     * @param user_id {integer} - The ID of the user
     * @param params {object}
     * @param params.state {string} - filter tokens based on state (all, active, inactive)
     * @returns {*}
     */

    getAllImpersonationTokensOfAUser(user_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(user_id)}/impersonation_tokens`, params); // eslint-disable-line quotes
    }

    /**
     * It shows a user's impersonation token..

     * @param user_id {integer} - The ID of the user
     * @param impersonation_token_id {integer} - The ID of the impersonation token
     * @param params {object}
     * @returns {*}
     */

    getAnImpersonationTokenOfAUser(user_id, impersonation_token_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(user_id)}/impersonation_tokens/${encodeURIComponent(impersonation_token_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * It creates a new impersonation token. Note that only administrators can do this.
You are only able to create impersonation tokens to impersonate the user and perform
both API calls and Git reads and writes. The user will not see these tokens in their profile
settings page..

     * @param user_id {integer} - The ID of the user
     * @param params {object}
     * @param params.name {string} - The name of the impersonation token
     * @param params.expires_at {date} - The expiration date of the impersonation token in ISO format (YYYY-MM-DD)
     * @param params.scopes {array} - The array of scopes of the impersonation token (api, read_user)
     * @returns {*}
     */

    createAnImpersonationToken(user_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/users/${encodeURIComponent(user_id)}/impersonation_tokens`, params); // eslint-disable-line quotes
    }

    /**
     * It revokes an impersonation token..

     * @param user_id {integer} - The ID of the user
     * @param impersonation_token_id {integer} - The ID of the impersonation token
     * @param params {object}
     * @returns {*}
     */

    revokeAnImpersonationToken(user_id, impersonation_token_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/users/${encodeURIComponent(user_id)}/impersonation_tokens/${encodeURIComponent(impersonation_token_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get the last activity date for all users, sorted from oldest to newest..

     * @param params {object}
     * @param params. {} - undefined
     * @returns {*}
     */

    getUserActivitiesAdminOnly(params) {
        return this.http.get(`/user/activities`, params); // eslint-disable-line quotes
    }

}

module.exports = Users;

