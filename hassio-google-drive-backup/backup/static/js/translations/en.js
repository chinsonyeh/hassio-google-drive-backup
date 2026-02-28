// English translations for the Web UI
window.i18n.loadTranslations('en', {
  // Common actions
  common: {
    yes: 'Yes',
    no: 'No',
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    restore: 'Restore',
    upload: 'Upload',
    download: 'Download',
    settings: 'Settings',
    dismiss: 'Dismiss',
    confirm: 'Confirm',
    loading: 'Loading...',
    error: 'Error',
    warning: 'Warning',
    info: 'Information',
    success: 'Success'
  },

  // Navigation and header
  nav: {
    backups: 'Backups',
    settings: 'Settings',
    about: 'About',
    logs: 'Logs'
  },

  // Backup-related strings
  backup: {
    title: 'Backups',
    statistics: 'Backup Statistics',
    create: 'Create Backup',
    new: 'New Backup',
    last: 'Last Backup',
    next: 'Next Backup in',
    inProgress: 'Backup in Progress',
    uploading: 'Uploading to Google Drive',
    saved: 'saved indefinitely',
    ignored: 'ignored',
    details: 'Backup Details',
    name: 'Backup Name',
    size: 'Size',
    date: 'Date',
    type: 'Type',
    full: 'Full',
    partial: 'Partial',
    protected: 'Password Protected',
    retained: 'Retained',
    delete_confirm: 'Are you sure you want to delete this backup?',
    restore_confirm: 'Are you sure you want to restore this backup?',
    count: '{count} backups'
  },

  // Sources
  source: {
    homeassistant: 'Home Assistant',
    googledrive: 'Google Drive',
    free_space: 'Free space',
    backups_in: '{count} backups in {source}'
  },

  // Authentication
  auth: {
    get_started: 'Get Started',
    authenticate: 'Authenticate with Google Drive',
    authenticating: 'Authenticating...',
    authenticated: 'Authenticated',
    not_authenticated: 'Not authenticated',
    reauthorize: 'Re-authorize',
    signout: 'Sign Out'
  },

  // Settings page
  settings: {
    title: 'Settings',
    backup_settings: 'Backup Settings',
    google_drive_settings: 'Google Drive Settings',
    general_settings: 'General Settings',
    advanced_settings: 'Advanced Settings',
    theme_settings: 'Theme Settings',
    save_settings: 'Save Settings',
    reset_settings: 'Reset to Defaults',
    max_backups_ha: 'Max Backups in Home Assistant',
    max_backups_drive: 'Max Backups in Google Drive',
    days_between_backups: 'Days Between Backups',
    backup_name_template: 'Backup Name Template',
    backup_time: 'Backup Time of Day',
    backup_password: 'Backup Password',
    delete_after_upload: 'Delete After Upload to Google Drive',
    notify_stale: 'Notify for Stale Backups',
    generational_backup: 'Generational Backup',
    exclude_folders: 'Exclude Folders',
    exclude_addons: 'Exclude Add-ons',
    background_color: 'Background Color',
    accent_color: 'Accent Color'
  },

  // Error messages
  error: {
    generic: 'An error occurred',
    network: 'Network error',
    authentication: 'Authentication failed',
    permission: 'Permission denied',
    not_found: 'Not found',
    timeout: 'Request timeout',
    unknown: 'Unknown error',
    try_again: 'Please try again later',
    cant_reach_google: 'Cannot reach Google Drive',
    backup_failed: 'Backup creation failed',
    upload_failed: 'Upload to Google Drive failed',
    download_failed: 'Download failed',
    delete_failed: 'Delete failed',
    restore_failed: 'Restore failed'
  },

  // Messages and notifications
  message: {
    backup_created: 'Backup created successfully',
    backup_deleted: 'Backup deleted successfully',
    backup_uploaded: 'Backup uploaded to Google Drive',
    settings_saved: 'Settings saved',
    error_reports_question: 'Share Error Reports?',
    error_reports_description: 'If you select yes, the text of unexpected exceptions this add-on produces will be sent to a server maintained by the developer.',
    no_backups: 'No backups found',
    creating_backup: 'Creating backup...',
    uploading_backup: 'Uploading backup...',
    space_warning: 'Low disk space warning'
  },

  // Time-related
  time: {
    just_now: 'Just now',
    seconds_ago: '{count} seconds ago',
    minute_ago: '1 minute ago',
    minutes_ago: '{count} minutes ago',
    hour_ago: '1 hour ago',
    hours_ago: '{count} hours ago',
    day_ago: '1 day ago',
    days_ago: '{count} days ago',
    week_ago: '1 week ago',
    weeks_ago: '{count} weeks ago',
    month_ago: '1 month ago',
    months_ago: '{count} months ago',
    year_ago: '1 year ago',
    years_ago: '{count} years ago'
  }
});
