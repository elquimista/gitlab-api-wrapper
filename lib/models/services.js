
'use strict';

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
     * @param params.api_key {} - undefined
     * @returns {*}
     */

    asana(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/asana`, params); // eslint-disable-line quotes
    }

    /**
     * Set Asana service for a project..

     * @param params {object}
     * @param params.api_key {} - undefined
     * @returns {*}
     */

    createEditAsanaService(id, params) { // eslint-disable-line camelcase
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
     * @param params.token {} - undefined
     * @returns {*}
     */

    assembla(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/assembla`, params); // eslint-disable-line quotes
    }

    /**
     * Set Assembla service for a project..

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    createEditAssemblaService(id, params) { // eslint-disable-line camelcase
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
     * @param params.bamboo_url {} - undefined
     * @returns {*}
     */

    atlassianBambooCi(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/bamboo`, params); // eslint-disable-line quotes
    }

    /**
     * Set Atlassian Bamboo CI service for a project..

     * @param params {object}
     * @param params.bamboo_url {} - undefined
     * @returns {*}
     */

    createEditAtlassianBambooCiService(id, params) { // eslint-disable-line camelcase
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
     * Continuous integration and deployments.

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    buildkite(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/buildkite`, params); // eslint-disable-line quotes
    }

    /**
     * Set Buildkite service for a project..

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    createEditBuildkiteService(id, params) { // eslint-disable-line camelcase
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
     * @param params.token {} - undefined
     * @returns {*}
     */

    campfire(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/campfire`, params); // eslint-disable-line quotes
    }

    /**
     * Set Campfire service for a project..

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    createEditCampfireService(id, params) { // eslint-disable-line camelcase
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
     * @param params.new_issue_url {} - undefined
     * @returns {*}
     */

    customIssueTracker(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/custom-issue-tracker`, params); // eslint-disable-line quotes
    }

    /**
     * Set Custom Issue Tracker service for a project..

     * @param params {object}
     * @param params.new_issue_url {} - undefined
     * @returns {*}
     */

    createEditCustomIssueTrackerService(id, params) { // eslint-disable-line camelcase
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
     * @param params.token {} - undefined
     * @returns {*}
     */

    droneCi(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/drone-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Set Drone CI service for a project..

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    createEditDroneCiService(id, params) { // eslint-disable-line camelcase
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
     * @param params.recipients {} - undefined
     * @returns {*}
     */

    emailsOnPush(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/emails-on-push`, params); // eslint-disable-line quotes
    }

    /**
     * Set Emails on push service for a project..

     * @param params {object}
     * @param params.recipients {} - undefined
     * @returns {*}
     */

    createEditEmailsOnPushService(id, params) { // eslint-disable-line camelcase
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
     * @param params.external_wiki_url {} - undefined
     * @returns {*}
     */

    externalWiki(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/external-wiki`, params); // eslint-disable-line quotes
    }

    /**
     * Set External Wiki service for a project..

     * @param params {object}
     * @param params.external_wiki_url {} - undefined
     * @returns {*}
     */

    createEditExternalWikiService(id, params) { // eslint-disable-line camelcase
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
     * @param params.token {} - undefined
     * @returns {*}
     */

    flowdock(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/flowdock`, params); // eslint-disable-line quotes
    }

    /**
     * Set Flowdock service for a project..

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    createEditFlowdockService(id, params) { // eslint-disable-line camelcase
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
     * Gemnasium monitors your project dependencies and alerts you about updates and security vulnerabilities..

     * @param params {object}
     * @param params.api_key {} - undefined
     * @returns {*}
     */

    gemnasium(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/gemnasium`, params); // eslint-disable-line quotes
    }

    /**
     * Set Gemnasium service for a project..

     * @param params {object}
     * @param params.api_key {} - undefined
     * @returns {*}
     */

    createEditGemnasiumService(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/gemnasium`, params); // eslint-disable-line quotes
    }

    /**
     * Delete Gemnasium service for a project..

     * @param params {object}
     * @returns {*}
     */

    deleteGemnasiumService(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/services/gemnasium`, params); // eslint-disable-line quotes
    }

    /**
     * Get Gemnasium service settings for a project..

     * @param params {object}
     * @returns {*}
     */

    getGemnasiumServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/gemnasium`, params); // eslint-disable-line quotes
    }

    /**
     * Private group chat and IM.

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    hipchat(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/hipchat`, params); // eslint-disable-line quotes
    }

    /**
     * Set HipChat service for a project..

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    createEditHipchatService(id, params) { // eslint-disable-line camelcase
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
     * @param params.recipients {} - undefined
     * @returns {*}
     */

    irkerIrcGateway(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/irker`, params); // eslint-disable-line quotes
    }

    /**
     * Set Irker (IRC gateway) service for a project..

     * @param params {object}
     * @param params.recipients {} - undefined
     * @returns {*}
     */

    createEditIrkerIrcGatewayService(id, params) { // eslint-disable-line camelcase
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
     * @param params.url {string} - The URL to the JIRA project which is being linked to this GitLab project, e.g., https://jira.example.com.
     * @param params.project_key {string} - The short identifier for your JIRA project, all uppercase, e.g., PROJ.
     * @param params.username {string} - The username of the user created to be used with GitLab/JIRA.
     * @param params.password {string} - The password of the user created to be used with GitLab/JIRA.
     * @param params.jira_issue_transition_id {integer} - The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. The ID of each state can be found inside the parenthesis of each transition name under the Transitions (id) column ([see screenshot][trans]). By default, this ID is set to 2.
     * @returns {*}
     */

    getJiraServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/jira`, params); // eslint-disable-line quotes
    }

    /**
     * Set JIRA service for a project..

     * @param params {object}
     * @param params.url {string} - The URL to the JIRA project which is being linked to this GitLab project, e.g., https://jira.example.com.
     * @param params.project_key {string} - The short identifier for your JIRA project, all uppercase, e.g., PROJ.
     * @param params.username {string} - The username of the user created to be used with GitLab/JIRA.
     * @param params.password {string} - The password of the user created to be used with GitLab/JIRA.
     * @param params.jira_issue_transition_id {integer} - The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. The ID of each state can be found inside the parenthesis of each transition name under the Transitions (id) column ([see screenshot][trans]). By default, this ID is set to 2.
     * @returns {*}
     */

    createEditJiraService(id, params) { // eslint-disable-line camelcase
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

    createEditSlackSlashCommandService(id, params) { // eslint-disable-line camelcase
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
     * @returns {*}
     */

    getMattermostSlashCommandServiceSettings(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/services/mattermost-slash-commands`, params); // eslint-disable-line quotes
    }

    /**
     * Set Mattermost slash command for a project..

     * @param params {object}
     * @param params.token {string} - The Mattermost token
     * @returns {*}
     */

    createEditMattermostSlashCommandService(id, params) { // eslint-disable-line camelcase
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

    createEditPackagistService(id, params) { // eslint-disable-line camelcase
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

    createEditPipelineEmailsService(id, params) { // eslint-disable-line camelcase
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
     * @param params.token {} - undefined
     * @returns {*}
     */

    pivotaltracker(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/pivotaltracker`, params); // eslint-disable-line quotes
    }

    /**
     * Set PivotalTracker service for a project..

     * @param params {object}
     * @param params.token {} - undefined
     * @returns {*}
     */

    createEditPivotaltrackerService(id, params) { // eslint-disable-line camelcase
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
     * Pushover makes it easy to get real-time notifications on your Android device, iPhone, iPad, and Desktop..

     * @param params {object}
     * @param params.api_key {} - undefined
     * @returns {*}
     */

    pushover(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/pushover`, params); // eslint-disable-line quotes
    }

    /**
     * Set Pushover service for a project..

     * @param params {object}
     * @param params.api_key {} - undefined
     * @returns {*}
     */

    createEditPushoverService(id, params) { // eslint-disable-line camelcase
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
     * @param params.new_issue_url {} - undefined
     * @returns {*}
     */

    redmine(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/redmine`, params); // eslint-disable-line quotes
    }

    /**
     * Set Redmine service for a project..

     * @param params {object}
     * @param params.new_issue_url {} - undefined
     * @returns {*}
     */

    createEditRedmineService(id, params) { // eslint-disable-line camelcase
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
     * @param params.webhook {} - undefined
     * @returns {*}
     */

    slackNotifications(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/slack`, params); // eslint-disable-line quotes
    }

    /**
     * Set Slack service for a project..

     * @param params {object}
     * @param params.webhook {} - undefined
     * @returns {*}
     */

    createEditSlackService(id, params) { // eslint-disable-line camelcase
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
     * Receive event notifications in Mattermost.

     * @param params {object}
     * @param params.webhook {} - undefined
     * @returns {*}
     */

    mattermostNotifications(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/mattermost`, params); // eslint-disable-line quotes
    }

    /**
     * Set Mattermost service for a project..

     * @param params {object}
     * @param params.webhook {} - undefined
     * @returns {*}
     */

    createEditMattermostNotificationsService(id, params) { // eslint-disable-line camelcase
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
     * @param params.teamcity_url {} - undefined
     * @returns {*}
     */

    jetbrainsTeamcityCi(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/teamcity`, params); // eslint-disable-line quotes
    }

    /**
     * Set JetBrains TeamCity CI service for a project..

     * @param params {object}
     * @param params.teamcity_url {} - undefined
     * @returns {*}
     */

    createEditJetbrainsTeamcityCiService(id, params) { // eslint-disable-line camelcase
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

    createEditJenkinsCiService(id, params) { // eslint-disable-line camelcase
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

    createEditJenkinsCiDeprecatedService(id, params) { // eslint-disable-line camelcase
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
     * @param params.mock_service_url {} - undefined
     * @returns {*}
     */

    mockci(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/projects/${encodeURIComponent(id)}/services/mock-ci`, params); // eslint-disable-line quotes
    }

    /**
     * Set MockCI service for a project..

     * @param params {object}
     * @param params.mock_service_url {} - undefined
     * @returns {*}
     */

    createEditMockciService(id, params) { // eslint-disable-line camelcase
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

