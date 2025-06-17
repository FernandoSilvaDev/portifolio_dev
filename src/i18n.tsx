import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './locales/en.json'
import ptTranslation from './locales/pt.json'

i18n.use(initReactI18next).init({
  lng: 'en', // Definir linguagem inicial
  fallbackLng: 'pt', // Caso outra linguagem não funcione
  resources: {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation }
  },
  interpolation: {
    escapeValue: false // Evitar a necessidade de escapar essa sequência em traduções
  }
})

export default i18n
