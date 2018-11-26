
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Merge Request Approvals .
 */
class MergeRequestApprovals extends ModelBase {

     /**
     * Create Merge Request Approvals .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Configuration for approvals on all Merge Requests (MR) in the project. Must be authenticated for all endpoints..

     * @param params {object}
     * @returns {*}
     */

    mergeRequestApprovalsApiStarter(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/approvals`, params); // eslint-disable-line quotes
    }

    /**
     * You can request information about a project’s approval configuration using the
following endpoint:.

     * @param id {integer} - The ID of a project
     * @param params {object}
     * @returns {*}
     */

    projectLevelMrApprovals(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/approvals`, params); // eslint-disable-line quotes
    }

    /**
     * You can request information about a project’s approval configuration using the
following endpoint:.

     * @param id {integer} - The ID of a project
     * @param params {object}
     * @returns {*}
     */

    getConfiguration(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/approvals`, params); // eslint-disable-line quotes
    }

    /**
     * If you are allowed to, you can change approval configuration using the following
endpoint:.

     * @param id {integer} - The ID of a project
     * @param params {object}
     * @param params.approvals_before_merge {integer} - How many approvals are required before an MR can be merged
     * @param params.reset_approvals_on_push {boolean} - Reset approvals on a new push
     * @param params.disable_overriding_approvers_per_merge_request {boolean} - Allow/Disallow overriding approvers per MR
     * @returns {*}
     */

    changeConfiguration(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/approvals`, params); // eslint-disable-line quotes
    }

    /**
     * If you are allowed to, you can change approvers and approver groups using
the following endpoint:.

     * @param id {integer} - The ID of a project
     * @param params {object}
     * @param params.approver_ids {Array} - An array of User IDs that can approve MRs
     * @param params.approver_group_ids {Array} - An array of Group IDs whose members can approve MRs
     * @returns {*}
     */

    changeAllowedApprovers(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/approvers`, params); // eslint-disable-line quotes
    }

    /**
     * Configuration for approvals on a specific Merge Request. Must be authenticated for all endpoints..

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @returns {*}
     */

    mergeRequestLevelMrApprovals(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/approvals`, params); // eslint-disable-line quotes
    }

    /**
     * You can request information about a merge request’s approval status using the
following endpoint:.

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @returns {*}
     */

    getApprovalConfiguration(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/approvals`, params); // eslint-disable-line quotes
    }

    /**
     * If you are allowed to, you can change approvals_required using the following
endpoint:.

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @param params.approvals_required {integer} - Approvals required before MR can be merged
     * @returns {*}
     */

    changeApprovalConfiguration(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/approvals`, params); // eslint-disable-line quotes
    }

    /**
     * If you are allowed to, you can change approvers and approver groups using
the following endpoint:.

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @param params.approver_ids {Array} - An array of User IDs that can approve the MR
     * @param params.approver_group_ids {Array} - An array of Group IDs whose members can approve the MR
     * @returns {*}
     */

    changeAllowedApproversForMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/approvers`, params); // eslint-disable-line quotes
    }

    /**
     * If you are allowed to, you can approve a merge request using the following
endpoint:.

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @param params.sha {string} - The HEAD of the MR
     * @returns {*}
     */

    approveMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/approve`, params); // eslint-disable-line quotes
    }

    /**
     * If you did approve a merge request, you can unapprove it using the following
endpoint:.

     * @param id {integer} - The ID of a project
     * @param merge_request_iid {integer} - The IID of MR
     * @param params {object}
     * @returns {*}
     */

    unapproveMergeRequest(id, merge_request_iid, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/merge_requests/${encodeURIComponent(merge_request_iid)}/unapprove`, params); // eslint-disable-line quotes
    }

}

module.exports = MergeRequestApprovals;

