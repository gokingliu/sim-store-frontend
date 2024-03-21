import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './modules/resources';

const defaultLng = localStorage.getItem('i18nextLng') || 'zh';

i18n
  // 检测用户当前使用的语言
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 所有配置选项: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    resources,
    fallbackLng: defaultLng,
    lng: defaultLng,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
