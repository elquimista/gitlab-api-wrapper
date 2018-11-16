
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing Settings .
 */
class Settings extends ModelBase {

     /**
     * Create Settings .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * These API calls allow you to read and modify GitLab instance application
settings as appear in /admin/application_settings. You have to be an
administrator in order to perform this action..

     * @param params {object}
     * @returns {*}
     */

    applicationSettingsApi(params) {
        return this.http.get(`/application/settings`, params); // eslint-disable-line quotes
    }

    /**
     * List the current application settings of the GitLab instance..

     * @param params {object}
     * @returns {*}
     */

    getCurrentApplicationSettings(params) {
        return this.http.get(`/application/settings`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @param params.admin_notification_email {string} - Abuse reports will be sent to this address if it is set. Abuse reports are always available in the admin area.
     * @param params.after_sign_out_path {string} - Where to redirect users after logout
     * @param params.after_sign_up_text {string} - Text shown to the user after signing up
     * @param params.akismet_api_key {string} - API key for akismet spam protection
     * @param params.akismet_enabled {boolean} - Enable or disable akismet spam protection
     * @param params.allow_group_owners_to_manage_ldap {boolean} - Set to true to allow group owners to manage LDAP
     * @param params.authorized_keys_enabled {boolean} - By default, we write to the "authorized_keys" file to support Git over SSH without additional configuration. GitLab can be optimized to authenticate SSH keys via the database file. Only disable this if you have configured your OpenSSH server to use the AuthorizedKeysCommand.
     * @param params.`circuitbreaker_access_retries {integer} - The number of attempts GitLab will make to access a storage.
     * @param params.`circuitbreaker_backoff_threshold {integer} - The number of failures after which GitLab will start temporarily disabling access to a storage shard on a host.
     * @param params.circuitbreaker_failure_count_threshold {integer} - The number of failures of after which GitLab will completely prevent access to the storage.
     * @param params.circuitbreaker_failure_reset_time {integer} - Time in seconds GitLab will keep storage failure information. When no failures occur during this time, the failure information is reset.
     * @param params.circuitbreaker_failure_wait_time {integer} - Time in seconds GitLab will block access to a failing storage to allow it to recover.
     * @param params.circuitbreaker_storage_timeout {integer} - Seconds to wait for a storage access attempt
     * @param params.clientside_sentry_dsn {string} - Required if clientside_sentry_dsn is enabled
     * @param params.clientside_sentry_enabled {boolean} - Enable Sentry error reporting for the client side
     * @param params.container_registry_token_expire_delay {integer} - Container Registry token duration in minutes
     * @param params.default_artifacts_expire_in {string} - Set the default expiration time for each job's artifacts
     * @param params.default_branch_protection {integer} - Determine if developers can push to master. Can take 0 (not protected, both developers and masters can push new commits, force push or delete the branch), 1 (partially protected, developers can push new commits, but cannot force push or delete the branch, masters can do anything) or 2 (fully protected, developers cannot push new commits, force push or delete the branch, masters can do anything) as a parameter. Default is 2.
     * @param params.default_group_visibility {string} - What visibility level new groups receive. Can take private, internal and public as a parameter. Default is private.
     * @param params.default_project_visibility {string} - What visibility level new projects receive. Can take private, internal and public as a parameter. Default is private.
     * @param params.default_projects_limit {integer} - Project limit per user. Default is 100000

     * @param params.default_snippet_visibility {string} - What visibility level new snippets receive. Can take private, internal and public as a parameter. Default is private.
     * @param params.disabled_oauth_sign_in_sources {Array of strings} - Disabled OAuth sign-in sources
     * @param params.domain_blacklist_enabled {boolean} - Enable/disable the domain_blacklist

     * @param params.domain_blacklist {array of strings} - People trying to sign-up with emails from this domain will not be allowed to do so.
     * @param params.domain_whitelist {array of strings} - Force people to use only corporate emails for sign-up. Default is null, meaning there is no restriction.
     * @param params.dsa_key_restriction {integer} - The minimum allowed bit length of an uploaded DSA key. Default is 0 (no restriction). -1 disables DSA keys.
     * @param params.ecdsa_key_restriction {integer} - The minimum allowed curve size (in bits) of an uploaded ECDSA key. Default is 0 (no restriction). -1 disables ECDSA keys.
     * @param params.ed25519_key_restriction {integer} - The minimum allowed curve size (in bits) of an uploaded ED25519 key. Default is 0 (no restriction). -1 disables ED25519 keys.
     * @param params.elasticsearch_aws_access_key {string} - AWS IAM access key
     * @param params.elasticsearch_aws_region {string} - The AWS region the elasticsearch domain is configured
     * @param params.elasticsearch_aws_secret_access_key {string} - AWS IAM secret access key
     * @param params.elasticsearch_aws {boolean} - Enable the use of AWS hosted Elasticsearch
     * @param params.elasticsearch_experimental_indexer {boolean} - Use the experimental elasticsearch indexer. More info: https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer

     * @param params.elasticsearch_indexing {boolean} - Enable Elasticsearch indexing
     * @param params.elasticsearch_search {boolean} - Enable Elasticsearch search
     * @param params.elasticsearch_url {string} - The url to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (e.g., "http://localhost:9200, http://localhost:9201")
     * @param params.email_author_in_body {boolean} - Some email servers do not support overriding the email sender name. Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.
     * @param params.enabled_git_access_protocol {string} - Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols.
     * @param params.geo_status_timeout {integer} - The amount of seconds after which a request to get a secondary node status will time out.
     * @param params.gravatar_enabled {boolean} - Enable Gravatar
     * @param params.help_page_hide_commercial_content {boolean} - Hide marketing-related entries from help
     * @param params.help_page_support_url {string} - Alternate support URL for help page
     * @param params.help_text {string} - GitLab server administrator information
     * @param params.home_page_url {string} - Redirect to this URL when not logged in
     * @param params.housekeeping_bitmaps_enabled {boolean} - Enable Git pack file bitmap creation
     * @param params.housekeeping_enabled {boolean} - Enable or disable git housekeeping
     * @param params.housekeeping_full_repack_period {integer} - Number of Git pushes after which an incremental 'git repack' is run.
     * @param params.housekeeping_gc_period {integer} - Number of Git pushes after which 'git gc' is run.
     * @param params.housekeeping_incremental_repack_period {integer} - Number of Git pushes after which an incremental 'git repack' is run.
     * @param params.html_emails_enabled {boolean} - Enable HTML emails
     * @param params.import_sources {Array of strings} - Sources to allow project import from, possible values: "github bitbucket gitlab google_code fogbugz git gitlab_project
     * @param params.koding_enabled {boolean} - Enable Koding integration. Default is false.
     * @param params.koding_url {string} - The Koding instance URL for integration.
     * @param params.max_artifacts_size {integer} - Maximum artifacts size in MB
     * @param params.max_attachment_size {integer} - Limit attachment size in MB
     * @param params.max_pages_size {integer} - Maximum size of pages repositories in MB
     * @param params.metrics_enabled {boolean} - Enable influxDB metrics
     * @param params.metrics_host {string} - InfluxDB host
     * @param params.metrics_method_call_threshold {integer} - A method call is only tracked when it takes longer than the given amount of milliseconds
     * @param params.metrics_packet_size {integer} - The amount of datapoints to send in a single UDP packet.
     * @param params.metrics_pool_size {integer} - The amount of InfluxDB connections to keep open
     * @param params.metrics_port {integer} - The UDP port to use for connecting to InfluxDB
     * @param params.metrics_sample_interval {integer} - The sampling interval in seconds.
     * @param params.metrics_timeout {integer} - The amount of seconds after which InfluxDB will time out.
     * @param params.password_authentication_enabled {boolean} - Enable authentication via a GitLab account password. Default is true.
     * @param params.performance_bar_allowed_group_id {string} - The group that is allowed to enable the performance bar
     * @param params.performance_bar_enabled {boolean} - Allow enabling the performance bar
     * @param params.plantuml_enabled {boolean} - Enable PlantUML integration. Default is false.
     * @param params.plantuml_url {string} - The PlantUML instance URL for integration.
     * @param params.polling_interval_multiplier {decimal} - Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling.
     * @param params.project_export_enabled {boolean} - Enable project export
     * @param params.prometheus_metrics_enabled {boolean} - Enable prometheus metrics
     * @param params.recaptcha_enabled {boolean} - Enable recaptcha
     * @param params.recaptcha_private_key {string} - Private key for recaptcha
     * @param params.recaptcha_site_key {string} - Site key for recaptcha
     * @param params.repository_checks_enabled {boolean} - GitLab will periodically run 'git fsck' in all project and wiki repositories to look for silent disk corruption issues.
     * @param params.repository_size_limit {integer} - Size limit per repository (MB)
     * @param params.repository_storages {array of strings} - A list of names of enabled storage paths, taken from gitlab.yml. New projects will be created in one of these stores, chosen at random.
     * @param params.require_two_factor_authentication {boolean} - Require all users to setup Two-factor authentication
     * @param params.restricted_visibility_levels {array of strings} - Selected levels cannot be used by non-admin users for projects or snippets. Can take private, internal and public as a parameter. Default is null which means there is no restriction.
     * @param params.rsa_key_restriction {integer} - The minimum allowed bit length of an uploaded RSA key. Default is 0 (no restriction). -1 disables RSA keys.
     * @param params.send_user_confirmation_email {boolean} - Send confirmation email on sign-up
     * @param params.sentry_dsn {string} - Sentry Data Source Name
     * @param params.sentry_enabled {boolean} - Sentry is an error reporting and logging tool which is currently not shipped with GitLab, get it here: https://getsentry.com

     * @param params.session_expire_delay {integer} - Session duration in minutes. GitLab restart is required to apply changes
     * @param params.shared_runners_enabled {true} - Enable shared runners for new projects
     * @param params.shared_runners_minutes {integer} - Set the maximum number of pipeline minutes that a group can use on shared Runners per month.
     * @param params.sidekiq_throttling_enabled {boolean} - Enable Sidekiq Job Throttling
     * @param params.sidekiq_throttling_factor {decimal} - The factor by which the queues should be throttled. A value between 0.0 and 1.0, exclusive.
     * @param params.sidekiq_throttling_queues {array of strings} - Choose which queues you wish to throttle
     * @param params.sign_in_text {string} - Text on login page
     * @param params.signup_enabled {boolean} - Enable registration. Default is true.
     * @param params.slack_app_enabled {boolean} - Enable Slack ap
     * @param params.slack_app_id {string} - The app id of the Slack-app
     * @param params.slack_app_secret {string} - The app secret of the Slack-app
     * @param params.slack_app_verification_token {string} - The verification token of the Slack-app
     * @param params.two_factor_grace_period {integer} - Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication
     * @param params.unique_ips_limit_enabled {boolean} - Limit sign in from multiple ips
     * @param params.unique_ips_limit_per_user {integer} - Maximum number of ips per user
     * @param params.unique_ips_limit_time_window {integer} - How many seconds an IP will be counted towards the limit
     * @param params.usage_ping_enabled {boolean} - Every week GitLab will report license usage back to GitLab, Inc.
     * @param params.user_default_external {boolean} - Newly registered users will by default be external
     * @param params.user_oauth_applications {boolean} - Allow users to register any application to use GitLab as an OAuth provider
     * @param params.version_check_enabled {boolean} - Let GitLab inform you when an update is available.
     * @returns {*}
     */

    changeApplicationSettings(params) {
        return this.http.put(`/application/settings`, params); // eslint-disable-line quotes
    }

}

module.exports = Settings;

