import en from '../lang/en-US.js';
import cn from '../lang/zh-CN.js';

export const API_ROOT = 'https://jsonplaceholder.typicode.com/';

export const I18N = {
  defaultLocale: 'en',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'my_custom_cookie_name'
  },
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'cn',
      iso: 'zh-CN',
      name: '中文'
    }
  ],
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en,
      cn
    }
  }
};
