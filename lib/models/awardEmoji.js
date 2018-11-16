
'use strict';

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
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params {object}
     * @returns {*}
     */

    listAnAwardableAwardEmojiByIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params {object}
     * @returns {*}
     */

    listAnAwardableAwardEmojiByMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of all award emoji.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param snippet_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params {object}
     * @returns {*}
     */

    listAnAwardableAwardEmojiBySnipped(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single award emoji from an issue, snippet, or merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param award_id {integer} - The ID of the award emoji
     * @param params {object}
     * @returns {*}
     */

    getSingleAwardEmojiByIssue(id, issue_iid, award_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single award emoji from an issue, snippet, or merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param award_id {integer} - The ID of the award emoji
     * @param params {object}
     * @returns {*}
     */

    getSingleAwardEmojiByMergeRequest(id, merge_request_iid, award_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single award emoji from an issue, snippet, or merge request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param snippet_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param award_id {integer} - The ID of the award emoji
     * @param params {object}
     * @returns {*}
     */

    getSingleAwardEmojiBySnipped(id, snippet_id, award_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * This end point creates an award emoji on the specified resource.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params {object}
     * @param params.name {string} - The name of the emoji, without colons
     * @returns {*}
     */

    awardANewEmojiByIssue(id, issue_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * This end point creates an award emoji on the specified resource.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params {object}
     * @param params.name {string} - The name of the emoji, without colons
     * @returns {*}
     */

    awardANewEmojiByMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * This end point creates an award emoji on the specified resource.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param snippet_id {integer} - The ID (iid for merge requests/issues, id for snippets) of an awardable
     * @param params {object}
     * @param params.name {string} - The name of the emoji, without colons
     * @returns {*}
     */

    awardANewEmojiBySnipped(id, snippet_id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Sometimes its just not meant to be, and you'll have to remove your award. Only available to
admins or the author of the award..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param award_id {integer} - The ID of a award_emoji
     * @param params {object}
     * @returns {*}
     */

    deleteAnAwardEmojiByIssue(id, issue_iid, award_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Sometimes its just not meant to be, and you'll have to remove your award. Only available to
admins or the author of the award..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param merge_request_iid {integer} - The internal ID of an issue
     * @param award_id {integer} - The ID of a award_emoji
     * @param params {object}
     * @returns {*}
     */

    deleteAnAwardEmojiByMergeRequest(id, merge_request_iid, award_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Sometimes its just not meant to be, and you'll have to remove your award. Only available to
admins or the author of the award..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param snippet_id {integer} - The internal ID of an issue
     * @param award_id {integer} - The ID of a award_emoji
     * @param params {object}
     * @returns {*}
     */

    deleteAnAwardEmojiBySnipped(id, snippet_id, award_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/snippets/${encodeURIComponent(snippet_id)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * The endpoints documented above are available for Notes as well. Notes
are a sub-resource of Issues, Merge Requests, or Snippets. The examples below
describe working with Award Emoji on notes for an Issue, but can be
easily adapted for notes on a Merge Request..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of an note
     * @param params {object}
     * @returns {*}
     */

    awardEmojiOnNotes(id, issue_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Parameters:.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of an note
     * @param params {object}
     * @returns {*}
     */

    listANoteAwardEmoji(id, issue_iid, note_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji`, params); // eslint-disable-line quotes
    }

    /**
     * Parameters:.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of a note
     * @param award_id {integer} - The ID of the award emoji
     * @param params {object}
     * @returns {*}
     */

    getSingleNoteAwardEmoji(id, issue_iid, note_id, award_id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Parameters:.

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
     * Sometimes its just not meant to be, and you'll have to remove your award. Only available to
admins or the author of the award..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param issue_iid {integer} - The internal ID of an issue
     * @param note_id {integer} - The ID of a note
     * @param award_id {integer} - The ID of a award_emoji
     * @param params {object}
     * @returns {*}
     */

    deleteAnAwardEmoji(id, issue_iid, note_id, award_id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/issues/${encodeURIComponent(issue_iid)}/notes/${encodeURIComponent(note_id)}/award_emoji/${encodeURIComponent(award_id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = AwardEmoji;

