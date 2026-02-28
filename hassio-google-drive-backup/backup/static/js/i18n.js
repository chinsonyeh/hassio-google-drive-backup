/**
 * Simple i18n (internationalization) system for the web UI
 * Supports automatic language detection from:
 * 1. Browser language (navigator.language)
 * 2. URL parameter (?lang=zh-Hant)
 * 3. localStorage preference
 */

class I18n {
  constructor() {
    this.currentLocale = 'en';
    this.translations = {};
    this.fallbackLocale = 'en';
    this.supportedLocales = ['en', 'zh-Hant', 'zh-Hans'];
    
    // Initialize
    this.detectLanguage();
  }

  /**
   * Detect the user's preferred language
   */
  detectLanguage() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    if (urlLang && this.supportedLocales.includes(urlLang)) {
      this.setLocale(urlLang);
      return;
    }

    // Check localStorage
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang && this.supportedLocales.includes(savedLang)) {
      this.setLocale(savedLang);
      return;
    }

    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const locale = this.normalizeLang(browserLang);
    
    if (this.supportedLocales.includes(locale)) {
      this.setLocale(locale);
    } else {
      this.setLocale(this.fallbackLocale);
    }
  }

  /**
   * Normalize language codes
   * zh-TW, zh-Hant-TW -> zh-Hant
   * zh-CN, zh-Hans-CN -> zh-Hans
   * en-US -> en
   */
  normalizeLang(lang) {
    if (!lang) return this.fallbackLocale;
    
    lang = lang.toLowerCase();
    
    // Handle Traditional Chinese
    if (lang.includes('zh-tw') || lang.includes('zh-hant') || lang === 'zh-mo' || lang === 'zh-hk') {
      return 'zh-Hant';
    }
    
    // Handle Simplified Chinese
    if (lang.includes('zh-cn') || lang.includes('zh-hans') || lang === 'zh-sg') {
      return 'zh-Hans';
    }
    
    // Handle other languages - just take the first part
    const parts = lang.split('-');
    return parts[0];
  }

  /**
   * Set current locale and save preference
   */
  setLocale(locale) {
    if (!this.supportedLocales.includes(locale)) {
      console.warn(`Locale ${locale} not supported, falling back to ${this.fallbackLocale}`);
      locale = this.fallbackLocale;
    }
    
    this.currentLocale = locale;
    localStorage.setItem('preferred_language', locale);
    
    // Update HTML lang attribute
    document.documentElement.lang = locale;
    
    // Trigger custom event for components that need to react to language change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { locale } }));
  }

  /**
   * Load translation data
   */
  loadTranslations(locale, data) {
    this.translations[locale] = data;
  }

  /**
   * Get translated string
   * @param {string} key - Translation key (supports dot notation: 'backup.create')
   * @param {object} params - Parameters to interpolate into the string
   * @returns {string} Translated string
   */
  t(key, params = {}) {
    let translation = this.getTranslation(key, this.currentLocale);
    
    // Fallback to default locale if translation not found
    if (translation === key && this.currentLocale !== this.fallbackLocale) {
      translation = this.getTranslation(key, this.fallbackLocale);
    }
    
    // Interpolate parameters
    return this.interpolate(translation, params);
  }

  /**
   * Get translation from data
   */
  getTranslation(key, locale) {
    const keys = key.split('.');
    let value = this.translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  }

  /**
   * Interpolate parameters into string
   * Example: t('hello.world', {name: 'John'}) with "Hello {name}!" -> "Hello John!"
   */
  interpolate(str, params) {
    return str.replace(/\{(\w+)\}/g, (match, key) => {
      return params.hasOwnProperty(key) ? params[key] : match;
    });
  }

  /**
   * Get current locale
   */
  getLocale() {
    return this.currentLocale;
  }

  /**
   * Get list of supported locales with their display names
   */
  getSupportedLocales() {
    return [
      { code: 'en', name: 'English' },
      { code: 'zh-Hant', name: '繁體中文' },
      { code: 'zh-Hans', name: '简体中文' }
    ];
  }

  /**
   * Translate all elements with data-i18n attribute
   * Usage in HTML: <span data-i18n="backup.create"></span>
   * With params: <span data-i18n="backup.count" data-i18n-params='{"count": 5}'></span>
   */
  translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const paramsStr = element.getAttribute('data-i18n-params');
      const params = paramsStr ? JSON.parse(paramsStr) : {};
      
      const translation = this.t(key, params);
      
      // Update text or placeholder depending on element type
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.getAttribute('placeholder') !== null) {
          element.placeholder = translation;
        } else {
          element.value = translation;
        }
      } else {
        element.textContent = translation;
      }
    });
  }
}

// Create global instance
window.i18n = new I18n();

// Auto-translate when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.i18n.translatePage();
  });
} else {
  window.i18n.translatePage();
}

// Re-translate on language change
window.addEventListener('languageChanged', () => {
  window.i18n.translatePage();
});
