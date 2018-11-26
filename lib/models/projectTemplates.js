
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Project Templates .
 */
class ProjectTemplates extends ModelBase {

     /**
     * Create Project Templates .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * This API is a project-specific version of these endpoints:.

     * @param params {object}
     * @param params. {} - undefined
     * @returns {*}
     */

    projectTemplatesApi(id, type, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/templates/${encodeURIComponent(type)}`, params); // eslint-disable-line quotes
    }

    /**
     * Example response (licenses):.

     * @param type {string} - The type (dockerfiles|gitignores|gitlab_ci_ymls|licenses) of the template
     * @param params {object}
     * @param params.id  {integer / string} - The ID or URL-encoded path of the project

     * @returns {*}
     */

    getAllTemplatesOfAParticularType(id, type, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/templates/${encodeURIComponent(type)}`, params); // eslint-disable-line quotes
    }

    /**
     * Example response (Dockerfile):.

     * @param type {string} - The type (dockerfiles|gitignores|gitlab_ci_ymls|licenses) of the template
     * @param key {string} - The key of the template, as obtained from the collection endpoint
     * @param params {object}
     * @param params.id  {integer / string} - The ID or URL-encoded path of the project

     * @param params.project {string} - The project name to use when expanding placeholders in the template. Only affects licenses
     * @param params.fullname {string} - The full name of the copyright holder to use when expanding placeholders in the template. Only affects licenses
     * @returns {*}
     */

    getOneTemplateOfAParticularType(id, type, key, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/templates/${encodeURIComponent(type)}/${encodeURIComponent(key)}`, params); // eslint-disable-line quotes
    }

}

module.exports = ProjectTemplates;

