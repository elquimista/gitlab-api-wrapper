
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Project Import Export .
 */
class ProjectImportExport extends ModelBase {

     /**
     * Create Project Import Export .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Introduced in GitLab 10.6.

     * @param params {object}
     * @returns {*}
     */

    projectImportexportApi(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/export`, params); // eslint-disable-line quotes
    }

    /**
     * Start a new export..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.description {string} - Overrides the project description
     * @param params.upload {hash} - Hash that contains the information to upload the exported project to a web server
     * @param params.upload[url] {string} - The URL to upload the project
     * @param params.upload[http_method] {string} - The HTTP method to upload the exported project. Only PUT and POST methods allowed. Default is PUT

     * @returns {*}
     */

    scheduleAnExport(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/export`, params); // eslint-disable-line quotes
    }

    /**
     * Get the status of export..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    exportStatus(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/export`, params); // eslint-disable-line quotes
    }

    /**
     * Download the finished export..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    exportDownload(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/export/download`, params); // eslint-disable-line quotes
    }

    /**
     * The override params passed will take precedence over all values defined inside the export file..

     * @param params {object}
     * @param params.namespace {integer/string} - The ID or path of the namespace that the project will be imported to. Defaults to the current user’s namespace
     * @param params.file {string} - The file to be uploaded
     * @param params.path {string} - Name and path for new project
     * @param params.overwrite {boolean} - If there is a project with the same path the import will overwrite it. Default to false
     * @param params.override_params {Hash} - Supports all fields defined in the Project API

     * @returns {*}
     */

    importAFile(params) {
        return this.http.post(`/projects/import`, params); // eslint-disable-line quotes
    }

    /**
     * Get the status of an import..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    importStatus(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/import`, params); // eslint-disable-line quotes
    }

}

module.exports = ProjectImportExport;

