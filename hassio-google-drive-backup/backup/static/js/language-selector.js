/**
 * Language Selector Component
 * Adds a language selector dropdown to the UI
 */

function createLanguageSelector() {
  // Create the language selector HTML
  const selectorHTML = `
    <div id="language-selector" style="position: fixed; top: 10px; right: 10px; z-index: 1000;">
      <select id="language-dropdown" class="browser-default" style="padding: 5px 10px; border-radius: 4px; background: white; border: 1px solid #ddd; cursor: pointer;">
        <option value="en" ${window.i18n.getLocale() === 'en' ? 'selected' : ''}>English</option>
        <option value="zh-Hant" ${window.i18n.getLocale() === 'zh-Hant' ? 'selected' : ''}>繁體中文</option>
        <option value="zh-Hans" ${window.i18n.getLocale() === 'zh-Hans' ? 'selected' : ''}>简体中文</option>
      </select>
    </div>
  `;

  // Add to body when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.insertAdjacentHTML('afterbegin', selectorHTML);
      attachLanguageSelectorEvents();
    });
  } else {
    document.body.insertAdjacentHTML('afterbegin', selectorHTML);
    attachLanguageSelectorEvents();
  }
}

function attachLanguageSelectorEvents() {
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) {
    dropdown.addEventListener('change', (e) => {
      const newLocale = e.target.value;
      window.i18n.setLocale(newLocale);
      
      // Set moment.js locale if available
      if (typeof moment !== 'undefined') {
        const momentLocale = newLocale === 'zh-Hant' ? 'zh-tw' : 
                            newLocale === 'zh-Hans' ? 'zh-cn' : 'en';
        moment.locale(momentLocale);
      }
      
      // Reload page to apply translations everywhere
      // Note: In a more sophisticated app, you'd re-render components instead
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  }
}

// Initialize language selector
createLanguageSelector();

// Helper function to translate text in JavaScript
function t(key, params = {}) {
  return window.i18n.t(key, params);
}

// Helper to update element text with translation
function updateTranslation(element, key, params = {}) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  if (element) {
    element.textContent = t(key, params);
  }
}

// Export for global use
window.t = t;
window.updateTranslation = updateTranslation;
