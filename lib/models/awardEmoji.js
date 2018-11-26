
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Award Emoji .
 */
class AwardEmoji extends ModelBase {

     /**
     * Create Award Emoji .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * An awarded emoji tells a thousand words, and can be awarded on issues, merge
requests, snippets, and notes/comments. Issues, merge requests, snippets, and notes are further called
awardables..

     * @param params {object}
     * @returns {*}
     */

    awardEmojiApiMergerequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * An awarded emoji tells a thousand words, and can be awarded on issues, merge
requests, snippets, and notes/comments. Issues, merge requests, snippets, and notes are further called
awardables..

     * @param params {object}
     * @returns {*}
     */

    awardEmojiApiSnippets(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * An awarded emoji tells a thousand words, and can be awarded on issues, merge
requests, snippets, and notes/comments. Issues, merge requests, snippets, and notes are further called
awardables..

     * @param params {object}
     * @returns {*}
     */

    awardEmojiApiIssues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    issuesMergeRequestsAndSnippetsMergerequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    issuesMergeRequestsAndSnippetsSnippets(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    issuesMergeRequestsAndSnippetsIssues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    listAnAwardablesAwardEmojiMergerequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    listAnAwardablesAwardEmojiSnippets(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    listAnAwardablesAwardEmojiIssues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single award emoji from an issue, snippet, or merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param award_id {integer} - The ID of the award emoji
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    getSingleAwardEmojiMergerequests(id, merge_request_iid, award_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single award emoji from an issue, snippet, or merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param award_id {integer} - The ID of the award emoji
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    getSingleAwardEmojiSnippets(id, snippet_id, award_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single award emoji from an issue, snippet, or merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param award_id {integer} - The ID of the award emoji
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @returns {*}
     */

    getSingleAwardEmojiIssues(id, issue_iid, award_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * This end point creates an award emoji on the specified resource.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params.name {string} - The name of the emoji, without colons
     * @returns {*}
     */

    awardANewEmojiMergerequests(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * This end point creates an award emoji on the specified resource.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params.name {string} - The name of the emoji, without colons
     * @returns {*}
     */

    awardANewEmojiSnippets(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * This end point creates an award emoji on the specified resource.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.awardable_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params.name {string} - The name of the emoji, without colons
     * @returns {*}
     */

    awardANewEmojiIssues(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Sometimes its just not meant to be, and you’ll have to remove your award. Only available to
admins or the author of the award..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param award_id {integer} - The ID of an award_emoji
     * @param params {object}
     * @param params.issue_iid {integer} - The internal ID of an issue
     * @returns {*}
     */

    deleteAnAwardEmojiMergerequests(id, merge_request_iid, award_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Sometimes its just not meant to be, and you’ll have to remove your award. Only available to
admins or the author of the award..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param award_id {integer} - The ID of an award_emoji
     * @param params {object}
     * @param params.issue_iid {integer} - The internal ID of an issue
     * @returns {*}
     */

    deleteAnAwardEmojiSnippets(id, snippet_id, award_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Sometimes its just not meant to be, and you’ll have to remove your award. Only available to
admins or the author of the award..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param award_id {integer} - The ID of an award_emoji
     * @param params {object}
     * @returns {*}
     */

    deleteAnAwardEmojiIssues(id, issue_iid, award_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * The endpoints documented above are available for Notes as well. Notes
are a sub-resource of Issues, Merge Requests, or Snippets. The examples below
describe working with Award Emoji on notes for an Issue, but can be
easily adapted for notes on a Merge Request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @returns {*}
     */

    awardEmojiOnNotes(id, issue_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * The endpoints documented above are available for Notes as well. Notes are a sub-resource of Issues, Merge Requests, or Snippets. The examples below describe working with Award Emoji on notes for an Issue, but can be easily adapted for notes on a Merge Request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @returns {*}
     */

    listANotesAwardEmoji(id, issue_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Get single note’s award emoji:.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of a note
     * @param award_id {integer} - The ID of the award emoji
     * @param params {object}
     * @returns {*}
     */

    getSingleNotesAwardEmoji(id, issue_iid, note_id, award_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Award a new emoji on a note.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of a note
     * @param params {object}
     * @param params.name {string} - The name of the emoji, without colons
     * @returns {*}
     */

    awardANewEmojiOnANote(id, issue_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Sometimes its just not meant to be, and you’ll have to remove your award. Only available to
admins or the author of the award..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of a note
     * @param award_id {integer} - The ID of an award_emoji
     * @param params {object}
     * @returns {*}
     */

    deleteAnAwardEmojiFromNote(id, issue_iid, note_id, award_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = AwardEmoji;

