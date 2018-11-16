
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Notes .
 */
class Notes extends ModelBase {

     /**
     * Create Notes .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Notes are comments on snippets, issues or merge requests..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    notesApi(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single issue..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    issues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single issue..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    listProjectIssueNotes(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single note for a specific project issue.

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSingleIssueNote(id, issue_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new note to a single project issue. If you create a note where the body
only contains an Award Emoji, you'll receive this object back..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createNewIssueNote(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify existing note of an issue..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    modifyExistingIssueNote(id, issue_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing note of an issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The IID of an issue
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @returns {*}
     */

    deleteAnIssueNote(id, issue_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single snippet. Snippet notes are comments users can post to a snippet..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    snippets(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single snippet. Snippet notes are comments users can post to a snippet..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    listAllSnippetNotes(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single note for a given snippet..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSingleSnippetNote(id, snippet_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new note for a single snippet. Snippet notes are comments users can post to a snippet.
If you create a note where the body only contains an Award Emoji, you'll receive this object back..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createNewSnippetNote(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify existing note of a snippet..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    modifyExistingSnippetNote(id, snippet_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing note of a snippet..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param snippet_id {integer} - The ID of a snippet
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @returns {*}
     */

    deleteASnippetNote(id, snippet_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single merge request..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    mergeRequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single merge request..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    listAllMergeRequestNotes(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single note for a given merge request..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    getSingleMergeRequestNote(id, merge_request_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new note for a single merge request.
If you create a note where the body only contains an Award Emoji, you'll receive
this object back..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    createNewMergeRequestNote(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify existing note of a merge request..

     * @param id {} - undefined
     * @param params {object}
     * @returns {*}
     */

    modifyExistingMergeRequestNote(id, merge_request_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing note of a merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The IID of a merge request
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @returns {*}
     */

    deleteAMergeRequestNote(id, merge_request_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Notes;

