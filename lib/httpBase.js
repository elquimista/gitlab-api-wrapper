"use strict";

const Fetch = require('isomorphic-fetch');
const QueryString = require('query-string');

/**
 * Class representing Http Base
 */
class HttpBase {

  /**
   * Create Http Base
   * @param options
   *   options.base_url {string} - gitlab api base url(Example: http://gitlab.alibaba-inc.com/)
   *   options.token {string} - gitlab private token
   *   options.timeout {number} - global fetch timeout setting
   */
  constructor (options) {
    this.options = options;

    this._headers = {
      'Authorization': `Bearer ${this.options['private_token']}`,
    };
  }

  /**
   * Get
   * @param path {string} - fetch path
   * @param query {object} - fetch query params
   * @returns {Promise}
   */
  ['get'] (path, query) {
    const queryString = QueryString.stringify(query);
    const fetchUrl = `${this.options.base_url}${path}${queryString ? ('?' + queryString) : ''}`;

    return new Promise((resolve, reject) => {
      Fetch(fetchUrl, {
        method: 'GET',
        headers: this._headers,
        timeout: this.options.timeout,
      }).then((response) => {
        if (response.status > 400) {
          throw new Error(`${fetchUrl} response ${response.status}.`);
        }

        return response.json();
      }).then((json) => {
        resolve(json);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  getText (path, query) {
    const queryString = QueryString.stringify(query);
    const fetchUrl = `${this.options.base_url}${path}${queryString ? ('?' + queryString) : ''}`;

    return new Promise((resolve, reject) => {
      Fetch(fetchUrl, {
        method: 'GET',
        headers: this._headers,
        timeout: this.options.timeout,
      }).then((response) => {
        if (response.status > 400) {
          throw new Error(`${fetchUrl} response ${response.status}.`);
        }

        return response.text();
      }).then((text) => {
        resolve(text);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  /**
   * Post request
   * @param path {string} - fetch path
   * @param data {object} - post data
   * @returns {Promise}
   */
  post (path, data) {
    const fetchUrl = `${this.options.base_url}${path}`;

    return new Promise((resolve, reject) => {
      Fetch(fetchUrl, {
        method: 'POST',
        headers: this._headers,
        body: QueryString.stringify(data),
        timeout: this.options.timeout,
      }).then((response) => {
        if (response.status > 400) {
          throw new Error(`${fetchUrl} response ${response.status}.`);
        }

        return response.json();
      }).then((json) => {
        resolve(json);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  /**
   * Put request
   * @param path {string} - fetch path
   * @param data {object} - put data
   * @returns {Promise}
   */
  put (path, data) {
    const fetchUrl = `${this.options.base_url}${path}`;

    const putHeaders = Object.assign({}, this._headers, {
      'Content-type': 'application/x-www-form-urlencoded',
    });
    return new Promise((resolve, reject) => {
      Fetch(fetchUrl, {
        method: 'PUT',
        headers: putHeaders,
        body: QueryString.stringify(data),
        timeout: this.options.timeout,
      }).then((response) => {
        if (response.status > 400) {
          throw new Error(`${fetchUrl} response ${response.status}.`);
        }

        return response.json();
      }).then((json) => {
        resolve(json);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  /**
   * Delete request
   * @param path {string} - fetch path
   * @returns {Promise}
   */
  ['delete'] (path, data) {
    const fetchUrl = `${this.options.base_url}${path}`;

    const deleteHeaders = Object.assign({}, this._headers, {
      'Content-type': 'application/x-www-form-urlencoded',
    });
    return new Promise((resolve, reject) => {
      Fetch(fetchUrl, {
        method: 'DELETE',
        headers: deleteHeaders,
        body: QueryString.stringify(data),
        timeout: this.options.timeout,
      }).then((response) => {
        if (response.status > 400) {
          throw new Error(`${fetchUrl} response ${response.status}.`);
        }

        return response.json();
      }).then((json) => {
        resolve(json);
      }).catch((e) => {
        reject(e);
      });
    });
  }

}

module.exports = HttpBase;
