import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    resources: {
      pt: {
        translation: {
          welcome: 'Bem-vindo à Get Imobiliários e Serviços',
          language: 'Idioma',
          search: 'Buscar',
          properties: 'Imóveis',
          contact: 'Contato',
          about: 'Sobre Nós'
        }
      },
      en: {
        translation: {
          welcome: 'Welcome to Get Imobiliários e Serviços',
          language: 'Language',
          search: 'Search',
          properties: 'Properties',
          contact: 'Contact',
          about: 'About Us'
        }
      }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;