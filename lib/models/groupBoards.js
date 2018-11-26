
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Group Boards .
 */
class GroupBoards extends ModelBase {

     /**
     * Create Group Boards .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Every API call to group boards must be authenticated..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    groupIssueBoardsApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/boards`, params); // eslint-disable-line quotes
    }

    /**
     * Lists Issue Boards in the given group..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    groupBoard(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/boards`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single board..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @returns {*}
     */

    singleBoard(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a board..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the new board
     * @returns {*}
     */

    createABoard(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/boards`, params); // eslint-disable-line quotes
    }

    /**
     * Updates a board..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @param params.name {string} - The new name of the board
     * @param params.assignee_id {integer} - The assignee the board should be scoped to
     * @param params.milestone_id {integer} - The milestone the board should be scoped to
     * @param params.labels {string} - Comma-separated list of label names which the board should be scoped to
     * @param params.weight {integer} - The weight range from 0 to 9, to which the board should be scoped to
     * @returns {*}
     */

    updateABoard(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes a board..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @returns {*}
     */

    deleteABoard(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Get a list of the board’s lists.
Does not include open and closed lists.

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @returns {*}
     */

    listBoardLists(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists`, params); // eslint-disable-line quotes
    }

    /**
     * Get a single board list..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param list_id {integer} - The ID of a board’s list
     * @param params {object}
     * @returns {*}
     */

    singleBoardList(id, board_id, list_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists/${encodeURIComponent(list_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new Issue Board list..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param params {object}
     * @param params.label_id {integer} - The ID of a label
     * @returns {*}
     */

    newBoardList(id, board_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists`, params); // eslint-disable-line quotes
    }

    /**
     * Updates an existing Issue Board list. This call is used to change list position..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param list_id {integer} - The ID of a board’s list
     * @param params {object}
     * @param params.position {integer} - The position of the list
     * @returns {*}
     */

    editBoardList(id, board_id, list_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists/${encodeURIComponent(list_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Only for admins and group owners. Soft deletes the board list in question..

     * @param id {integer/string} - The ID or URL-encoded path of the group owned by the authenticated user
     * @param board_id {integer} - The ID of a board
     * @param list_id {integer} - The ID of a board’s list
     * @param params {object}
     * @returns {*}
     */

    deleteABoardList(id, board_id, list_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/boards/${encodeURIComponent(board_id)}/lists/${encodeURIComponent(list_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = GroupBoards;

