
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Discussions .
 */
class Discussions extends ModelBase {

     /**
     * Create Discussions .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Discussions are set of related notes on snippets, issues, epics, merge requests or commits..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @returns {*}
     */

    discussionsApi(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @returns {*}
     */

    issues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @returns {*}
     */

    listProjectIssueDiscussions(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single discussion for a specific project issue.

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @returns {*}
     */

    getSingleIssueDiscussion(id, issue_iid, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/discussions/${encodeURIComponent(discussion_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new discussion to a single project issue. This is similar to creating
a note but but another comments (replies) can be added to it later..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param params {object}
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @returns {*}
     */

    createNewIssueDiscussion(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a new note to the discussion..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @param params.note_id {integer} - The ID of a discussion note
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @returns {*}
     */

    addNoteToExistingIssueDiscussion(id, issue_iid, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/discussions/${encodeURIComponent(discussion_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify existing discussion note of an issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @param params.body {string} - The content of a discussion
     * @returns {*}
     */

    modifyExistingIssueDiscussionNote(id, issue_iid, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing discussion note of an issue..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param issue_iid {integer} - The IID of an issue
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @returns {*}
     */

    deleteAnIssueDiscussionNote(id, issue_iid, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single snippet..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of an snippet
     * @param params {object}
     * @returns {*}
     */

    snippets(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single snippet..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of an snippet
     * @param params {object}
     * @returns {*}
     */

    listProjectSnippetDiscussions(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single discussion for a specific project snippet.

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of an snippet
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @returns {*}
     */

    getSingleSnippetDiscussion(id, snippet_id, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/discussions/${encodeURIComponent(discussion_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new discussion to a single project snippet. This is similar to creating
a note but but another comments (replies) can be added to it later..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of an snippet
     * @param params {object}
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @returns {*}
     */

    createNewSnippetDiscussion(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a new note to the discussion..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of an snippet
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @param params.note_id {integer} - The ID of a discussion note
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @returns {*}
     */

    addNoteToExistingSnippetDiscussion(id, snippet_id, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/discussions/${encodeURIComponent(discussion_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify existing discussion note of an snippet..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of an snippet
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @param params.body {string} - The content of a discussion
     * @returns {*}
     */

    modifyExistingSnippetDiscussionNote(id, snippet_id, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing discussion note of an snippet..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param snippet_id {integer} - The ID of an snippet
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @returns {*}
     */

    deleteAnSnippetDiscussionNote(id, snippet_id, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param params {object}
     * @returns {*}
     */

    epics(id, epic_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param params {object}
     * @returns {*}
     */

    listGroupEpicDiscussions(id, epic_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single discussion for a specific group epic.

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @returns {*}
     */

    getSingleEpicDiscussion(id, epic_id, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/discussions/${encodeURIComponent(discussion_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new discussion to a single group epic. This is similar to creating
a note but but another comments (replies) can be added to it later..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param params {object}
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @returns {*}
     */

    createNewEpicDiscussion(id, epic_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a new note to the discussion..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @param params.note_id {integer} - The ID of a discussion note
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @returns {*}
     */

    addNoteToExistingEpicDiscussion(id, epic_id, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/discussions/${encodeURIComponent(discussion_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify existing discussion note of an epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @param params.body {string} - The content of a discussion
     * @returns {*}
     */

    modifyExistingEpicDiscussionNote(id, epic_id, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing discussion note of an epic..

     * @param id {integer/string} - The ID or URL-encoded path of the group

     * @param epic_id {integer} - The ID of an epic
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @returns {*}
     */

    deleteAnEpicDiscussionNote(id, epic_id, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/groups/${encodeURIComponent(id)}/epics/${encodeURIComponent(epic_id)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param params {object}
     * @returns {*}
     */

    mergeRequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param params {object}
     * @returns {*}
     */

    listProjectMergeRequestDiscussions(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single discussion for a specific project merge request.

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @returns {*}
     */

    getSingleMergeRequestDiscussion(id, merge_request_iid, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/discussions/${encodeURIComponent(discussion_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new discussion to a single project merge request. This is similar to creating
a note but but another comments (replies) can be added to it later..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param params {object}
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @param params.position {hash} - Position when creating a diff note
     * @param params.position[base_sha] {string} - Base commit SHA in the source branch
     * @param params.position[start_sha] {string} - SHA referencing commit in target branch
     * @param params.position[head_sha] {string} - SHA referencing HEAD of this merge request
     * @param params.position[position_type] {string} - Type of the position reference’, allowed values: ‘text’ or ‘image’
     * @param params.position[new_path] {string} - File path after change
     * @param params.position[new_line] {integer} - Line number after change (for ‘text’ diff notes)
     * @param params.position[old_path] {string} - File path before change
     * @param params.position[old_line] {integer} - Line number before change (for ‘text’ diff notes)
     * @param params.position[width] {integer} - Width of the image (for ‘image’ diff notes)
     * @param params.position[height] {integer} - Height of the image (for ‘image’ diff notes)
     * @param params.position[x] {integer} - X coordinate (for ‘image’ diff notes)
     * @param params.position[y] {integer} - Y coordinate (for ‘image’ diff notes)
     * @returns {*}
     */

    createNewMergeRequestDiscussion(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Resolve/unresolve whole discussion of a merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @param params.resolved {boolean} - Resolve/unresolve the discussion
     * @returns {*}
     */

    resolveAMergeRequestDiscussion(id, merge_request_iid, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/discussions/${encodeURIComponent(discussion_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a new note to the discussion..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @param params.note_id {integer} - The ID of a discussion note
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @returns {*}
     */

    addNoteToExistingMergeRequestDiscussion(id, merge_request_iid, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/discussions/${encodeURIComponent(discussion_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify or resolve an existing discussion note of a merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @param params.body {string} - The content of a discussion (exactly one of body or resolved must be set
     * @param params.resolved {boolean} - Resolve/unresolve the note (exactly one of body or resolved must be set
     * @returns {*}
     */

    modifyAnExistingMergeRequestDiscussionNote(id, merge_request_iid, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing discussion note of a merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param merge_request_iid {integer} - The IID of a merge request
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @returns {*}
     */

    deleteAMergeRequestDiscussionNote(id, merge_request_iid, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single commit..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param commit_id {integer} - The ID of a commit
     * @param params {object}
     * @returns {*}
     */

    commits(id, commit_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/commits/${encodeURIComponent(commit_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all discussions for a single commit..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param commit_id {integer} - The ID of a commit
     * @param params {object}
     * @returns {*}
     */

    listProjectCommitDiscussions(id, commit_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/commits/${encodeURIComponent(commit_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Returns a single discussion for a specific project commit.

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param commit_id {integer} - The ID of a commit
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @returns {*}
     */

    getSingleCommitDiscussion(id, commit_id, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/commits/${encodeURIComponent(commit_id)}/discussions/${encodeURIComponent(discussion_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Creates a new discussion to a single project commit. This is similar to creating
a note but but another comments (replies) can be added to it later..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param commit_id {integer} - The ID of a commit
     * @param params {object}
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @param params.position {hash} - Position when creating a diff note
     * @param params.position[base_sha] {string} - Base commit SHA in the source branch
     * @param params.position[start_sha] {string} - SHA referencing commit in target branch
     * @param params.position[head_sha] {string} - SHA referencing HEAD of this commit
     * @param params.position[position_type] {string} - Type of the position reference’, allowed values: ‘text’ or ‘image’
     * @param params.position[new_path] {string} - File path after change
     * @param params.position[new_line] {integer} - Line number after change
     * @param params.position[old_path] {string} - File path before change
     * @param params.position[old_line] {integer} - Line number before change
     * @param params.position[width] {integer} - Width of the image (for ‘image’ diff notes)
     * @param params.position[height] {integer} - Height of the image (for ‘image’ diff notes)
     * @param params.position[x] {integer} - X coordinate (for ‘image’ diff notes)
     * @param params.position[y] {integer} - Y coordinate (for ‘image’ diff notes)
     * @returns {*}
     */

    createNewCommitDiscussion(id, commit_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/commits/${encodeURIComponent(commit_id)}/discussions`, params); // eslint-disable-line quotes
    }

    /**
     * Adds a new note to the discussion..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param commit_id {integer} - The ID of a commit
     * @param discussion_id {integer} - The ID of a discussion
     * @param params {object}
     * @param params.note_id {integer} - The ID of a discussion note
     * @param params.body {string} - The content of a discussion
     * @param params.created_at {string} - Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project/group owner rights)
     * @returns {*}
     */

    addNoteToExistingCommitDiscussion(id, commit_id, discussion_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/commits/${encodeURIComponent(commit_id)}/discussions/${encodeURIComponent(discussion_id)}/notes`, params); // eslint-disable-line quotes
    }

    /**
     * Modify or resolve an existing discussion note of a commit..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param commit_id {integer} - The ID of a commit
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @param params.body {string} - The content of a note
     * @returns {*}
     */

    modifyAnExistingCommitDiscussionNote(id, commit_id, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/commits/${encodeURIComponent(commit_id)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Deletes an existing discussion note of a commit..

     * @param id {integer/string} - The ID or URL-encoded path of the project

     * @param commit_id {integer} - The ID of a commit
     * @param discussion_id {integer} - The ID of a discussion
     * @param note_id {integer} - The ID of a discussion note
     * @param params {object}
     * @returns {*}
     */

    deleteACommitDiscussionNote(id, commit_id, discussion_id, note_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/commits/${encodeURIComponent(commit_id)}/discussions/${encodeURIComponent(discussion_id)}/notes/${encodeURIComponent(note_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = Discussions;

