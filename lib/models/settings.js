
'use strict';

/*eslint-disable */
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
     * List the current application settings
of the GitLab instance..

     * @param params {object}
     * @returns {*}
     */

    getCurrentApplicationSettings(params) {
        return this.http.get(`/application/settings`, params); // eslint-disable-line quotes
    }

    /**
     * Use an API call to modify GitLab instance
application settings..

     * @param params {object}
     * @param params.admin_notification_email {string} - Abuse reports will be sent to this address if it is set. Abuse reports are always available in the admin area.
     * @param params.after_sign_out_path {string} - Where to redirect users after logout.
     * @param params.after_sign_up_text {string} - Text shown to the user after signing up
     * @param params.akismet_api_key {string} - API key for akismet spam protection.
     * @param params.akismet_enabled {boolean} - (If enabled, requires: akismet_api_key) Enable or disable akismet spam protection.
     * @param params.allow_group_owners_to_manage_ldap {boolean} - 
(Premium) Set to true to allow group owners to manage LDAP
     * @param params.allow_local_requests_from_hooks_and_services {boolean} - Allow requests to the local network from hooks and services.
     * @param params.authorized_keys_enabled {boolean} - By default, we write to the authorized_keys file to support Git over SSH without additional configuration. GitLab can be optimized to authenticate SSH keys via the database file. Only disable this if you have configured your OpenSSH server to use the AuthorizedKeysCommand.
     * @param params.auto_devops_domain {string} - Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages.
     * @param params.auto_devops_enabled {boolean} - Enable Auto DevOps for projects by default. It will automatically build, test, and deploy applications based on a predefined CI/CD configuration.
     * @param params.check_namespace_plan {boolean} - 
(Premium) Enabling this will make only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public.
     * @param params.clientside_sentry_dsn {string} - Clientside Sentry Data Source Name.
     * @param params.clientside_sentry_enabled {boolean} - (If enabled, requires: clientside_sentry_dsn) Enable Sentry error reporting for the client side.
     * @param params.container_registry_token_expire_delay {integer} - Container Registry token duration in minutes.
     * @param params.default_artifacts_expire_in {string} - Set the default expiration time for each job’s artifacts.
     * @param params.default_branch_protection {integer} - Determine if developers can push to master. Can take: 0 (not protected, both developers and maintainers can push new commits, force push, or delete the branch), 1 (partially protected, developers and maintainers can push new commits, but cannot force push or delete the branch) or 2 (fully protected, developers cannot push new commits, but maintainers can; no-one can force push or delete the branch) as a parameter. Default is 2.
     * @param params.default_group_visibility {string} - What visibility level new groups receive. Can take private, internal and public as a parameter. Default is private.
     * @param params.default_project_visibility {string} - What visibility level new projects receive. Can take private, internal and public as a parameter. Default is private.
     * @param params.default_projects_limit {integer} - Project limit per user. Default is 100000.
     * @param params.default_snippet_visibility {string} - What visibility level new snippets receive. Can take private, internal and public as a parameter. Default is private.
     * @param params.disabled_oauth_sign_in_sources {array of strings} - Disabled OAuth sign-in sources.
     * @param params.domain_blacklist {array of strings} - Users with e-mail addresses that match these domain(s) will NOT be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com.
     * @param params.domain_blacklist_enabled {boolean} - (If enabled, requires: domain_blacklist) Allows blocking sign-ups from emails from specific domains.
     * @param params.domain_whitelist {array of strings} - Force people to use only corporate emails for sign-up. Default is null, meaning there is no restriction.
     * @param params.dsa_key_restriction {integer} - The minimum allowed bit length of an uploaded DSA key. Default is 0 (no restriction). -1 disables DSA keys.
     * @param params.ecdsa_key_restriction {integer} - The minimum allowed curve size (in bits) of an uploaded ECDSA key. Default is 0 (no restriction). -1 disables ECDSA keys.
     * @param params.ed25519_key_restriction {integer} - The minimum allowed curve size (in bits) of an uploaded ED25519 key. Default is 0 (no restriction). -1 disables ED25519 keys.
     * @param params.elasticsearch_aws {boolean} - 
(Premium) Enable the use of AWS hosted Elasticsearch
     * @param params.elasticsearch_aws_access_key {string} - 
(Premium) AWS IAM access key
     * @param params.elasticsearch_aws_region {string} - 
(Premium) The AWS region the elasticsearch domain is configured
     * @param params.elasticsearch_aws_secret_access_key {string} - 
(Premium) AWS IAM secret access key
     * @param params.elasticsearch_experimental_indexer {boolean} - 
(Premium) Use the experimental elasticsearch indexer. More info: https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer

     * @param params.elasticsearch_indexing {boolean} - 
(Premium) Enable Elasticsearch indexing
     * @param params.elasticsearch_search {boolean} - 
(Premium) Enable Elasticsearch search
     * @param params.elasticsearch_url {string} - 
(Premium) The url to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (e.g., “http://localhost:9200, http://localhost:9201"). If your Elasticsearch instance is password protected, pass the username:password in the URL (e.g., http://<username>:<password>@<elastic_host>:9200/).
     * @param params.email_additional_text {string} - 
(Premium) Additional text added to the bottom of every email for legal/auditing/compliance reasons
     * @param params.email_author_in_body {boolean} - Some email servers do not support overriding the email sender name. Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.
     * @param params.enabled_git_access_protocol {string} - Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols.
     * @param params.enforce_terms {boolean} - (If enabled, requires: terms) Enforce application ToS to all users.
     * @param params.external_auth_client_cert {string} - 
(Premium) (If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service
     * @param params.external_auth_client_key {string} - 
(Premium) Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored
     * @param params.external_auth_client_key_pass {string} - 
(Premium) Passphrase to use for the private key when authenticating with the external service this is encrypted when stored
     * @param params.external_authorization_service_enabled {boolean} - 
(Premium) (If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url )  Enable using an external authorization service for accessing projects
     * @param params.external_authorization_service_default_label {string} - 
(Premium) The default classification label to use when requesting authorization and no classification label has been specified on the project
     * @param params.external_authorization_service_timeout {float} - 
(Premium) The timeout after which an authorization request is aborted, in seconds. When a request times out, access is denied to the user. (min: 0.001, max: 10, step: 0.001)
     * @param params.external_authorization_service_url {string} - 
(Premium) URL to which authorization requests will be directed
     * @param params.file_template_project_id {integer} - 
(Premium) The ID of a project to load custom file templates from
     * @param params.geo_status_timeout {integer} - 
(Premium) The amount of seconds after which a request to get a secondary node status will time out.
     * @param params.gitaly_timeout_default {integer} - Default Gitaly timeout, in seconds. This timeout is not enforced for git fetch/push operations or Sidekiq jobs. Set to 0 to disable timeouts.
     * @param params.gitaly_timeout_fast {integer} - Gitaly fast operation timeout, in seconds. Some Gitaly operations are expected to be fast. If they exceed this threshold, there may be a problem with a storage shard and ‘failing fast’ can help maintain the stability of the GitLab instance. Set to 0 to disable timeouts.
     * @param params.gitaly_timeout_medium {integer} - Medium Gitaly timeout, in seconds. This should be a value between the Fast and the Default timeout. Set to 0 to disable timeouts.
     * @param params.gravatar_enabled {boolean} - Enable Gravatar.
     * @param params.hashed_storage_enabled {boolean} - Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk. This prevents repositories from having to be moved or renamed when the Project URL changes and may improve disk I/O performance. (EXPERIMENTAL)
     * @param params.help_page_hide_commercial_content {boolean} - Hide marketing-related entries from help.
     * @param params.help_page_support_url {string} - Alternate support URL for help page.
     * @param params.help_page_text {string} - Custom text displayed on the help page.
     * @param params.help_text {string} - 
(Premium) GitLab server administrator information
     * @param params.hide_third_party_offers {boolean} - Do not display offers from third parties within GitLab.
     * @param params.home_page_url {string} - Redirect to this URL when not logged in.
     * @param params.housekeeping_bitmaps_enabled {boolean} - Enable Git pack file bitmap creation.
     * @param params.housekeeping_enabled {boolean} - (If enabled, requires: housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period) Enable or disable git housekeeping.
     * @param params.housekeeping_full_repack_period {integer} - Number of Git pushes after which an incremental git repack is run.
     * @param params.housekeeping_gc_period {integer} - Number of Git pushes after which git gc is run.
     * @param params.housekeeping_incremental_repack_period {integer} - Number of Git pushes after which an incremental git repack is run.
     * @param params.html_emails_enabled {boolean} - Enable HTML emails.
     * @param params.instance_statistics_visibility_private {boolean} - When set to true Instance statistics will only be available to admins.
     * @param params.import_sources {array of strings} - Sources to allow project import from, possible values: github, bitbucket, gitlab, google_code, fogbugz, git, and gitlab_project.
     * @param params.max_artifacts_size {integer} - Maximum artifacts size in MB
     * @param params.max_attachment_size {integer} - Limit attachment size in MB
     * @param params.max_pages_size {integer} - Maximum size of pages repositories in MB
     * @param params.metrics_enabled {boolean} - (If enabled, requires: metrics_host, metrics_method_call_threshold, metrics_packet_size, metrics_pool_size, metrics_port, metrics_sample_interval and metrics_timeout) Enable influxDB metrics.
     * @param params.metrics_host {string} - InfluxDB host.
     * @param params.metrics_method_call_threshold {integer} - A method call is only tracked when it takes longer than the given amount of milliseconds.
     * @param params.metrics_packet_size {integer} - The amount of datapoints to send in a single UDP packet.
     * @param params.metrics_pool_size {integer} - The amount of InfluxDB connections to keep open.
     * @param params.metrics_port {integer} - The UDP port to use for connecting to InfluxDB.
     * @param params.metrics_sample_interval {integer} - The sampling interval in seconds.
     * @param params.metrics_timeout {integer} - The amount of seconds after which InfluxDB will time out.
     * @param params.mirror_available {boolean} - Allow mirrors to be set up for projects. If disabled, only admins will be able to set up mirrors in projects.
     * @param params.mirror_capacity_threshold {integer} - 
(Premium) Minimum capacity to be available before scheduling more mirrors preemptively
     * @param params.mirror_max_capacity {integer} - 
(Premium) Maximum number of mirrors that can be synchronizing at the same time.
     * @param params.mirror_max_delay {integer} - 
(Premium) Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize.
     * @param params.pages_domain_verification_enabled {boolean} - Require users to prove ownership of custom domains. Domain verification is an essential security measure for public GitLab sites. Users are required to demonstrate they control a domain before it is enabled.
     * @param params.password_authentication_enabled_for_git {boolean} - Enable authentication for Git over HTTP(S) via a GitLab account password. Default is true.
     * @param params.password_authentication_enabled_for_web {boolean} - Enable authentication for the web interface via a GitLab account password. Default is true.
     * @param params.performance_bar_allowed_group_id {string} - (Deprecated: Use performance_bar_allowed_group_path instead) Path of the group that is allowed to toggle the performance bar.
     * @param params.performance_bar_allowed_group_path {string} - Path of the group that is allowed to toggle the performance bar.
     * @param params.performance_bar_enabled {boolean} - (Deprecated: Pass performance_bar_allowed_group_path: nil instead) Allow enabling the performance bar.
     * @param params.plantuml_enabled {boolean} - (If enabled, requires: plantuml_url) Enable PlantUML integration. Default is false.
     * @param params.plantuml_url {string} - The PlantUML instance URL for integration.
     * @param params.polling_interval_multiplier {decimal} - Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling.
     * @param params.project_export_enabled {boolean} - Enable project export.
     * @param params.prometheus_metrics_enabled {boolean} - Enable prometheus metrics.
     * @param params.pseudonymizer_enabled {boolean} - 
(Premium) When enabled, GitLab will run a background job that will produce pseudonymized CSVs of the GitLab database that will be uploaded to your configured object storage directory.
     * @param params.recaptcha_enabled {boolean} - (If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable recaptcha.
     * @param params.recaptcha_private_key {string} - Private key for recaptcha.
     * @param params.recaptcha_site_key {string} - Site key for recaptcha.
     * @param params.repository_checks_enabled {boolean} - GitLab will periodically run git fsck in all project and wiki repositories to look for silent disk corruption issues.
     * @param params.repository_size_limit {integer} - 
(Premium) Size limit per repository (MB)
     * @param params.repository_storages {array of strings} - A list of names of enabled storage paths, taken from gitlab.yml. New projects will be created in one of these stores, chosen at random.
     * @param params.require_two_factor_authentication {boolean} - (If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication.
     * @param params.restricted_visibility_levels {array of strings} - Selected levels cannot be used by non-admin users for groups, projects or snippets. Can take private, internal and public as a parameter. Default is null which means there is no restriction.
     * @param params.rsa_key_restriction {integer} - The minimum allowed bit length of an uploaded RSA key. Default is 0 (no restriction). -1 disables RSA keys.
     * @param params.send_user_confirmation_email {boolean} - Send confirmation email on sign-up.
     * @param params.sentry_dsn {string} - Sentry Data Source Name.
     * @param params.sentry_enabled {boolean} - (If enabled, requires: sentry_dsn) Sentry is an error reporting and logging tool which is currently not shipped with GitLab, available at https://getsentry.com.
     * @param params.session_expire_delay {integer} - Session duration in minutes. GitLab restart is required to apply changes
     * @param params.shared_runners_enabled {boolean} - (If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects.
     * @param params.shared_runners_minutes {integer} - 
(Premium) Set the maximum number of pipeline minutes that a group can use on shared Runners per month.
     * @param params.shared_runners_text {string} - Shared runners text.
     * @param params.sign_in_text {string} - Text on the login page.
     * @param params.signin_enabled {string} - (Deprecated: Use password_authentication_enabled_for_web instead) Flag indicating if password authentication is enabled for the web interface.
     * @param params.signup_enabled {boolean} - Enable registration. Default is true.
     * @param params.slack_app_enabled {boolean} - 
(Premium) (If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app.
     * @param params.slack_app_id {string} - 
(Premium) The app id of the Slack-app.
     * @param params.slack_app_secret {string} - 
(Premium) The app secret of the Slack-app.
     * @param params.slack_app_verification_token {string} - 
(Premium) The verification token of the Slack-app.
     * @param params.terminal_max_session_time {integer} - Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time.
     * @param params.terms {text} - (Required by: enforce_terms) Markdown content for the ToS.
     * @param params.throttle_authenticated_api_enabled {boolean} - (If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit. Helps reduce request volume (e.g. from crawlers or abusive bots).
     * @param params.throttle_authenticated_api_period_in_seconds {integer} - Rate limit period in seconds.
     * @param params.throttle_authenticated_api_requests_per_period {integer} - Max requests per period per user.
     * @param params.throttle_authenticated_web_enabled {boolean} - (If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit. Helps reduce request volume (e.g. from crawlers or abusive bots).
     * @param params.throttle_authenticated_web_period_in_seconds {integer} - Rate limit period in seconds.
     * @param params.throttle_authenticated_web_requests_per_period {integer} - Max requests per period per user.
     * @param params.throttle_unauthenticated_enabled {boolean} - (If enabled, requires: throttle_unauthenticated_period_in_seconds and throttle_unauthenticated_requests_per_period) Enable unauthenticated request rate limit. Helps reduce request volume (e.g. from crawlers or abusive bots).
     * @param params.throttle_unauthenticated_period_in_seconds {integer} - Rate limit period in seconds.
     * @param params.throttle_unauthenticated_requests_per_period {integer} - Max requests per period per IP.
     * @param params.two_factor_grace_period {integer} - Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication.
     * @param params.unique_ips_limit_enabled {boolean} - (If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple ips.
     * @param params.unique_ips_limit_per_user {integer} - Maximum number of ips per user.
     * @param params.unique_ips_limit_time_window {integer} - How many seconds an IP will be counted towards the limit.
     * @param params.usage_ping_enabled {boolean} - Every week GitLab will report license usage back to GitLab, Inc.
     * @param params.user_default_external {boolean} - Newly registered users will be external by default.
     * @param params.user_oauth_applications {boolean} - Allow users to register any application to use GitLab as an OAuth provider.
     * @param params.user_show_add_ssh_key_message {boolean} - When set to false disable the “You won’t be able to pull or push project code via SSH” warning shown to users with no uploaded SSH key.
     * @param params.version_check_enabled {boolean} - Let GitLab inform you when an update is available.
     * @returns {*}
     */

    changeApplicationSettings(params) {
        return this.http.put(`/application/settings`, params); // eslint-disable-line quotes
    }

}

module.exports = Settings;

