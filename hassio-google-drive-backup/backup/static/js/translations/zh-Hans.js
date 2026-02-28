// Simplified Chinese (简体中文) translations for the Web UI
// This is a framework - translations need to be completed
window.i18n.loadTranslations('zh-Hans', {
  // 常用操作
  common: {
    yes: '是',
    no: '否',
    ok: '确定',
    cancel: '取消',
    close: '关闭',
    save: '保存',
    delete: '删除',
    edit: '编辑',
    restore: '还原',
    upload: '上传',
    download: '下载',
    settings: '设置',
    dismiss: '关闭',
    confirm: '确认',
    loading: '加载中...',
    error: '错误',
    warning: '警告',
    info: '信息',
    success: '成功'
  },

  // 导航和标题
  nav: {
    backups: '备份',
    settings: '设置',
    about: '关于',
    logs: '日志'
  },

  // 备份相关
  backup: {
    title: '备份',
    statistics: '备份统计',
    create: '创建备份',
    new: '新备份',
    last: '上次备份',
    next: '下次备份时间',
    inProgress: '备份进行中',
    uploading: '正在上传到 Google Drive',
    saved: '永久保存',
    ignored: '已忽略',
    details: '备份详细信息',
    name: '备份名称',
    size: '大小',
    date: '日期',
    type: '类型',
    full: '完整',
    partial: '部分',
    protected: '密码保护',
    retained: '保留',
    delete_confirm: '您确定要删除此备份吗？',
    restore_confirm: '您确定要还原此备份吗？',
    count: '{count} 个备份'
  },

  // 来源
  source: {
    homeassistant: 'Home Assistant',
    googledrive: 'Google Drive',
    free_space: '可用空间',
    backups_in: '{source} 中有 {count} 个备份'
  },

  // 验证
  auth: {
    get_started: '开始使用',
    authenticate: '使用 Google Drive 验证',
    authenticating: '验证中...',
    authenticated: '已验证',
    not_authenticated: '未验证',
    reauthorize: '重新授权',
    signout: '登出'
  },

  // 设置页面
  settings: {
    title: '设置',
    backup_settings: '备份设置',
    google_drive_settings: 'Google Drive 设置',
    general_settings: '常规设置',
    advanced_settings: '高级设置',
    theme_settings: '主题设置',
    save_settings: '保存设置',
    reset_settings: '重置为默认值',
    max_backups_ha: 'Home Assistant 最大备份数量',
    max_backups_drive: 'Google Drive 最大备份数量',
    days_between_backups: '备份间隔天数',
    backup_name_template: '备份名称模板',
    backup_time: '每日备份时间',
    backup_password: '备份密码',
    delete_after_upload: '上传到 Google Drive 后删除',
    notify_stale: '过期备份通知',
    generational_backup: '世代备份',
    exclude_folders: '排除文件夹',
    exclude_addons: '排除附加组件',
    background_color: '背景颜色',
    accent_color: '强调色'
  },

  // 错误消息
  error: {
    generic: '发生错误',
    network: '网络错误',
    authentication: '验证失败',
    permission: '权限被拒',
    not_found: '找不到',
    timeout: '请求超时',
    unknown: '未知错误',
    try_again: '请稍后再试',
    cant_reach_google: '无法连接到 Google Drive',
    backup_failed: '备份创建失败',
    upload_failed: '上传到 Google Drive 失败',
    download_failed: '下载失败',
    delete_failed: '删除失败',
    restore_failed: '还原失败'
  },

  // 消息和通知
  message: {
    backup_created: '备份创建成功',
    backup_deleted: '备份删除成功',
    backup_uploaded: '备份已上传到 Google Drive',
    settings_saved: '设置已保存',
    error_reports_question: '分享错误报告？',
    error_reports_description: '如果您选择"是"，此附加组件产生的意外异常消息将会发送到开发者维护的服务器。',
    no_backups: '找不到备份',
    creating_backup: '正在创建备份...',
    uploading_backup: '正在上传备份...',
    space_warning: '磁盘空间不足警告'
  },

  // 时间相关
  time: {
    just_now: '刚刚',
    seconds_ago: '{count} 秒前',
    minute_ago: '1 分钟前',
    minutes_ago: '{count} 分钟前',
    hour_ago: '1 小时前',
    hours_ago: '{count} 小时前',
    day_ago: '1 天前',
    days_ago: '{count} 天前',
    week_ago: '1 周前',
    weeks_ago: '{count} 周前',
    month_ago: '1 个月前',
    months_ago: '{count} 个月前',
    year_ago: '1 年前',
    years_ago: '{count} 年前'
  }
});
