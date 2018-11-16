
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Todos .
 */
class Todos extends ModelBase {

     /**
     * Create Todos .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Returns a list of todos. When no filter is applied, it returns all pending todos
for the current user. Different filters allow the user to precise the request..

     * @param params {object}
     * @param params.action {string} - The action to be filtered. Can be assigned, mentioned, build_failed, marked, or approval_required.
     * @param params.author_id {integer} - The ID of an author
     * @param params.project_id {integer} - The ID of a project
     * @param params.state {string} - The state of the todo. Can be either pending or done

     * @param params.type {string} - The type of a todo. Can be either Issue or MergeRequest

     * @returns {*}
     */

    todosApi(params) {
        return this.http.get(`/todos`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a list of todos. When no filter is applied, it returns all pending todos
for the current user. Different filters allow the user to precise the request..

     * @param params {object}
     * @param params.action {string} - The action to be filtered. Can be assigned, mentioned, build_failed, marked, or approval_required.
     * @param params.author_id {integer} - The ID of an author
     * @param params.project_id {integer} - The ID of a project
     * @param params.state {string} - The state of the todo. Can be either pending or done

     * @param params.type {string} - The type of a todo. Can be either Issue or MergeRequest

     * @returns {*}
     */

    getAListOfTodos(params) {
        return this.http.get(`/todos`, params); // eslint-disable-line quotes
    }

    /**
     * Marks a single pending todo given by its ID for the current user as done. The
todo marked as done is returned in the response..

     * @param id {integer} - The ID of a todo
     * @param params {object}
     * @returns {*}
     */

    markATodoAsDone(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/todos/${encodeURIComponent(id)}/mark_as_done`, params); // eslint-disable-line quotes
    }

    /**
     * Marks all pending todos for the current user as done. It returns the HTTP status code 204 with an empty response..

     * @param params {object}
     * @returns {*}
     */

    markAllTodosAsDone(params) {
        return this.http.post(`/todos/mark_as_done`, params); // eslint-disable-line quotes
    }

}

module.exports = Todos;

