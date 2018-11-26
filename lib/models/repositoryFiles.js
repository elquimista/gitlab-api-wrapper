
'use strict';

/*eslint-disable */
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
     * Get raw file from repository..

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getRawFileFromRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}/raw`, params); // eslint-disable-line quotes
    }

    /**
     * This allows you to create a single file. For creating multiple files with a single request see the commits API..

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createNewFileInRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}`, params); // eslint-disable-line quotes
    }

    /**
     * This allows you to update a single file. For updating multiple files with a single request see the commits API..

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    updateExistingFileInRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}`, params); // eslint-disable-line quotes
    }

    /**
     * This allows you to delete a single file. For deleting multiple files with a singleh request see the commits API..

     * @param file_path {} - undefined
     * @param params {object}
     * @returns {*}
     */

    deleteExistingFileInRepository(id, file_path, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/repository/files/${encodeURIComponent(file_path)}`, params); // eslint-disable-line quotes
    }

}

module.exports = RepositoryFiles;

