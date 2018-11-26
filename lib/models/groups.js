
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Groups .
 */
class Groups extends ModelBase {

     /**
     * Create Groups .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Get a list of visible groups for the authenticated user. When accessed without
authentication, only public groups are returned..

     * @param params {object}
     * @param params.skip_groups {array of integers} - Skip the group IDs passed
     * @param params.all_available {boolean} - Show all the groups you have access to (defaults to false for authenticated users, true for admin); Attributes owned and min_access_level have precedence
     * @param params.search {string} - Return the list of authorized groups matching the search criteria
     * @param params.order_by {string} - Order groups by name, path or id. Default is name

     * @param params.sort {string} - Order groups in asc or desc order. Default is asc

     * @param params.statistics {boolean} - Include group statistics (admins only)
     * @param params.with_custom_attributes {boolean} - Include custom attributes in response (admins only)
     * @param params.owned {boolean} - Limit to groups explicitly owned by the current user
     * @param params.min_access_level {integer} - Limit to groups where current user has at least this access level

     * @returns {*}
     */

    groupsApi(params) {
        return this.http.get(`/groups`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of visible groups for the authenticated user. When accessed without
authentication, only public groups are returned..

     * @param params {object}
     * @param params.skip_groups {array of integers} - Skip the group IDs passed
     * @param params.all_available {boolean} - Show all the groups you have access to (defaults to false for authenticated users, true for admin); Attributes owned and min_access_level have precedence
     * @param params.search {string} - Return the list of authorized groups matching the search criteria
     * @param params.order_by {string} - Order groups by name, path or id. Default is name

     * @param params.sort {string} - Order groups in asc or desc order. Default is asc

     * @param params.statistics {boolean} - Include group statistics (admins only)
     * @param params.with_custom_attributes {boolean} - Include custom attributes in response (admins only)
     * @param params.owned {boolean} - Limit to groups explicitly owned by the current user
     * @param params.min_access_level {integer} - Limit to groups where current user has at least this access level

     * @returns {*}
     */

    listGroups(params) {
        return this.http.get(`/groups`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of visible direct subgroups in this group.
When accessed without authentication, only public groups are returned..

     * @param id {integer/string} - The ID or URL-encoded path of the group of the parent group
     * @param params {object}
     * @param params.skip_groups {array of integers} - Skip the group IDs passed
     * @param params.all_available {boolean} - Show all the groups you have access to (defaults to false for authenticated users, true for admin); Attributes owned and min_access_level have precedence
     * @param params.search {string} - Return the list of authorized groups matching the search criteria
     * @param params.order_by {string} - Order groups by name, path or id. Default is name

     * @param params.sort {string} - Order groups in asc or desc order. Default is asc

     * @param params.statistics {boolean} - Include group statistics (admins only)
     * @param params.with_custom_attributes {boolean} - Include custom attributes in response (admins only)
     * @param params.owned {boolean} - Limit to groups explicitly owned by the current user
     * @param params.min_access_level {integer} - Limit to groups where current user has at least this access level

     * @returns {*}
     */

    listAGroupsSubgroups(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/subgroups`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of projects in this group. When accessed without authentication, only
public projects are returned..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.archived {boolean} - Limit by archived status
     * @param params.visibility {string} - Limit by visibility public, internal, or private

     * @param params.order_by {string} - Return projects ordered by id, name, path, created_at, updated_at, or last_activity_at fields. Default is created_at

     * @param params.sort {string} - Return projects sorted in asc or desc order. Default is desc

     * @param params.search {string} - Return list of authorized projects matching the search criteria
     * @param params.simple {boolean} - Return only the ID, URL, name, and path of each project
     * @param params.owned {boolean} - Limit by projects owned by the current user
     * @param params.starred {boolean} - Limit by projects starred by the current user
     * @param params.with_issues_enabled {boolean} - Limit by enabled issues feature
     * @param params.with_merge_requests_enabled {boolean} - Limit by enabled merge requests feature
     * @param params.with_custom_attributes {boolean} - Include custom attributes in response (admins only)
     * @returns {*}
     */

    listAGroupsProjects(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/projects`, params); // eslint-disable-line quotes
    }

    /**
     * Get all details of a group. This endpoint can be accessed without authentication
if the group is publicly accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.with_custom_attributes {boolean} - Include custom attributes in response (admins only)
     * @param params.with_projects {boolean} - Include details from projects that belong to the specified group (defaults to true).
     * @returns {*}
     */

    detailsOfAGroup(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new project group. Available only for users who can create groups..

     * @param params {object}
     * @param params.name {string} - The name of the group
     * @param params.path {string} - The path of the group
     * @param params.description {string} - The group’s description
     * @param params.visibility {string} - The group’s visibility. Can be private, internal, or public.
     * @param params.lfs_enabled {boolean} - Enable/disable Large File Storage (LFS) for the projects in this group
     * @param params.request_access_enabled {boolean} - Allow users to request member access.
     * @param params.parent_id {integer} - The parent group id for creating nested group.
     * @param params.shared_runners_minutes_limit {integer} - (admin-only) Pipeline minutes quota for this group.
     * @returns {*}
     */

    newGroup(params) {
        return this.http.post(`/groups`, params); // eslint-disable-line quotes
    }

    /**
     * Transfer a project to the Group namespace. Available only for admin.

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param project_id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    transferProjectToGroup(id, project_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/projects/${encodeURIComponent(project_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Updates the project group. Only available to group owners and administrators..

     * @param id {integer} - The ID of the group
     * @param params {object}
     * @param params.name {string} - The name of the group
     * @param params.path {string} - The path of the group
     * @param params.description {string} - The description of the group
     * @param params.membership_lock {boolean} - Prevent adding new members to project membership within this group
     * @param params.share_with_group_lock {boolean} - Prevent sharing a project with another group within this group
     * @param params.visibility {string} - The visibility level of the group. Can be private, internal, or public.
     * @param params.
lfs_enabled (optional) {boolean} - Enable/disable Large File Storage (LFS) for the projects in this group
     * @param params.request_access_enabled {boolean} - Allow users to request member access.
     * @param params.file_template_project_id {integer} - 
(Premium) The ID of a project to load custom file templates from
     * @param params.shared_runners_minutes_limit {integer} - (admin-only) Pipeline minutes quota for this group
     * @returns {*}
     */

    updateGroup(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes group with all projects inside. Only available to group owners and administrators..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    removeGroup(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get all groups that match your string in their name or path..

     * @param params {object}
     * @param params.search {String} - The search string
     * @returns {*}
     */

    searchForGroup(params) {
        return this.http.get(`/groups`, params); // eslint-disable-line quotes
    }

    /**
     * Syncs the group with its linked LDAP group. Only available to group owners and administrators..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    syncGroupWithLdap(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/ldap_sync`, params); // eslint-disable-line quotes
    }

    /**
     * Please consult the Group Members documentation..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    groupMembers(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/ldap_group_links`, params); // eslint-disable-line quotes
    }

    /**
     * Adds LDAP group link.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    addLdapGroupLink(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/ldap_group_links`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a LDAP group link.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteLdapGroupLink(id, cn, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/ldap_group_links/${encodeURIComponent(cn)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Groups;

