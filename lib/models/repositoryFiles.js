
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Repository Files .
 */
class RepositoryFiles extends ModelBase {

     /**
     * Create Repository Files .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * CRUD for repository files.

     * @param params {object}
     * @returns {*}
     */

    repositoryFilesApi(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}`, params); // eslint-disable-line quotes
    }

    /**
     * Allows you to receive information about file in repository like name, size,
content. Note that file content is Base64 encoded. This endpoint can be accessed
without authentication if the repository is publicly accessible..

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getFileFromRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}`, params); // eslint-disable-line quotes
    }

    /**
     * Parameters:.

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getRawFileFromRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}/raw`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createNewFileInRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    updateExistingFileInRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteExistingFileInRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}`, params); // eslint-disable-line quotes
    }

}

module.exports = RepositoryFiles;

