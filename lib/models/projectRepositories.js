'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Project Repositories.
 */
class ProjectRepositories extends ModelBase {

  /**
   * Create Project Repositories.
   * @param client
   */
  constructor (client) {
    super(client);
  }

  /**
   * Get a list of repository files and directories in a project.
   * @param id {number} - The ID of a project
   * @param [path] {string} - The path inside repository. Used to get contend of subdirectories
   * @param [ref_name] {string} - The name of a repository branch or tag or if not given the default branch
   * @returns {*}
   */
  listTree (id, path, ref_name) {
    return this.http.get(`/projects/${id}/repository/tree`, {
      path: path,
      ref_name: ref_name,
    });
  }

  /**
   * Get the raw file contents for a file by commit SHA and path.
   * @param id {number} - The ID of a project
   * @param sha {string} - The commit or branch name
   * @param filePath {string} - The path the file
   * @returns {*}
   */
  rawFile (id, sha, filePath) {
    return this.http.getText(`/projects/${id}/repository/blobs/${sha}`, {
      filepath: filePath,
    });
  }

  /**
   * Get the raw file contents for a blob by blob SHA.
   * @param id {number} - The ID of a project
   * @param sha {string} - The commit or branch name
   * @returns {*}
   */
  rawBlobFile (id, sha) {
    return this.http.getText(`/projects/${id}/repository/raw_blobs/${sha}`, {});
  }

  /**
   * Get the raw file contents for a blob by blob SHA.
   * @param id {number} - The ID of a project
   * @param [sha] {string} - The commit or branch name
   * @returns {*}
   */
  fileArchive (id, sha) {
    return this.http.getText(`/projects/${id}/repository/archive`, {
      sha: sha,
    });
  }

  /**
   * Compare branches, tags or commits
   * @param id {number} - The ID of a project
   * @param from {string} - the commit SHA or branch name
   * @param to {string} - the commit SHA or branch name
   * @returns {*}
   */
  compare (id, from, to) {
    return this.http.get(`/projects/${id}/repository/compare`, {
      from: from,
      to: to,
    });
  }

  /**
   * Get repository contributors list
   * @param id {number} - The ID of a project
   * @returns {*}
   */
  contributors (id) {
    return this.http.get(`/projects/${id}/repository/contributors`, {});
  }

  /**
   * Get file from repository
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param params.file_path {string} - Full path to new file. Ex. lib/class.rb
   * @param params.ref {string} - The name of branch, tag or commit
   * @returns {*}
   */
  getFile (id, params) {
    return this.http.get(`/projects/${id}/repository/files`, params);
  }

  /**
   * Create new file in repository
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param params.file_path - Full path to new file. Ex. lib/class.rb
   * @param params.branch_name - The name of branch
   * @param params.content - File content
   * @param params.commit_message {string} - Commit message
   * @param [params.encoding] - 'text' or 'base64'. Text is default.
   * @returns {*}
   */
  createFile (id, params) {
    return this.http.post(`/projects/${id}/repository/files`, params);
  }

  /**
   * Update existing file in repository
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param params.file_path - Full path to file. Ex. lib/class.rb
   * @param params.branch_name - The name of branch
   * @param params.content - File content
   * @param params.commit_message {string} - Commit message
   * @param [params.encoding] - 'text' or 'base64'. Text is default.
   * @returns {*|Promise}
   */
  updateFile (id, params) {
    return this.http.put(`/projects/${id}/repository/files`, params);
  }

  /**
   * Delete existing file in repository
   * @param id {number} - The ID of a project
   * @param params {object}
   * @param params.file_path - Full path to file. Ex. lib/class.rb
   * @param params.branch_name - The name of branch
   * @param params.commit_message {string} - Commit message
   * @returns {*|Promise}
   */
  deleteFile (id, params) {
    return this.http.delete(`/projects/${id}/repository/files`, params);
  }

}

module.exports = ProjectRepositories;
