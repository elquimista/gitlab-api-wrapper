
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Boards .
 */
class Boards extends ModelBase {

     /**
     * Create Boards .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Every API call to boards must be authenticated..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    issueBoardsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/boards`, params); // eslint-disable-line quotes
    }

    /**
     * Lists Issue Boards in the given project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    projectBoard(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/boards`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single board..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @returns {*}
     */

    singleBoard(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a board..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the new board
     * @returns {*}
     */

    createABoardStarter(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/boards`, params); // eslint-disable-line quotes
    }

    /**
     * Updates a board..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @param params.name {string} - The new name of the board
     * @param params.assignee_id {integer} - The assignee the board should be scoped to
     * @param params.milestone_id {integer} - The milestone the board should be scoped to
     * @param params.labels {string} - Comma-separated list of label names which the board should be scoped to
     * @param params.weight {integer} - The weight range from 0 to 9, to which the board should be scoped to
     * @returns {*}
     */

    updateABoardStarter(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a board..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @returns {*}
     */

    deleteABoardStarter(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of the board’s lists.
Does not include open and closed lists.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @returns {*}
     */

    listBoardLists(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single board list..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param list_id {integer} - The ID of a board’s list
     * @param params {object}
     * @returns {*}
     */

    singleBoardList(id, board_id, list_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists/${encodeURIComponent(list_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new Issue Board list..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @param params.label_id {integer} - The ID of a label
     * @param params.assignee_id {integer} - The ID of a user
     * @param params.milestone_id {integer} - The ID of a milestone
     * @returns {*}
     */

    newBoardList(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing Issue Board list. This call is used to change list position..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param list_id {integer} - The ID of a board’s list
     * @param params {object}
     * @param params.position {integer} - The position of the list
     * @returns {*}
     */

    editBoardList(id, board_id, list_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists/${encodeURIComponent(list_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Only for admins and project owners. Soft deletes the board list in question..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param list_id {integer} - The ID of a board’s list
     * @param params {object}
     * @returns {*}
     */

    deleteABoardList(id, board_id, list_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists/${encodeURIComponent(list_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Boards;

