// Traditional Chinese (繁體中文) translations for the Web UI
window.i18n.loadTranslations('zh-Hant', {
  // 常用操作
  common: {
    yes: '是',
    no: '否',
    ok: '確定',
    cancel: '取消',
    close: '關閉',
    save: '儲存',
    delete: '刪除',
    edit: '編輯',
    restore: '還原',
    upload: '上傳',
    download: '下載',
    settings: '設定',
    dismiss: '關閉',
    confirm: '確認',
    loading: '載入中...',
    error: '錯誤',
    warning: '警告',
    info: '資訊',
    success: '成功'
  },

  // 導航和標題
  nav: {
    backups: '備份',
    settings: '設定',
    about: '關於',
    logs: '日誌'
  },

  // 備份相關字串
  backup: {
    title: '備份',
    statistics: '備份統計資料',
    create: '建立備份',
    new: '新備份',
    last: '上次備份',
    next: '下次備份時間',
    inProgress: '備份進行中',
    uploading: '正在上傳到 Google Drive',
    saved: '永久保存',
    ignored: '已忽略',
    details: '備份詳細資料',
    name: '備份名稱',
    size: '大小',
    date: '日期',
    type: '類型',
    full: '完整',
    partial: '部分',
    protected: '密碼保護',
    retained: '保留',
    delete_confirm: '您確定要刪除此備份嗎？',
    restore_confirm: '您確定要還原此備份嗎？',
    count: '{count} 個備份'
  },

  // 來源
  source: {
    homeassistant: 'Home Assistant',
    googledrive: 'Google Drive',
    free_space: '可用空間',
    backups_in: '{source} 中有 {count} 個備份'
  },

  // 驗證
  auth: {
    get_started: '開始使用',
    authenticate: '使用 Google Drive 驗證',
    authenticating: '驗證中...',
    authenticated: '已驗證',
    not_authenticated: '未驗證',
    reauthorize: '重新授權',
    signout: '登出'
  },

  // 設定頁面
  settings: {
    title: '設定',
    backup_settings: '備份設定',
    google_drive_settings: 'Google Drive 設定',
    general_settings: '一般設定',
    advanced_settings: '進階設定',
    theme_settings: '主題設定',
    save_settings: '儲存設定',
    reset_settings: '重設為預設值',
    max_backups_ha: 'Home Assistant 最大備份數量',
    max_backups_drive: 'Google Drive 最大備份數量',
    days_between_backups: '備份間隔天數',
    backup_name_template: '備份名稱範本',
    backup_time: '每日備份時間',
    backup_password: '備份密碼',
    delete_after_upload: '上傳到 Google Drive 後刪除',
    notify_stale: '過期備份通知',
    generational_backup: '世代備份',
    exclude_folders: '排除資料夾',
    exclude_addons: '排除附加元件',
    background_color: '背景顏色',
    accent_color: '強調色'
  },

  // 錯誤訊息
  error: {
    generic: '發生錯誤',
    network: '網路錯誤',
    authentication: '驗證失敗',
    permission: '權限被拒',
    not_found: '找不到',
    timeout: '請求逾時',
    unknown: '未知錯誤',
    try_again: '請稍後再試',
    cant_reach_google: '無法連接到 Google Drive',
    backup_failed: '備份建立失敗',
    upload_failed: '上傳到 Google Drive 失敗',
    download_failed: '下載失敗',
    delete_failed: '刪除失敗',
    restore_failed: '還原失敗'
  },

  // 訊息和通知
  message: {
    backup_created: '備份建立成功',
    backup_deleted: '備份刪除成功',
    backup_uploaded: '備份已上傳到 Google Drive',
    settings_saved: '設定已儲存',
    error_reports_question: '分享錯誤報告？',
    error_reports_description: '如果您選擇「是」，此附加元件產生的意外例外訊息將會傳送到開發者維護的伺服器。',
    no_backups: '找不到備份',
    creating_backup: '正在建立備份...',
    uploading_backup: '正在上傳備份...',
    space_warning: '磁碟空間不足警告'
  },

  // 時間相關
  time: {
    just_now: '剛剛',
    seconds_ago: '{count} 秒前',
    minute_ago: '1 分鐘前',
    minutes_ago: '{count} 分鐘前',
    hour_ago: '1 小時前',
    hours_ago: '{count} 小時前',
    day_ago: '1 天前',
    days_ago: '{count} 天前',
    week_ago: '1 週前',
    weeks_ago: '{count} 週前',
    month_ago: '1 個月前',
    months_ago: '{count} 個月前',
    year_ago: '1 年前',
    years_ago: '{count} 年前'
  }
});
