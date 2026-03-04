# 多國語言系統使用說明

這個 Home Assistant Google Drive Backup addon 現在支援多國語言！

## 架構概述

### 1. Add-on 配置翻譯（HA 介面）

配置選項的翻譯檔案位於：
- `translations/en.json` - 英文翻譯
- `translations/zh-Hant.json` - 繁體中文翻譯

Home Assistant 會自動根據使用者的語言設定顯示正確的翻譯。

### 2. Web UI 翻譯（前端介面）

#### 檔案結構
```
backup/static/js/
├── i18n.js                      # i18n 核心系統
├── language-selector.js         # 語言選擇器組件
└── translations/
    ├── en.js                    # 英文翻譯資源
    └── zh-Hant.js              # 繁體中文翻譯資源
```

#### 語言偵測優先順序
1. URL 參數（`?lang=zh-Hant`）
2. localStorage 保存的使用者偏好
3. 瀏覽器語言設定（`navigator.language`）
4. 預設語言（英文）

## 使用方法

### 在 HTML 中使用（聲明式）

使用 `data-i18n` 屬性：

```html
<!-- 基本用法 -->
<h1 data-i18n="backup.title"></h1>
<!-- 輸出: "Backups" (en) 或 "備份" (zh-Hant) -->

<!-- 帶參數 -->
<span data-i18n="backup.count" data-i18n-params='{"count": 5}'></span>
<!-- 輸出: "5 backups" (en) 或 "5 個備份" (zh-Hant) -->

<!-- 用於 input placeholder -->
<input type="text" placeholder="" data-i18n="backup.name">
```

### 在 JavaScript 中使用（程式式）

```javascript
// 使用全域 t() 函數
const title = t('backup.title');

// 帶參數
const message = t('backup.count', { count: 5 });

// 更新元素文字
updateTranslation('#my-element', 'backup.title');

// 或直接使用 i18n 物件
const text = window.i18n.t('common.save');
```

### 切換語言

使用者可以透過以下方式切換語言：

1. **使用語言選擇器**：頁面右上角的下拉選單
2. **URL 參數**：在網址後加上 `?lang=zh-Hant`
3. **程式方式**：
   ```javascript
   window.i18n.setLocale('zh-Hant');
   ```

## 新增翻譯

### 1. 新增翻譯鍵值

在 `translations/en.js` 和 `translations/zh-Hant.js` 中新增：

```javascript
// en.js
window.i18n.loadTranslations('en', {
  myFeature: {
    title: 'My Feature',
    description: 'This is {feature} description',
    button: 'Click Me'
  }
});

// zh-Hant.js
window.i18n.loadTranslations('zh-Hant', {
  myFeature: {
    title: '我的功能',
    description: '這是 {feature} 的描述',
    button: '點擊我'
  }
});
```

### 2. 在介面中使用

```html
<h2 data-i18n="myFeature.title"></h2>
<p data-i18n="myFeature.description" data-i18n-params='{"feature": "Demo"}'></p>
<button data-i18n="myFeature.button"></button>
```

## 支援的語言

目前支援：
- `en` - English（英文）
- `zh-Hant` - Traditional Chinese（繁體中文）
- `zh-Hans` - Simplified Chinese（簡體中文，待完成）

## 技術細節

### 語言代碼對應

系統會自動將瀏覽器語言代碼標準化：
- `zh-TW`, `zh-HK`, `zh-MO` → `zh-Hant`
- `zh-CN`, `zh-SG` → `zh-Hans`
- `en-US`, `en-GB` → `en`

### 與 moment.js 整合

切換語言時，系統會自動設定 moment.js 的 locale：
- `zh-Hant` → `zh-tw`
- `zh-Hans` → `zh-cn`
- `en` → `en`

### 本地儲存

使用者選擇的語言會保存在 `localStorage` 中，下次訪問時自動載入。

## 範例

完整的使用範例可參考：
- `backup/static/working.jinja2` - 主要備份頁面
- `backup/static/index.jinja2` - 首次設定頁面
- `backup/static/js/scripts.js` - JavaScript 使用範例

## 貢獻翻譯

歡迎貢獻新的語言翻譯或改進現有翻譯！

1. 複製 `translations/en.json` 或 `translations/en.js`
2. 翻譯所有字串
3. 將新語言代碼加入 `i18n.js` 的 `supportedLocales` 陣列
4. 在 `language-selector.js` 中加入新選項
5. 提交 Pull Request

## 注意事項

- 翻譯鍵值使用點記法（dot notation）：`category.subcategory.key`
- 參數使用大括號：`{paramName}`
- 確保所有語言都有相同的鍵值結構
- 缺少的翻譯會自動回退到英文
- 頁面重新載入後翻譯會自動套用

## 疑難排解

**Q: 翻譯沒有顯示？**
A: 檢查瀏覽器控制台是否有錯誤，確認翻譯檔案已載入。

**Q: 如何除錯翻譯？**
A: 在控制台執行：
```javascript
console.log(window.i18n.getLocale());           // 查看當前語言
console.log(window.i18n.translations);          // 查看所有翻譯
console.log(window.i18n.t('backup.title'));    // 測試特定翻譯
```

**Q: 語言選擇器沒有出現？**
A: 確認 `language-selector.js` 已正確載入，檢查檔案路徑。
