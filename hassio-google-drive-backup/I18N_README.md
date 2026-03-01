# 多國語言系統實作完成 🌐

本 Add-on 已成功實作完整的多國語言支援！

## ✅ 已完成的功能

### 1. Home Assistant 配置介面翻譯

**位置**：`hassio-google-drive-backup/translations/`

已創建的翻譯文件：
- ✅ `en.json` - 英文（完整）
- ✅ `zh-Hant.json` - 繁體中文（完整）

包含所有配置選項的翻譯，Home Assistant 會根據使用者的語言設定自動切換。

### 2. Web UI 前端介面翻譯

**核心系統**：
- ✅ `backup/static/js/i18n.js` - 國際化核心引擎
- ✅ `backup/static/js/language-selector.js` - 語言選擇器組件
- ✅ `backup/static/js/translations/en.js` - 英文 UI 翻譯
- ✅ `backup/static/js/translations/zh-Hant.js` - 繁體中文 UI 翻譯

**整合到現有頁面**：
- ✅ `backup/static/layouts/base.jinja2` - 載入 i18n 系統
- ✅ `backup/static/working.jinja2` - 示範使用 data-i18n 屬性
- ✅ `backup/static/index.jinja2` - 示範使用 data-i18n 屬性

## 🌟 主要特色

### 自動語言偵測
系統會按照以下優先順序自動偵測語言：
1. URL 參數（`?lang=zh-Hant`）
2. localStorage 儲存的使用者偏好
3. 瀏覽器語言（`navigator.language`）
4. 預設為英文

### 智能語言標準化
自動將各種語言代碼標準化：
- `zh-TW`, `zh-HK`, `zh-MO` → `zh-Hant`（繁體中文）
- `zh-CN`, `zh-SG` → `zh-Hans`（簡體中文）
- `en-US`, `en-GB` → `en`（英文）

### 語言選擇器
頁面右上角提供語言切換下拉選單：
- 🇬🇧 English
- 🇹🇼 繁體中文
- 🇨🇳 简体中文（待完成）

### 與現有系統整合
- ✅ 與 moment.js 整合，自動切換日期時間格式
- ✅ 與 Materialize CSS 整合
- ✅ 保持與現有功能完全相容

## 📁 檔案結構

```
hassio-google-drive-backup/
├── translations/              # HA 配置介面翻譯
│   ├── en.json
│   └── zh-Hant.json
├── backup/static/
│   ├── layouts/
│   │   └── base.jinja2       # 已更新：載入 i18n 系統
│   ├── index.jinja2          # 已更新：使用 data-i18n
│   ├── working.jinja2        # 已更新：使用 data-i18n
│   └── js/
│       ├── i18n.js           # ✨ 新增：i18n 核心
│       ├── language-selector.js  # ✨ 新增：語言選擇器
│       └── translations/     # ✨ 新增：翻譯資源
│           ├── en.js
│           └── zh-Hant.js
└── I18N_USAGE.md            # ✨ 新增：使用說明文件
```

## 🚀 使用方式

### 對使用者

1. **自動偵測**：開啟頁面時自動偵測並套用您的語言
2. **手動切換**：使用右上角的語言選擇器
3. **URL 參數**：在網址加上 `?lang=zh-Hant` 強制使用特定語言

### 對開發者

#### HTML 中使用（推薦）

```html
<!-- 基本翻譯 -->
<h1 data-i18n="backup.title"></h1>

<!-- 帶參數的翻譯 -->
<span data-i18n="backup.count" data-i18n-params='{"count": 5}'></span>

<!-- Input placeholder -->
<input type="text" data-i18n="backup.name">
```

#### JavaScript 中使用

```javascript
// 基本翻譯
const text = t('backup.title');

// 帶參數
const message = t('backup.count', { count: 5 });

// 更新元素
updateTranslation('#element', 'backup.title');
```

#### 新增翻譯鍵值

1. 編輯 `backup/static/js/translations/en.js`
2. 編輯 `backup/static/js/translations/zh-Hant.js`
3. 確保兩者有相同的鍵值結構

## 📝 已翻譯的內容

### HA 配置介面（100% 完成）
- ✅ 所有配置選項（50+ 項）
- ✅ 說明文字
- ✅ 網路埠號描述

### Web UI 介面（已建立基礎架構）
- ✅ 常用操作（是/否、確定/取消等）
- ✅ 導航選單
- ✅ 備份相關功能
- ✅ 來源顯示
- ✅ 驗證流程
- ✅ 設定頁面
- ✅ 錯誤訊息
- ✅ 通知訊息
- ✅ 時間顯示

### 示範頁面
- ✅ `working.jinja2`：備份統計、錯誤報告卡片
- ✅ `index.jinja2`：開始使用、驗證按鈕

## 🔧 技術細節

### i18n 系統特點
- **輕量級**：無外部依賴（約 200 行程式碼）
- **效能**：翻譯資料快取在記憶體中
- **彈性**：支援嵌套鍵值和參數插值
- **回退機制**：缺少翻譯時自動回退到英文
- **事件驅動**：語言切換時觸發 `languageChanged` 事件

### 瀏覽器相容性
- ✅ Chrome/Edge（最新版）
- ✅ Firefox（最新版）
- ✅ Safari（最新版）
- ✅ 使用 ES6+ 語法

## 📚 文件

- **使用說明**：[I18N_USAGE.md](./I18N_USAGE.md)
- **範例**：查看已更新的 `.jinja2` 文件

## 🎯 下一步建議

### 優先項目
1. [ ] 完成所有 HTML 頁面的翻譯標記
2. [ ] 翻譯所有 JavaScript 動態生成的訊息
3. [ ] 新增簡體中文翻譯（`zh-Hans.js` 和 `zh-Hans.json`）
4. [ ] 測試所有頁面的翻譯完整性

### 進階功能
5. [ ] 整合 HA Supervisor API 獲取系統語言設定
6. [ ] 新增更多語言（德語、法語、西班牙語等）
7. [ ] 建立翻譯貢獻指南
8. [ ] 設定 CI/CD 自動檢查翻譯完整性

## ⚠️ 注意事項

1. **頁面重新載入**：切換語言後會重新載入頁面（確保所有元素正確翻譯）
2. **快取**：翻譯選擇會保存在 `localStorage` 中
3. **回退**：所有翻譯都有英文回退，不會出現空白
4. **一致性**：確保所有語言的鍵值結構相同

## 🐛 疑難排解

### 翻譯沒有顯示？
```javascript
// 在瀏覽器控制台執行
console.log(window.i18n.getLocale());      // 檢查當前語言
console.log(window.i18n.translations);     // 檢查翻譯資料
```

### 語言選擇器沒有出現？
檢查 `backup/static/layouts/base.jinja2` 是否正確載入：
- `i18n.js`
- `translations/en.js`
- `translations/zh-Hant.js`
- `language-selector.js`

### 測試特定語言
在 URL 加上：`?lang=zh-Hant`

## 👥 貢獻

歡迎貢獻翻譯！請參考 `I18N_USAGE.md` 了解如何新增或改進翻譯。

## 📄 授權

與原專案相同授權。

---

**實作日期**：2026-02-28  
**版本**：1.0.0  
**狀態**：✅ 基礎架構完成，可開始全面翻譯
