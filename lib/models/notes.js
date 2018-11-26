
'use strict';

/*eslint-disable */
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
     * Notes are comments on snippets, issues, merge requests or epics..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @param params.sort {string} - Return issue notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return issue notes ordered by created_at or updated_at fields. Default is created_at

     * @returns {*}
     */

    notesApi(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @param params.sort {string} - Return issue notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return issue notes ordered by created_at or updated_at fields. Default is created_at

     * @returns {*}
     */

    issues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @param params.sort {string} - Return issue notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return issue notes ordered by created_at or updated_at fields. Default is created_at

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
     * Creates a new note to a single project issue..

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

     * @param id {integer/string} - The ID or URL-encoded path of the project

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

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of a project snippet
     * @param params {object}
     * @param params.sort {string} - Return snippet notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return snippet notes ordered by created_at or updated_at fields. Default is created_at

     * @returns {*}
     */

    snippets(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single snippet. Snippet notes are comments users can post to a snippet..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of a project snippet
     * @param params {object}
     * @param params.sort {string} - Return snippet notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return snippet notes ordered by created_at or updated_at fields. Default is created_at

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
If you create a note where the body only contains an Award Emoji, you’ll receive this object back..

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

     * @param id {integer/string} - The ID or URL-encoded path of the project

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

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a project merge request
     * @param params {object}
     * @param params.sort {string} - Return merge request notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return merge request notes ordered by created_at or updated_at fields. Default is created_at

     * @returns {*}
     */

    mergeRequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a project merge request
     * @param params {object}
     * @param params.sort {string} - Return merge request notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return merge request notes ordered by created_at or updated_at fields. Default is created_at

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
If you create a note where the body only contains an Award Emoji, you’ll receive
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

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @returns {*}
     */

    deleteAMergeRequestNote(id, merge_request_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single epic. Epic notes are comments users can post to an epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of a group epic
     * @param params {object}
     * @param params.sort {string} - Return epic notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return epic notes ordered by created_at or updated_at fields. Default is created_at

     * @returns {*}
     */

    epics(id, epic_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all notes for a single epic. Epic notes are comments users can post to an epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of a group epic
     * @param params {object}
     * @param params.sort {string} - Return epic notes sorted in asc or desc order. Default is desc

     * @param params.order_by {string} - Return epic notes ordered by created_at or updated_at fields. Default is created_at

     * @returns {*}
     */

    listAllEpicNotes(id, epic_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single note for a given epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @returns {*}
     */

    getSingleEpicNote(id, epic_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new note for a single epic. Epic notes are comments users can post to an epic.
If you create a note where the body only contains an Award Emoji, you’ll receive this object back..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param params {object}
     * @param params.body {string} - The content of a note
     * @returns {*}
     */

    createNewEpicNote(id, epic_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify existing note of an epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @param params.body {string} - The content of a note
     * @returns {*}
     */

    modifyExistingEpicNote(id, epic_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing note of an epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @returns {*}
     */

    deleteAnEpicNote(id, epic_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Notes;

