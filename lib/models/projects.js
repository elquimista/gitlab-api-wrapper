"use strict";

const ModelBase = require('../modelBase');

class Projects extends ModelBase {

  constructor (client) {
    super(client);
  }

  init () {
    this.branches = this.load('projectBranches');
    this.commits = this.load('projectCommits');
    this.keys = this.load('projectDeployKeys');
    this.hooks = this.load('projectHooks');
    this.issues = this.load('projectIssues');
    this.labels = this.load('projectLabels');
    this.members = this.load('projectMembers');
    this.mergerequests = this.load('projectMergeRequests');
    this.milestones = this.load('projectMilestones');
    this.repositories = this.load('projectRepositories');
    this.tags = this.load('projectTags');
  }

  /**
   * Get a list of projects accessible by the authenticated user.
   * @param params {object}
   * @param [params.archived] {boolean} - if passed, limit by archived status
   * @param [params.order_by] {boolean} - Return requests ordered by id, name, path, created_at, updated_at or last_activity_at fields. Default is created_at
   * @param [params.sort] {string} - Return requests sorted in asc or desc order. Default is desc
   * @param [params.search] {string} - Return list of authorized projects according to a search criteria
   * @param [params.page] {number} - current page
   * @param [params.per_page] {number} - page size
   * @returns {*}
   */
  list (params) {
    return this.http.get(`/projects`, params);
  }

  /**
   * Get a list of projects which are owned by the authenticated user.
   * @param params {object}
   * @param [params.archived] {boolean} - if passed, limit by archived status
   * @param [params.order_by] {boolean} - Return requests ordered by id, name, path, created_at, updated_at or last_activity_at fields. Default is created_at
   * @param [params.sort] {string} - Return requests sorted in asc or desc order. Default is desc
   * @param [params.search] {string} - Return list of authorized projects according to a search criteria
   * @param [params.page] {number} - current page
   * @param [params.per_page] {number} - page size
   * @returns {*}
   */
  owned (params) {
    return this.http.get(`/projects/owned`, params);
  }

  /**
   * Get a list of projects which are starred by the authenticated user.
   * @param params {object}
   * @param [params.archived] {boolean} - if passed, limit by archived status
   * @param [params.order_by] {boolean} - Return requests ordered by id, name, path, created_at, updated_at or last_activity_at fields. Default is created_at
   * @param [params.sort] {string} - Return requests sorted in asc or desc order. Default is desc
   * @param [params.search] {string} - Return list of authorized projects according to a search criteria
   * @param [params.page] {number} - current page
   * @param [params.per_page] {number} - page size
   * @returns {*}
   */
  starred (params) {
    return this.http.get(`/projects/starred`, params);
  }

  /**
   * Get a list of all GitLab projects (admin only).
   * @param params {object}
   * @param [params.archived] {string} - if passed, limit by archived status
   * @param [params.order_by] {string} - Return requests ordered by id, name, path, created_at, updated_at or last_activity_at fields. Default is created_at
   * @param [params.sort] {string} - Return requests sorted in asc or desc order. Default is desc
   * @param [params.search] {string} - Return list of authorized projects according to a search criteria
   * @param [params.page] {number} - current page
   * @param [params.per_page] {number} - page size
   * @returns {*}
   */
  all (params) {
    return this.http.get(`/projects/all`, {});
  }

  /**
   * Get a specific project, identified by project ID or NAMESPACE/PROJECT_NAME, which is owned by the authenticated user.
   * @param id(or NAMESPACE/PROJECT_NAME) {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @returns {*}
   */
  one (id) {
    return this.http.get(`/projects/${encodeURIComponent(id)}`, {});
  }

  /**
   * Get the events for the specified project. Sorted from newest to latest.
   * @param id(or NAMESPACE/PROJECT_NAME) {number} - The ID or NAMESPACE/PROJECT_NAME of a project
   * @returns {*}
   */
  events (id) {
    return this.http.get(`/projects/${encodeURIComponent(id)}/events`, {});
  }

  /**
   * Creates a new project owned by the authenticated user.
   * @param params {object}
   * @param params.name {string} - new project name
   * @param [params.path] {string} - custom repository name for new project. By default generated based on name
   * @param [params.namespace_id] {string} - namespace for the new project (defaults to user)
   * @param [params.description] {string} - short project description
   * @param [params.issues_enabled] {boolean}
   * @param [params.merge_requests_enabled] {boolean}
   * @param [params.builds_enabled] {boolean}
   * @param [params.wiki_enabled] {boolean}
   * @param [params.snippets_enabled] {boolean}
   * @param [params.public] {boolean} - if true same as setting visibility_level = 20
   * @param [params.visibility_level] {number}
   * @param [params.import_url] {string}
   * @returns {*}
   */
  create (params) {
    return this.http.post(`/projects`, params);
  }

  /**
   * Creates a new project owned by the specified user. Available only for admins.
   * @param user_id {number} - user_id of owner
   * @param params {object}
   * @param params.name {string} - new project name
   * @param [params.description] {string} - short project description
   * @param [params.issues_enabled] {boolean}
   * @param [params.merge_requests_enabled] {boolean}
   * @param [params.builds_enabled] {boolean}
   * @param [params.wiki_enabled] {boolean}
   * @param [params.snippets_enabled] {boolean}
   * @param [params.public] {boolean} - if true same as setting visibility_level = 20
   * @param [params.visibility_level] {number}
   * @param [params.import_url] {string}
   * @returns {*}
   */
  createForUser (user_id, params) {
    return this.http.post(`/projects/user/${user_id}`, params);
  }

  /**
   * Updates an existing project.
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param [params.name] {string} - project name
   * @param [params.path] {string} - repository name for project
   * @param [params.description] {string} - short project description
   * @param [params.default_branch] {string}
   * @param [params.issues_enabled] {boolean}
   * @param [params.merge_requests_enabled] {boolean}
   * @param [params.builds_enabled] {boolean}
   * @param [params.wiki_enabled] {boolean}
   * @param [params.snippets_enabled] {boolean}
   * @param [params.public] {boolean} - if true same as setting visibility_level = 20
   * @param [params.visibility_level] {number}
   */
  update (id, params) {
    return this.http.put(`/projects/${id}`, params);
  }

  /**
   * Forks a project into the user namespace of the authenticated user.
   * @param id
   * @returns {*}
   */
  fork (id) {
    return this.http.post(`/projects/fork/${id}`, {});
  }

  /**
   * Removes a project including all associated resources (issues, merge requests etc.)
   * @param id {number} - The ID of a project
   * @returns {*}
   */
  ['delete'] (id) {
    return this.http.delete(`/projects/${id}`, {});
  }

  /**
   * Search for projects by name which are accessible to the authenticated user.
   * @param params {object}
   * @param params.query {string} - A string contained in the project name
   * @param [params.per_page] {number} - number of projects to return per page
   * @param [params.page] {number} - the page to retrieve
   * @param [params.order_by] - Return requests ordered by id, name, created_at or last_activity_at fields
   * @parma [params.sort] {string} - Return requests sorted in asc or desc order
   */
  searchByName (query, params) {
    return this.http.get(`/projects/search/${query}`, params);
  }

}

module.exports = Projects;
