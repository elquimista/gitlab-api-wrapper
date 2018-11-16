
'use strict';

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
     * Get a list of the board's lists.
Does not include backlog and closed lists.

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
     * @param list_id {integer} - The ID of a board's list
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
     * @returns {*}
     */

    newBoardList(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing Issue Board list. This call is used to change list position..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param list_id {integer} - The ID of a board's list
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
     * @param list_id {integer} - The ID of a board's list
     * @param params {object}
     * @returns {*}
     */

    deleteABoardList(id, board_id, list_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists/${encodeURIComponent(list_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Boards;

