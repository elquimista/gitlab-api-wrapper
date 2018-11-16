
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Projects .
 */
class Projects extends ModelBase {

     /**
     * Create Projects .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Project in GitLab can be either private, internal or public.
This is determined by the visibility field in the project..

     * @param params {object}
     * @param params.private {} - undefined
     * @returns {*}
     */

    projectsApi(params) {
        return this.http.get(`/projects`, params); // eslint-disable-line quotes
    }

    /**
     * Project in GitLab can be either private, internal or public.
This is determined by the visibility field in the project..

     * @param params {object}
     * @param params.private {} - undefined
     * @returns {*}
     */

    projectVisibilityLevel(params) {
        return this.http.get(`/projects`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of all visible projects across GitLab for the authenticated user.
When accessed without authentication, only public projects are returned..

     * @param params {object}
     * @param params.archived {boolean} - Limit by archived status
     * @param params.visibility {string} - Limit by visibility public, internal, or private

     * @param params.order_by {string} - Return projects ordered by id, name, path, created_at, updated_at, or last_activity_at fields. Default is created_at

     * @param params.sort {string} - Return projects sorted in asc or desc order. Default is desc

     * @param params.search {string} - Return list of projects matching the search criteria
     * @param params.simple {boolean} - Return only the ID, URL, name, and path of each project
     * @param params.owned {boolean} - Limit by projects owned by the current user
     * @param params.membership {boolean} - Limit by projects that the current user is a member of
     * @param params.starred {boolean} - Limit by projects starred by the current user
     * @param params.statistics {boolean} - Include project statistics
     * @param params.with_issues_enabled {boolean} - Limit by enabled issues feature
     * @param params.with_merge_requests_enabled {boolean} - Limit by enabled merge requests feature
     * @returns {*}
     */

    listAllProjects(params) {
        return this.http.get(`/projects`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of visible projects for the given user. When accessed without
authentication, only public projects are returned..

     * @param user_id {string} - The ID or username of the user
     * @param params {object}
     * @param params.archived {boolean} - Limit by archived status
     * @param params.visibility {string} - Limit by visibility public, internal, or private

     * @param params.order_by {string} - Return projects ordered by id, name, path, created_at, updated_at, or last_activity_at fields. Default is created_at

     * @param params.sort {string} - Return projects sorted in asc or desc order. Default is desc

     * @param params.search {string} - Return list of projects matching the search criteria
     * @param params.simple {boolean} - Return only the ID, URL, name, and path of each project
     * @param params.owned {boolean} - Limit by projects owned by the current user
     * @param params.membership {boolean} - Limit by projects that the current user is a member of
     * @param params.starred {boolean} - Limit by projects starred by the current user
     * @param params.statistics {boolean} - Include project statistics
     * @param params.with_issues_enabled {boolean} - Limit by enabled issues feature
     * @param params.with_merge_requests_enabled {boolean} - Limit by enabled merge requests feature
     * @returns {*}
     */

    listUserProjects(user_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/users/${encodeURIComponent(user_id)}/projects`, params); // eslint-disable-line quotes
    }

    /**
     * Get a specific project. This endpoint can be accessed without authentication if
the project is publicly accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.statistics {boolean} - Include project statistics
     * @returns {*}
     */

    getSingleProject(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get the users list of a project..

     * @param params {object}
     * @param params.search {string} - Search for specific users
     * @returns {*}
     */

    getProjectUsers(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/users`, params); // eslint-disable-line quotes
    }

    /**
     * Please refer to the Events API documentation..

     * @param params {object}
     * @param params.name {string} - The name of the new project. Equals path if not provided.
     * @param params.path {string} - Repository name for new project. Generated based on name if not provided (generated lowercased with dashes).
     * @param params.namespace_id {integer} - Namespace for the new project (defaults to the current user's namespace)
     * @param params.default_branch {string} - 
master by default
     * @param params.description {string} - Short project description
     * @param params.issues_enabled {boolean} - Enable issues for this project
     * @param params.merge_requests_enabled {boolean} - Enable merge requests for this project
     * @param params.jobs_enabled {boolean} - Enable jobs for this project
     * @param params.wiki_enabled {boolean} - Enable wiki for this project
     * @param params.snippets_enabled {boolean} - Enable snippets for this project
     * @param params.resolve_outdated_diff_discussions {boolean} - Automatically resolve merge request diffs discussions on lines changed with a push
     * @param params.container_registry_enabled {boolean} - Enable container registry for this project
     * @param params.shared_runners_enabled {boolean} - Enable shared runners for this project
     * @param params.visibility {string} - See project visibility level

     * @param params.import_url {string} - URL to import repository from
     * @param params.public_jobs {boolean} - If true, jobs can be viewed by non-project-members
     * @param params.only_allow_merge_if_pipeline_succeeds {boolean} - Set whether merge requests can only be merged with successful jobs
     * @param params.only_allow_merge_if_all_discussions_are_resolved {boolean} - Set whether merge requests can only be merged when all the discussions are resolved
     * @param params.lfs_enabled {boolean} - Enable LFS
     * @param params.request_access_enabled {boolean} - Allow users to request member access
     * @param params.tag_list {array} - The list of tags for a project; put array of tags, that should be finally assigned to a project
     * @param params.avatar {mixed} - Image file for avatar of the project
     * @param params.printing_merge_request_link_enabled {boolean} - Show link to create/view merge request when pushing from the command line
     * @param params.ci_config_path {string} - The path to CI config file
     * @param params.repository_storage {string} - Which storage shard the repository is on. Available only to admins
     * @param params.approvals_before_merge {integer} - How many approvers should approve merge request by default
     * @returns {*}
     */

    getProjectEvents(params) {
        return this.http.post(`/projects`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new project owned by the authenticated user..

     * @param params {object}
     * @param params.name {string} - The name of the new project. Equals path if not provided.
     * @param params.path {string} - Repository name for new project. Generated based on name if not provided (generated lowercased with dashes).
     * @param params.namespace_id {integer} - Namespace for the new project (defaults to the current user's namespace)
     * @param params.default_branch {string} - 
master by default
     * @param params.description {string} - Short project description
     * @param params.issues_enabled {boolean} - Enable issues for this project
     * @param params.merge_requests_enabled {boolean} - Enable merge requests for this project
     * @param params.jobs_enabled {boolean} - Enable jobs for this project
     * @param params.wiki_enabled {boolean} - Enable wiki for this project
     * @param params.snippets_enabled {boolean} - Enable snippets for this project
     * @param params.resolve_outdated_diff_discussions {boolean} - Automatically resolve merge request diffs discussions on lines changed with a push
     * @param params.container_registry_enabled {boolean} - Enable container registry for this project
     * @param params.shared_runners_enabled {boolean} - Enable shared runners for this project
     * @param params.visibility {string} - See project visibility level

     * @param params.import_url {string} - URL to import repository from
     * @param params.public_jobs {boolean} - If true, jobs can be viewed by non-project-members
     * @param params.only_allow_merge_if_pipeline_succeeds {boolean} - Set whether merge requests can only be merged with successful jobs
     * @param params.only_allow_merge_if_all_discussions_are_resolved {boolean} - Set whether merge requests can only be merged when all the discussions are resolved
     * @param params.lfs_enabled {boolean} - Enable LFS
     * @param params.request_access_enabled {boolean} - Allow users to request member access
     * @param params.tag_list {array} - The list of tags for a project; put array of tags, that should be finally assigned to a project
     * @param params.avatar {mixed} - Image file for avatar of the project
     * @param params.printing_merge_request_link_enabled {boolean} - Show link to create/view merge request when pushing from the command line
     * @param params.ci_config_path {string} - The path to CI config file
     * @param params.repository_storage {string} - Which storage shard the repository is on. Available only to admins
     * @param params.approvals_before_merge {integer} - How many approvers should approve merge request by default
     * @returns {*}
     */

    createProject(params) {
        return this.http.post(`/projects`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new project owned by the specified user. Available only for admins..

     * @param user_id {integer} - The user ID of the project owner
     * @param params {object}
     * @param params.name {string} - The name of the new project
     * @param params.path {string} - Custom repository name for new project. By default generated based on name
     * @param params.namespace_id {integer} - Namespace for the new project (defaults to the current user's namespace)
     * @param params.description {string} - Short project description
     * @param params.issues_enabled {boolean} - Enable issues for this project
     * @param params.merge_requests_enabled {boolean} - Enable merge requests for this project
     * @param params.jobs_enabled {boolean} - Enable jobs for this project
     * @param params.wiki_enabled {boolean} - Enable wiki for this project
     * @param params.snippets_enabled {boolean} - Enable snippets for this project
     * @param params.resolve_outdated_diff_discussions {boolean} - Automatically resolve merge request diffs discussions on lines changed with a push
     * @param params.container_registry_enabled {boolean} - Enable container registry for this project
     * @param params.shared_runners_enabled {boolean} - Enable shared runners for this project
     * @param params.visibility {string} - See project visibility level

     * @param params.import_url {string} - URL to import repository from
     * @param params.public_jobs {boolean} - If true, jobs can be viewed by non-project-members
     * @param params.only_allow_merge_if_pipeline_succeeds {boolean} - Set whether merge requests can only be merged with successful jobs
     * @param params.only_allow_merge_if_all_discussions_are_resolved {boolean} - Set whether merge requests can only be merged when all the discussions are resolved
     * @param params.lfs_enabled {boolean} - Enable LFS
     * @param params.request_access_enabled {boolean} - Allow users to request member access
     * @param params.tag_list {array} - The list of tags for a project; put array of tags, that should be finally assigned to a project
     * @param params.avatar {mixed} - Image file for avatar of the project
     * @param params.printing_merge_request_link_enabled {boolean} - Show link to create/view merge request when pushing from the command line
     * @param params.ci_config_path {string} - The path to CI config file
     * @param params.repository_storage {string} - Which storage shard the repository is on. Available only to admins
     * @param params.approvals_before_merge {integer} - How many approvers should approve merge request by default
     * @returns {*}
     */

    createProjectForUser(user_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/user/${encodeURIComponent(user_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing project..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.name {string} - The name of the project
     * @param params.path {string} - Custom repository name for the project. By default generated based on name
     * @param params.default_branch {string} - 
master by default
     * @param params.description {string} - Short project description
     * @param params.issues_enabled {boolean} - Enable issues for this project
     * @param params.merge_requests_enabled {boolean} - Enable merge requests for this project
     * @param params.jobs_enabled {boolean} - Enable jobs for this project
     * @param params.wiki_enabled {boolean} - Enable wiki for this project
     * @param params.snippets_enabled {boolean} - Enable snippets for this project
     * @param params.resolve_outdated_diff_discussions {boolean} - Automatically resolve merge request diffs discussions on lines changed with a push
     * @param params.container_registry_enabled {boolean} - Enable container registry for this project
     * @param params.shared_runners_enabled {boolean} - Enable shared runners for this project
     * @param params.visibility {string} - See project visibility level

     * @param params.import_url {string} - URL to import repository from
     * @param params.public_jobs {boolean} - If true, jobs can be viewed by non-project-members
     * @param params.only_allow_merge_if_pipeline_succeeds {boolean} - Set whether merge requests can only be merged with successful jobs
     * @param params.only_allow_merge_if_all_discussions_are_resolved {boolean} - Set whether merge requests can only be merged when all the discussions are resolved
     * @param params.lfs_enabled {boolean} - Enable LFS
     * @param params.request_access_enabled {boolean} - Allow users to request member access
     * @param params.tag_list {array} - The list of tags for a project; put array of tags, that should be finally assigned to a project
     * @param params.avatar {mixed} - Image file for avatar of the project
     * @param params.ci_config_path {string} - The path to CI config file
     * @param params.repository_storage {string} - Which storage shard the repository is on. Available only to admins
     * @param params.approvals_before_merge {integer} - How many approvers should approve merge request by default
     * @returns {*}
     */

    editProject(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Forks a project into the user namespace of the authenticated user or the one provided..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.namespace {integer/string} - The ID or path of the namespace that the project will be forked to
     * @returns {*}
     */

    forkProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/fork`, params); // eslint-disable-line quotes
    }

    /**
     * List the projects accessible to the calling user that have an established, forked relationship with the specified project.

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.archived {boolean} - Limit by archived status
     * @param params.visibility {string} - Limit by visibility public, internal, or private

     * @param params.order_by {string} - Return projects ordered by id, name, path, created_at, updated_at, or last_activity_at fields. Default is created_at

     * @param params.sort {string} - Return projects sorted in asc or desc order. Default is desc

     * @param params.search {string} - Return list of projects matching the search criteria
     * @param params.simple {boolean} - Return only the ID, URL, name, and path of each project
     * @param params.owned {boolean} - Limit by projects owned by the current user
     * @param params.membership {boolean} - Limit by projects that the current user is a member of
     * @param params.starred {boolean} - Limit by projects starred by the current user
     * @param params.statistics {boolean} - Include project statistics
     * @param params.with_issues_enabled {boolean} - Limit by enabled issues feature
     * @param params.with_merge_requests_enabled {boolean} - Limit by enabled merge requests feature
     * @returns {*}
     */

    listForksOfAProject(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/forks`, params); // eslint-disable-line quotes
    }

    /**
     * Stars a given project. Returns status code 304 if the project is already starred..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    starAProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/star`, params); // eslint-disable-line quotes
    }

    /**
     * Unstars a given project. Returns status code 304 if the project is not starred..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    unstarAProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/unstar`, params); // eslint-disable-line quotes
    }

    /**
     * Archives the project if the user is either admin or the project owner of this project. This action is
idempotent, thus archiving an already archived project will not change the project..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    archiveAProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/archive`, params); // eslint-disable-line quotes
    }

    /**
     * Unarchives the project if the user is either admin or the project owner of this project. This action is
idempotent, thus unarchiving an non-archived project will not change the project..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    unarchiveAProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/unarchive`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a project including all associated resources (issues, merge requests etc.).

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    removeProject(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Uploads a file to the specified project to be used in an issue or merge request description, or a comment..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.file {string} - The file to be uploaded
     * @returns {*}
     */

    uploadAFile(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/uploads`, params); // eslint-disable-line quotes
    }

    /**
     * Allow to share project with group..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.group_id {integer} - The ID of the group to share with
     * @param params.group_access {integer} - The permissions level to grant the group
     * @param params.expires_at {string} - Share expiration date in ISO 8601 format: 2016-09-26
     * @returns {*}
     */

    shareProjectWithGroup(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/share`, params); // eslint-disable-line quotes
    }

    /**
     * Unshare the project from the group. Returns 204 and no content on success..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param group_id {integer} - The ID of the group
     * @param params {object}
     * @returns {*}
     */

    deleteASharedProjectLinkWithinAGroup(id, group_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/share/${encodeURIComponent(group_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Also called Project Hooks and Webhooks.
These are different for System Hooks that are system wide..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    hooks(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/hooks`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of project hooks..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    listProjectHooks(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/hooks`, params); // eslint-disable-line quotes
    }

    /**
     * Get a specific hook for a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param hook_id {integer} - The ID of a project hook
     * @param params {object}
     * @returns {*}
     */

    getProjectHook(id, hook_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/hooks/${encodeURIComponent(hook_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a hook to a specified project..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @param params.url {string} - The hook URL
     * @param params.push_events {boolean} - Trigger hook on push events
     * @param params.issues_events {boolean} - Trigger hook on issues events
     * @param params.merge_requests_events {boolean} - Trigger hook on merge requests events
     * @param params.tag_push_events {boolean} - Trigger hook on tag push events
     * @param params.note_events {boolean} - Trigger hook on note events
     * @param params.job_events {boolean} - Trigger hook on job events
     * @param params.pipeline_events {boolean} - Trigger hook on pipeline events
     * @param params.wiki_events {boolean} - Trigger hook on wiki events
     * @param params.enable_ssl_verification {boolean} - Do SSL verification when triggering the hook
     * @param params.token {string} - Secret token to validate received payloads; this will not be returned in the response
     * @returns {*}
     */

    addProjectHook(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/hooks`, params); // eslint-disable-line quotes
    }

    /**
     * Edits a hook for a specified project..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param hook_id {integer} - The ID of the project hook
     * @param params {object}
     * @param params.url {string} - The hook URL
     * @param params.push_events {boolean} - Trigger hook on push events
     * @param params.issues_events {boolean} - Trigger hook on issues events
     * @param params.merge_requests_events {boolean} - Trigger hook on merge requests events
     * @param params.tag_push_events {boolean} - Trigger hook on tag push events
     * @param params.note_events {boolean} - Trigger hook on note events
     * @param params.job_events {boolean} - Trigger hook on job events
     * @param params.pipeline_events {boolean} - Trigger hook on pipeline events
     * @param params.wiki_events {boolean} - Trigger hook on wiki events
     * @param params.enable_ssl_verification {boolean} - Do SSL verification when triggering the hook
     * @param params.token {string} - Secret token to validate received payloads; this will not be returned in the response
     * @returns {*}
     */

    editProjectHook(id, hook_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/hooks/${encodeURIComponent(hook_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a hook from a project. This is an idempotent method and can be called multiple times.
Either the hook is available or not..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param hook_id {integer} - The ID of the project hook
     * @param params {object}
     * @returns {*}
     */

    deleteProjectHook(id, hook_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/hooks/${encodeURIComponent(hook_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Allows modification of the forked relationship between existing projects. Available only for admins..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param forked_from_id {ID} - The ID of the project that was forked from
     * @param params {object}
     * @returns {*}
     */

    adminForkRelation(id, forked_from_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/fork/${encodeURIComponent(forked_from_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Search for projects by name which are accessible to the authenticated user. This
endpoint can be accessed without authentication if the project is publicly
accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param forked_from_id {ID} - The ID of the project that was forked from
     * @param params {object}
     * @returns {*}
     */

    createAForkedFromToRelationBetweenExistingProjects(id, forked_from_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/fork/${encodeURIComponent(forked_from_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Search for projects by name which are accessible to the authenticated user. This
endpoint can be accessed without authentication if the project is publicly
accessible..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    deleteAnExistingForkedFromRelationship(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/fork`, params); // eslint-disable-line quotes
    }

    /**
     * Search for projects by name which are accessible to the authenticated user. This
endpoint can be accessed without authentication if the project is publicly
accessible..

     * @param params {object}
     * @param params.search {string} - A string contained in the project name
     * @param params.order_by {string} - Return requests ordered by id, name, created_at or last_activity_at fields
     * @param params.sort {string} - Return requests sorted in asc or desc order
     * @returns {*}
     */

    searchForProjectsByName(params) {
        return this.http.get(`/projects`, params); // eslint-disable-line quotes
    }

    /**
     * Get the push rules of a project..

     * @param id {integer/string} - The ID of the project or NAMESPACE/PROJECT_NAME
     * @param params {object}
     * @returns {*}
     */

    startTheHousekeepingTaskForAProject(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/housekeeping`, params); // eslint-disable-line quotes
    }

    /**
     * Get the push rules of a project..

     * @param id {integer/string} - The ID of the project or NAMESPACE/PROJECT_NAME
     * @param params {object}
     * @returns {*}
     */

    pushRules(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/push_rule`, params); // eslint-disable-line quotes
    }

    /**
     * Get the push rules of a project..

     * @param id {integer/string} - The ID of the project or NAMESPACE/PROJECT_NAME
     * @param params {object}
     * @returns {*}
     */

    getProjectPushRules(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/push_rule`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a push rule to a specified project..

     * @param id {integer/string} - The ID of the project or NAMESPACE/PROJECT_NAME
     * @param params {object}
     * @param params.deny_delete_tag {boolean} - Deny deleting a tag
     * @param params.member_check {boolean} - Restrict commits by author (email) to existing GitLab users
     * @param params.prevent_secrets {boolean} - GitLab will reject any files that are likely to contain secrets
     * @param params.commit_message_regex {string} - All commit messages must match this, e.g. Fixed \d+\..*

     * @param params.branch_name_regex {string} - All branch names must match this, e.g. `(feature
     * @param params.author_email_regex {string} - All commit author emails must match this, e.g. @my-company.com$

     * @param params.file_name_regex {string} - All commited filenames must not match this, e.g. `(jar
     * @param params.max_file_size {integer} - Maximum file size (MB)
     * @returns {*}
     */

    addProjectPushRule(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/push_rule`, params); // eslint-disable-line quotes
    }

    /**
     * Edits a push rule for a specified project..

     * @param id {integer/string} - The ID of the project or NAMESPACE/PROJECT_NAME
     * @param params {object}
     * @param params.deny_delete_tag {boolean} - Deny deleting a tag
     * @param params.member_check {boolean} - Restrict commits by author (email) to existing GitLab users
     * @param params.prevent_secrets {boolean} - GitLab will reject any files that are likely to contain secrets
     * @param params.commit_message_regex {string} - All commit messages must match this, e.g. Fixed \d+\..*

     * @param params.branch_name_regex {string} - All branch names must match this, e.g. `(feature
     * @param params.author_email_regex {string} - All commit author emails must match this, e.g. @my-company.com$

     * @param params.file_name_regex {string} - All commited filenames must not match this, e.g. `(jar
     * @param params.max_file_size {integer} - Maximum file size (MB)
     * @returns {*}
     */

    editProjectPushRule(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/push_rule`, params); // eslint-disable-line quotes
    }

    /**
     * Removes a push rule from a project. This is an idempotent method and can be called multiple times.
Either the push rule is available or not..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param params {object}
     * @returns {*}
     */

    deleteProjectPushRule(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/push_rule`, params); // eslint-disable-line quotes
    }

}

module.exports = Projects;

