
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Services .
 */
class Services extends ModelBase {

     /**
     * Create Services .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Asana - Teamwork without email.

     * @param params {object}
     * @returns {*}
     */

    servicesApi(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/asana`, params); // eslint-disable-line quotes
    }

    /**
     * Asana - Teamwork without email.

     * @param params {object}
     * @param params.api_key {string} - User API token. User must have access to task, all comments will be attributed to this user.
     * @param params.restrict_to_branch {string} - Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches.
     * @returns {*}
     */

    asana(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/asana`, params); // eslint-disable-line quotes
    }

    /**
     * Set Asana service for a project..

     * @param params {object}
     * @param params.api_key {string} - User API token. User must have access to task, all comments will be attributed to this user.
     * @param params.restrict_to_branch {string} - Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches.
     * @returns {*}
     */

    createeditAsanaService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/asana`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Asana service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteAsanaService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/asana`, params); // eslint-disable-line quotes
    }

    /**
     * Get Asana service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getAsanaServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/asana`, params); // eslint-disable-line quotes
    }

    /**
     * Project Management Software (Source Commits Endpoint).

     * @param params {object}
     * @param params.token {string} - The authentication token
     * @param params.subdomain {string} - The subdomain setting
     * @returns {*}
     */

    assembla(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/assembla`, params); // eslint-disable-line quotes
    }

    /**
     * Set Assembla service for a project..

     * @param params {object}
     * @param params.token {string} - The authentication token
     * @param params.subdomain {string} - The subdomain setting
     * @returns {*}
     */

    createeditAssemblaService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/assembla`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Assembla service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteAssemblaService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/assembla`, params); // eslint-disable-line quotes
    }

    /**
     * Get Assembla service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getAssemblaServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/assembla`, params); // eslint-disable-line quotes
    }

    /**
     * A continuous integration and build server.

     * @param params {object}
     * @param params.bamboo_url {string} - Bamboo root URL. For example, https://bamboo.example.com.
     * @param params.build_key {string} - Bamboo build plan key like KEY
     * @param params.username {string} - A user with API access, if applicable
     * @param params.password {string} - Password of the user
     * @returns {*}
     */

    atlassianBambooCi(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/bamboo`, params); // eslint-disable-line quotes
    }

    /**
     * Set Atlassian Bamboo CI service for a project..

     * @param params {object}
     * @param params.bamboo_url {string} - Bamboo root URL. For example, https://bamboo.example.com.
     * @param params.build_key {string} - Bamboo build plan key like KEY
     * @param params.username {string} - A user with API access, if applicable
     * @param params.password {string} - Password of the user
     * @returns {*}
     */

    createeditAtlassianBambooCiService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/bamboo`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Atlassian Bamboo CI service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteAtlassianBambooCiService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/bamboo`, params); // eslint-disable-line quotes
    }

    /**
     * Get Atlassian Bamboo CI service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getAtlassianBambooCiServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/bamboo`, params); // eslint-disable-line quotes
    }

    /**
     * Bugzilla Issue Tracker.

     * @param params {object}
     * @param params.new_issue_url {string} - New Issue url
     * @param params.issues_url {string} - Issue url
     * @param params.project_url {string} - Project url
     * @param params.description {string} - Description
     * @param params.title {string} - Title
     * @returns {*}
     */

    bugzilla(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/bugzilla`, params); // eslint-disable-line quotes
    }

    /**
     * Set Bugzilla service for a project..

     * @param params {object}
     * @param params.new_issue_url {string} - New Issue url
     * @param params.issues_url {string} - Issue url
     * @param params.project_url {string} - Project url
     * @param params.description {string} - Description
     * @param params.title {string} - Title
     * @returns {*}
     */

    createeditBugzillaService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/bugzilla`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Bugzilla service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteBugzillaService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/bugzilla`, params); // eslint-disable-line quotes
    }

    /**
     * Get Bugzilla service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getBugzillaServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/bugzilla`, params); // eslint-disable-line quotes
    }

    /**
     * Continuous integration and deployments.

     * @param params {object}
     * @param params.token {string} - Buildkite project GitLab token
     * @param params.project_url {string} - https://buildkite.com/example/project
     * @param params.enable_ssl_verification {boolean} - Enable SSL verification
     * @returns {*}
     */

    buildkite(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/buildkite`, params); // eslint-disable-line quotes
    }

    /**
     * Set Buildkite service for a project..

     * @param params {object}
     * @param params.token {string} - Buildkite project GitLab token
     * @param params.project_url {string} - https://buildkite.com/example/project
     * @param params.enable_ssl_verification {boolean} - Enable SSL verification
     * @returns {*}
     */

    createeditBuildkiteService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/buildkite`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Buildkite service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteBuildkiteService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/buildkite`, params); // eslint-disable-line quotes
    }

    /**
     * Get Buildkite service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getBuildkiteServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/buildkite`, params); // eslint-disable-line quotes
    }

    /**
     * Simple web-based real-time group chat.

     * @param params {object}
     * @param params.token {string} - Campfire token
     * @param params.subdomain {string} - Campfire subdomain
     * @param params.room {string} - Campfire room
     * @returns {*}
     */

    campfire(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/campfire`, params); // eslint-disable-line quotes
    }

    /**
     * Set Campfire service for a project..

     * @param params {object}
     * @param params.token {string} - Campfire token
     * @param params.subdomain {string} - Campfire subdomain
     * @param params.room {string} - Campfire room
     * @returns {*}
     */

    createeditCampfireService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/campfire`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Campfire service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteCampfireService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/campfire`, params); // eslint-disable-line quotes
    }

    /**
     * Get Campfire service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getCampfireServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/campfire`, params); // eslint-disable-line quotes
    }

    /**
     * Custom issue tracker.

     * @param params {object}
     * @param params.new_issue_url {string} - New Issue url
     * @param params.issues_url {string} - Issue url
     * @param params.project_url {string} - Project url
     * @param params.description {string} - Description
     * @param params.title {string} - Title
     * @returns {*}
     */

    customIssueTracker(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/custom-issue-tracker`, params); // eslint-disable-line quotes
    }

    /**
     * Set Custom Issue Tracker service for a project..

     * @param params {object}
     * @param params.new_issue_url {string} - New Issue url
     * @param params.issues_url {string} - Issue url
     * @param params.project_url {string} - Project url
     * @param params.description {string} - Description
     * @param params.title {string} - Title
     * @returns {*}
     */

    createeditCustomIssueTrackerService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/custom-issue-tracker`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Custom Issue Tracker service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteCustomIssueTrackerService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/custom-issue-tracker`, params); // eslint-disable-line quotes
    }

    /**
     * Get Custom Issue Tracker service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getCustomIssueTrackerServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/custom-issue-tracker`, params); // eslint-disable-line quotes
    }

    /**
     * Drone is a Continuous Integration platform built on Docker, written in Go.

     * @param params {object}
     * @param params.token {string} - Drone CI project specific token
     * @param params.drone_url {string} - http://drone.example.com
     * @param params.enable_ssl_verification {boolean} - Enable SSL verification
     * @returns {*}
     */

    droneCi(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/drone-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Set Drone CI service for a project..

     * @param params {object}
     * @param params.token {string} - Drone CI project specific token
     * @param params.drone_url {string} - http://drone.example.com
     * @param params.enable_ssl_verification {boolean} - Enable SSL verification
     * @returns {*}
     */

    createeditDroneCiService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/drone-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Drone CI service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteDroneCiService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/drone-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Get Drone CI service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getDroneCiServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/drone-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Email the commits and diff of each push to a list of recipients..

     * @param params {object}
     * @param params.recipients {string} - Emails separated by whitespace
     * @param params.disable_diffs {boolean} - Disable code diffs
     * @param params.send_from_committer_email {boolean} - Send from committer
     * @returns {*}
     */

    emailsOnPush(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/emails-on-push`, params); // eslint-disable-line quotes
    }

    /**
     * Set Emails on push service for a project..

     * @param params {object}
     * @param params.recipients {string} - Emails separated by whitespace
     * @param params.disable_diffs {boolean} - Disable code diffs
     * @param params.send_from_committer_email {boolean} - Send from committer
     * @returns {*}
     */

    createeditEmailsOnPushService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/emails-on-push`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Emails on push service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteEmailsOnPushService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/emails-on-push`, params); // eslint-disable-line quotes
    }

    /**
     * Get Emails on push service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getEmailsOnPushServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/emails-on-push`, params); // eslint-disable-line quotes
    }

    /**
     * Replaces the link to the internal wiki with a link to an external wiki..

     * @param params {object}
     * @param params.external_wiki_url {string} - The URL of the external Wiki
     * @returns {*}
     */

    externalWiki(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/external-wiki`, params); // eslint-disable-line quotes
    }

    /**
     * Set External Wiki service for a project..

     * @param params {object}
     * @param params.external_wiki_url {string} - The URL of the external Wiki
     * @returns {*}
     */

    createeditExternalWikiService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/external-wiki`, params); // eslint-disable-line quotes
    }

    /**
     * Delete External Wiki service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteExternalWikiService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/external-wiki`, params); // eslint-disable-line quotes
    }

    /**
     * Get External Wiki service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getExternalWikiServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/external-wiki`, params); // eslint-disable-line quotes
    }

    /**
     * Flowdock is a collaboration web app for technical teams..

     * @param params {object}
     * @param params.token {string} - Flowdock Git source token
     * @returns {*}
     */

    flowdock(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/flowdock`, params); // eslint-disable-line quotes
    }

    /**
     * Set Flowdock service for a project..

     * @param params {object}
     * @param params.token {string} - Flowdock Git source token
     * @returns {*}
     */

    createeditFlowdockService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/flowdock`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Flowdock service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteFlowdockService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/flowdock`, params); // eslint-disable-line quotes
    }

    /**
     * Get Flowdock service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getFlowdockServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/flowdock`, params); // eslint-disable-line quotes
    }

    /**
     * Google GSuite team collaboration tool..

     * @param params {object}
     * @returns {*}
     */

    hangoutsChat(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/hangouts_chat`, params); // eslint-disable-line quotes
    }

    /**
     * Set Hangouts Chat service for a project..

     * @param params {object}
     * @param params.webhook {string} - The Hangouts Chat webhook. For example, https://chat.googleapis.com/v1/spaces....
     * @param params.notify_only_broken_pipelines {boolean} - Send notifications for broken pipelines
     * @param params.notify_only_default_branch {boolean} - Send notifications only for the default branch
     * @param params.push_events {boolean} - Enable notifications for push events
     * @param params.issues_events {boolean} - Enable notifications for issue events
     * @param params.confidential_issues_events {boolean} - Enable notifications for confidential issue events
     * @param params.merge_requests_events {boolean} - Enable notifications for merge request events
     * @param params.tag_push_events {boolean} - Enable notifications for tag push events
     * @param params.note_events {boolean} - Enable notifications for note events
     * @param params.pipeline_events {boolean} - Enable notifications for pipeline events
     * @param params.wiki_page_events {boolean} - Enable notifications for wiki page events
     * @returns {*}
     */

    createeditHangoutsChatService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/hangouts_chat`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Hangouts Chat service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteHangoutsChatService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/hangouts_chat`, params); // eslint-disable-line quotes
    }

    /**
     * Get Hangouts Chat service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getHangoutsChatServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/hangouts_chat`, params); // eslint-disable-line quotes
    }

    /**
     * Private group chat and IM.

     * @param params {object}
     * @param params.token {string} - Room token
     * @param params.color {string} - The room color
     * @param params.notify {boolean} - Enable notifications
     * @param params.room {string} - Room name or ID
     * @param params.api_version {string} - Leave blank for default (v2)
     * @param params.server {string} - Leave blank for default. For example, https://hipchat.example.com.
     * @returns {*}
     */

    hipchat(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/hipchat`, params); // eslint-disable-line quotes
    }

    /**
     * Set HipChat service for a project..

     * @param params {object}
     * @param params.token {string} - Room token
     * @param params.color {string} - The room color
     * @param params.notify {boolean} - Enable notifications
     * @param params.room {string} - Room name or ID
     * @param params.api_version {string} - Leave blank for default (v2)
     * @param params.server {string} - Leave blank for default. For example, https://hipchat.example.com.
     * @returns {*}
     */

    createeditHipchatService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/hipchat`, params); // eslint-disable-line quotes
    }

    /**
     * Delete HipChat service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteHipchatService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/hipchat`, params); // eslint-disable-line quotes
    }

    /**
     * Get HipChat service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getHipchatServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/hipchat`, params); // eslint-disable-line quotes
    }

    /**
     * Send IRC messages, on update, to a list of recipients through an Irker gateway..

     * @param params {object}
     * @param params.recipients {string} - Recipients/channels separated by whitespaces
     * @param params.default_irc_uri {string} - irc://irc.network.net:6697/
     * @param params.server_host {string} - localhost
     * @param params.server_port {integer} - 6659
     * @param params.colorize_messages {boolean} - Colorize messages
     * @returns {*}
     */

    irkerIrcGateway(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/irker`, params); // eslint-disable-line quotes
    }

    /**
     * Set Irker (IRC gateway) service for a project..

     * @param params {object}
     * @param params.recipients {string} - Recipients/channels separated by whitespaces
     * @param params.default_irc_uri {string} - irc://irc.network.net:6697/
     * @param params.server_host {string} - localhost
     * @param params.server_port {integer} - 6659
     * @param params.colorize_messages {boolean} - Colorize messages
     * @returns {*}
     */

    createeditIrkerIrcGatewayService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/irker`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Irker (IRC gateway) service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteIrkerIrcGatewayService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/irker`, params); // eslint-disable-line quotes
    }

    /**
     * Get Irker (IRC gateway) service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getIrkerIrcGatewayServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/irker`, params); // eslint-disable-line quotes
    }

    /**
     * JIRA issue tracker..

     * @param params {object}
     * @returns {*}
     */

    jira(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/jira`, params); // eslint-disable-line quotes
    }

    /**
     * Get JIRA service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getJiraServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/jira`, params); // eslint-disable-line quotes
    }

    /**
     * Set JIRA service for a project..

     * @param params {object}
     * @param params.url {string} - The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.
     * @param params.project_key {string} - The short identifier for your JIRA project, all uppercase, e.g., PROJ.
     * @param params.username {string} - The username of the user created to be used with GitLab/JIRA.
     * @param params.password {string} - The password of the user created to be used with GitLab/JIRA.
     * @param params.jira_issue_transition_id {integer} - The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. The ID of each state can be found inside the parenthesis of each transition name under the Transitions (id) column ([see screenshot][trans]). By default, this ID is set to 2.
     * @returns {*}
     */

    createeditJiraService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/jira`, params); // eslint-disable-line quotes
    }

    /**
     * Remove all previously JIRA settings from a project..

     * @param params {object}
     * @returns {*}
     */

    deleteJiraService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/jira`, params); // eslint-disable-line quotes
    }

    /**
     * Set Kubernetes service for a project..

     * @param params {object}
     * @param params.namespace {} - undefined
     * @returns {*}
     */

    createeditKubernetesService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/kubernetes`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Kubernetes service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteKubernetesService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/kubernetes`, params); // eslint-disable-line quotes
    }

    /**
     * Get Kubernetes service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getKubernetesServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/kubernetes`, params); // eslint-disable-line quotes
    }

    /**
     * Ability to receive slash commands from a Slack chat instance..

     * @param params {object}
     * @returns {*}
     */

    slackSlashCommands(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/slack-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Get Slack slash command service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getSlackSlashCommandServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/slack-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Set Slack slash command for a project..

     * @param params {object}
     * @param params.token {string} - The Slack token
     * @returns {*}
     */

    createeditSlackSlashCommandService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/slack-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Slack slash command service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteSlackSlashCommandService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/slack-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Ability to receive slash commands from a Mattermost chat instance..

     * @param params {object}
     * @returns {*}
     */

    mattermostSlashCommands(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/mattermost-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Get Mattermost slash command service settings for a project..

     * @param params {object}
     * @param params.token {string} - The Mattermost token
     * @param params.username {string} - The username to use to post the message
     * @returns {*}
     */

    getMattermostSlashCommandServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/mattermost-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Set Mattermost slash command for a project..

     * @param params {object}
     * @param params.token {string} - The Mattermost token
     * @param params.username {string} - The username to use to post the message
     * @returns {*}
     */

    createeditMattermostSlashCommandService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/mattermost-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Mattermost slash command service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteMattermostSlashCommandService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/mattermost-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Update your project on Packagist, the main Composer repository, when commits or tags are pushed to GitLab..

     * @param params {object}
     * @param params.username {} - undefined
     * @returns {*}
     */

    packagist(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/packagist`, params); // eslint-disable-line quotes
    }

    /**
     * Set Packagist service for a project..

     * @param params {object}
     * @param params.username {} - undefined
     * @returns {*}
     */

    createeditPackagistService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/packagist`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Packagist service for a project..

     * @param params {object}
     * @returns {*}
     */

    deletePackagistService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/packagist`, params); // eslint-disable-line quotes
    }

    /**
     * Get Packagist service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getPackagistServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/packagist`, params); // eslint-disable-line quotes
    }

    /**
     * Get emails for GitLab CI pipelines..

     * @param params {object}
     * @param params.recipients {string} - Comma-separated list of recipient email addresses
     * @param params.add_pusher {boolean} - Add pusher to recipients list
     * @param params.notify_only_broken_pipelines {boolean} - Notify only broken pipelines
     * @returns {*}
     */

    pipelineEmails(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/pipelines-email`, params); // eslint-disable-line quotes
    }

    /**
     * Set Pipeline-Emails service for a project..

     * @param params {object}
     * @param params.recipients {string} - Comma-separated list of recipient email addresses
     * @param params.add_pusher {boolean} - Add pusher to recipients list
     * @param params.notify_only_broken_pipelines {boolean} - Notify only broken pipelines
     * @returns {*}
     */

    createeditPipelineEmailsService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/pipelines-email`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Pipeline-Emails service for a project..

     * @param params {object}
     * @returns {*}
     */

    deletePipelineEmailsService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/pipelines-email`, params); // eslint-disable-line quotes
    }

    /**
     * Get Pipeline-Emails service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getPipelineEmailsServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/pipelines-email`, params); // eslint-disable-line quotes
    }

    /**
     * Project Management Software (Source Commits Endpoint).

     * @param params {object}
     * @param params.token {string} - The PivotalTracker token
     * @param params.restrict_to_branch {boolean} - Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches.
     * @returns {*}
     */

    pivotaltracker(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/pivotaltracker`, params); // eslint-disable-line quotes
    }

    /**
     * Set PivotalTracker service for a project..

     * @param params {object}
     * @param params.token {string} - The PivotalTracker token
     * @param params.restrict_to_branch {boolean} - Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches.
     * @returns {*}
     */

    createeditPivotaltrackerService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/pivotaltracker`, params); // eslint-disable-line quotes
    }

    /**
     * Delete PivotalTracker service for a project..

     * @param params {object}
     * @returns {*}
     */

    deletePivotaltrackerService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/pivotaltracker`, params); // eslint-disable-line quotes
    }

    /**
     * Get PivotalTracker service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getPivotaltrackerServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/pivotaltracker`, params); // eslint-disable-line quotes
    }

    /**
     * Prometheus is a powerful time-series monitoring service..

     * @param params {object}
     * @param params.api_url {string} - Prometheus API Base URL. For example, http://prometheus.example.com/.
     * @returns {*}
     */

    prometheus(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/prometheus`, params); // eslint-disable-line quotes
    }

    /**
     * Set Prometheus service for a project..

     * @param params {object}
     * @param params.api_url {string} - Prometheus API Base URL. For example, http://prometheus.example.com/.
     * @returns {*}
     */

    createeditPrometheusService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/prometheus`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Prometheus service for a project..

     * @param params {object}
     * @returns {*}
     */

    deletePrometheusService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/prometheus`, params); // eslint-disable-line quotes
    }

    /**
     * Get Prometheus service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getPrometheusServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/prometheus`, params); // eslint-disable-line quotes
    }

    /**
     * Pushover makes it easy to get real-time notifications on your Android device, iPhone, iPad, and Desktop..

     * @param params {object}
     * @param params.api_key {string} - Your application key
     * @param params.user_key {string} - Your user key
     * @param params.priority {string} - The priority
     * @param params.device {string} - Leave blank for all active devices
     * @param params.sound {string} - The sound of the notification
     * @returns {*}
     */

    pushover(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/pushover`, params); // eslint-disable-line quotes
    }

    /**
     * Set Pushover service for a project..

     * @param params {object}
     * @param params.api_key {string} - Your application key
     * @param params.user_key {string} - Your user key
     * @param params.priority {string} - The priority
     * @param params.device {string} - Leave blank for all active devices
     * @param params.sound {string} - The sound of the notification
     * @returns {*}
     */

    createeditPushoverService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/pushover`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Pushover service for a project..

     * @param params {object}
     * @returns {*}
     */

    deletePushoverService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/pushover`, params); // eslint-disable-line quotes
    }

    /**
     * Get Pushover service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getPushoverServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/pushover`, params); // eslint-disable-line quotes
    }

    /**
     * Redmine issue tracker.

     * @param params {object}
     * @param params.new_issue_url {string} - New Issue url
     * @param params.project_url {string} - Project url
     * @param params.issues_url {string} - Issue url
     * @param params.description {string} - Description
     * @returns {*}
     */

    redmine(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/redmine`, params); // eslint-disable-line quotes
    }

    /**
     * Set Redmine service for a project..

     * @param params {object}
     * @param params.new_issue_url {string} - New Issue url
     * @param params.project_url {string} - Project url
     * @param params.issues_url {string} - Issue url
     * @param params.description {string} - Description
     * @returns {*}
     */

    createeditRedmineService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/redmine`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Redmine service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteRedmineService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/redmine`, params); // eslint-disable-line quotes
    }

    /**
     * Get Redmine service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getRedmineServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/redmine`, params); // eslint-disable-line quotes
    }

    /**
     * Receive event notifications in Slack.

     * @param params {object}
     * @param params.webhook {string} - https://hooks.slack.com/services/...
     * @param params.username {string} - username
     * @param params.channel {string} - Default channel to use if others are not configured
     * @param params.notify_only_broken_pipelines {boolean} - Send notifications for broken pipelines
     * @param params.notify_only_default_branch {boolean} - Send notifications only for the default branch
     * @param params.push_events {boolean} - Enable notifications for push events
     * @param params.issues_events {boolean} - Enable notifications for issue events
     * @param params.confidential_issues_events {boolean} - Enable notifications for confidential issue events
     * @param params.merge_requests_events {boolean} - Enable notifications for merge request events
     * @param params.tag_push_events {boolean} - Enable notifications for tag push events
     * @param params.note_events {boolean} - Enable notifications for note events
     * @param params.pipeline_events {boolean} - Enable notifications for pipeline events
     * @param params.wiki_page_events {boolean} - Enable notifications for wiki page events
     * @param params.push_channel {string} - The name of the channel to receive push events notifications
     * @param params.issue_channel {string} - The name of the channel to receive issues events notifications
     * @param params.confidential_issue_channel {string} - The name of the channel to receive confidential issues events notifications
     * @param params.merge_request_channel {string} - The name of the channel to receive merge request events notifications
     * @param params.note_channel {string} - The name of the channel to receive note events notifications
     * @param params.tag_push_channel {string} - The name of the channel to receive tag push events notifications
     * @param params.pipeline_channel {string} - The name of the channel to receive pipeline events notifications
     * @param params.wiki_page_channel {string} - The name of the channel to receive wiki page events notifications
     * @returns {*}
     */

    slackNotifications(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/slack`, params); // eslint-disable-line quotes
    }

    /**
     * Set Slack service for a project..

     * @param params {object}
     * @param params.webhook {string} - https://hooks.slack.com/services/...
     * @param params.username {string} - username
     * @param params.channel {string} - Default channel to use if others are not configured
     * @param params.notify_only_broken_pipelines {boolean} - Send notifications for broken pipelines
     * @param params.notify_only_default_branch {boolean} - Send notifications only for the default branch
     * @param params.push_events {boolean} - Enable notifications for push events
     * @param params.issues_events {boolean} - Enable notifications for issue events
     * @param params.confidential_issues_events {boolean} - Enable notifications for confidential issue events
     * @param params.merge_requests_events {boolean} - Enable notifications for merge request events
     * @param params.tag_push_events {boolean} - Enable notifications for tag push events
     * @param params.note_events {boolean} - Enable notifications for note events
     * @param params.pipeline_events {boolean} - Enable notifications for pipeline events
     * @param params.wiki_page_events {boolean} - Enable notifications for wiki page events
     * @param params.push_channel {string} - The name of the channel to receive push events notifications
     * @param params.issue_channel {string} - The name of the channel to receive issues events notifications
     * @param params.confidential_issue_channel {string} - The name of the channel to receive confidential issues events notifications
     * @param params.merge_request_channel {string} - The name of the channel to receive merge request events notifications
     * @param params.note_channel {string} - The name of the channel to receive note events notifications
     * @param params.tag_push_channel {string} - The name of the channel to receive tag push events notifications
     * @param params.pipeline_channel {string} - The name of the channel to receive pipeline events notifications
     * @param params.wiki_page_channel {string} - The name of the channel to receive wiki page events notifications
     * @returns {*}
     */

    createeditSlackService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/slack`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Slack service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteSlackService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/slack`, params); // eslint-disable-line quotes
    }

    /**
     * Get Slack service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getSlackServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/slack`, params); // eslint-disable-line quotes
    }

    /**
     * Group Chat Software.

     * @param params {object}
     * @param params.webhook {string} - The Microsoft Teams webhook. For example, https://outlook.office.com/webhook/...

     * @returns {*}
     */

    microsoftTeams(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/microsoft-teams`, params); // eslint-disable-line quotes
    }

    /**
     * Set Microsoft Teams service for a project..

     * @param params {object}
     * @param params.webhook {string} - The Microsoft Teams webhook. For example, https://outlook.office.com/webhook/...

     * @returns {*}
     */

    createeditMicrosoftTeamsService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/microsoft-teams`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Microsoft Teams service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteMicrosoftTeamsService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/microsoft-teams`, params); // eslint-disable-line quotes
    }

    /**
     * Get Microsoft Teams service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getMicrosoftTeamsServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/microsoft-teams`, params); // eslint-disable-line quotes
    }

    /**
     * Receive event notifications in Mattermost.

     * @param params {object}
     * @param params.webhook {string} - The Mattermost webhook. For example, http://mattermost_host/hooks/...

     * @param params.username {string} - username
     * @param params.channel {string} - Default channel to use if others are not configured
     * @param params.notify_only_broken_pipelines {boolean} - Send notifications for broken pipelines
     * @param params.notify_only_default_branch {boolean} - Send notifications only for the default branch
     * @param params.push_events {boolean} - Enable notifications for push events
     * @param params.issues_events {boolean} - Enable notifications for issue events
     * @param params.confidential_issues_events {boolean} - Enable notifications for confidential issue events
     * @param params.merge_requests_events {boolean} - Enable notifications for merge request events
     * @param params.tag_push_events {boolean} - Enable notifications for tag push events
     * @param params.note_events {boolean} - Enable notifications for note events
     * @param params.pipeline_events {boolean} - Enable notifications for pipeline events
     * @param params.wiki_page_events {boolean} - Enable notifications for wiki page events
     * @param params.push_channel {string} - The name of the channel to receive push events notifications
     * @param params.issue_channel {string} - The name of the channel to receive issues events notifications
     * @param params.confidential_issue_channel {string} - The name of the channel to receive confidential issues events notifications
     * @param params.merge_request_channel {string} - The name of the channel to receive merge request events notifications
     * @param params.note_channel {string} - The name of the channel to receive note events notifications
     * @param params.tag_push_channel {string} - The name of the channel to receive tag push events notifications
     * @param params.pipeline_channel {string} - The name of the channel to receive pipeline events notifications
     * @param params.wiki_page_channel {string} - The name of the channel to receive wiki page events notifications
     * @returns {*}
     */

    mattermostNotifications(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/mattermost`, params); // eslint-disable-line quotes
    }

    /**
     * Set Mattermost service for a project..

     * @param params {object}
     * @param params.webhook {string} - The Mattermost webhook. For example, http://mattermost_host/hooks/...

     * @param params.username {string} - username
     * @param params.channel {string} - Default channel to use if others are not configured
     * @param params.notify_only_broken_pipelines {boolean} - Send notifications for broken pipelines
     * @param params.notify_only_default_branch {boolean} - Send notifications only for the default branch
     * @param params.push_events {boolean} - Enable notifications for push events
     * @param params.issues_events {boolean} - Enable notifications for issue events
     * @param params.confidential_issues_events {boolean} - Enable notifications for confidential issue events
     * @param params.merge_requests_events {boolean} - Enable notifications for merge request events
     * @param params.tag_push_events {boolean} - Enable notifications for tag push events
     * @param params.note_events {boolean} - Enable notifications for note events
     * @param params.pipeline_events {boolean} - Enable notifications for pipeline events
     * @param params.wiki_page_events {boolean} - Enable notifications for wiki page events
     * @param params.push_channel {string} - The name of the channel to receive push events notifications
     * @param params.issue_channel {string} - The name of the channel to receive issues events notifications
     * @param params.confidential_issue_channel {string} - The name of the channel to receive confidential issues events notifications
     * @param params.merge_request_channel {string} - The name of the channel to receive merge request events notifications
     * @param params.note_channel {string} - The name of the channel to receive note events notifications
     * @param params.tag_push_channel {string} - The name of the channel to receive tag push events notifications
     * @param params.pipeline_channel {string} - The name of the channel to receive pipeline events notifications
     * @param params.wiki_page_channel {string} - The name of the channel to receive wiki page events notifications
     * @returns {*}
     */

    createeditMattermostNotificationsService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/mattermost`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Mattermost Notifications service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteMattermostNotificationsService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/mattermost`, params); // eslint-disable-line quotes
    }

    /**
     * Get Mattermost notifications service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getMattermostNotificationsServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/mattermost`, params); // eslint-disable-line quotes
    }

    /**
     * A continuous integration and build server.

     * @param params {object}
     * @param params.teamcity_url {string} - TeamCity root URL. For example, https://teamcity.example.com

     * @param params.build_type {string} - Build configuration ID
     * @param params.username {string} - A user with permissions to trigger a manual build
     * @param params.password {string} - The password of the user
     * @returns {*}
     */

    jetbrainsTeamcityCi(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/teamcity`, params); // eslint-disable-line quotes
    }

    /**
     * Set JetBrains TeamCity CI service for a project..

     * @param params {object}
     * @param params.teamcity_url {string} - TeamCity root URL. For example, https://teamcity.example.com

     * @param params.build_type {string} - Build configuration ID
     * @param params.username {string} - A user with permissions to trigger a manual build
     * @param params.password {string} - The password of the user
     * @returns {*}
     */

    createeditJetbrainsTeamcityCiService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/teamcity`, params); // eslint-disable-line quotes
    }

    /**
     * Delete JetBrains TeamCity CI service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteJetbrainsTeamcityCiService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/teamcity`, params); // eslint-disable-line quotes
    }

    /**
     * Get JetBrains TeamCity CI service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getJetbrainsTeamcityCiServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/teamcity`, params); // eslint-disable-line quotes
    }

    /**
     * A continuous integration and build server.

     * @param params {object}
     * @param params.jenkins_url {} - undefined
     * @returns {*}
     */

    jenkinsCi(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/jenkins`, params); // eslint-disable-line quotes
    }

    /**
     * Set Jenkins CI service for a project..

     * @param params {object}
     * @param params.jenkins_url {} - undefined
     * @returns {*}
     */

    createeditJenkinsCiService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/jenkins`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Jenkins CI service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteJenkinsCiService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/jenkins`, params); // eslint-disable-line quotes
    }

    /**
     * Get Jenkins CI service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getJenkinsCiServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/jenkins`, params); // eslint-disable-line quotes
    }

    /**
     * A continuous integration and build server.

     * @param params {object}
     * @param params.project_url {} - undefined
     * @returns {*}
     */

    jenkinsCiDeprecatedService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/jenkins-deprecated`, params); // eslint-disable-line quotes
    }

    /**
     * Set Jenkins CI (Deprecated) service for a project..

     * @param params {object}
     * @param params.project_url {} - undefined
     * @returns {*}
     */

    createeditJenkinsCiDeprecatedService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/jenkins-deprecated`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Jenkins CI (Deprecated) service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteJenkinsCiDeprecatedService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/jenkins-deprecated`, params); // eslint-disable-line quotes
    }

    /**
     * Get Jenkins CI (Deprecated) service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getJenkinsCiDeprecatedServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/jenkins-deprecated`, params); // eslint-disable-line quotes
    }

    /**
     * Mock an external CI. See gitlab-org/gitlab-mock-ci-service for an example of a companion mock service..

     * @param params {object}
     * @param params.mock_service_url {string} - http://localhost:4004
     * @returns {*}
     */

    mockci(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/mock-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Set MockCI service for a project..

     * @param params {object}
     * @param params.mock_service_url {string} - http://localhost:4004
     * @returns {*}
     */

    createeditMockciService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/mock-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Delete MockCI service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteMockciService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/mock-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Get MockCI service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getMockciServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/mock-ci`, params); // eslint-disable-line quotes
    }

}

module.exports = Services;

