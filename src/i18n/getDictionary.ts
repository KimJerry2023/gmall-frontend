import 'server-only'
import type { Locale } from './config'
import enJson from '@/i18n/locales/en.json' assert { type: 'json' }
import zhCNJson from '@/i18n/locales/zh-CN.json' assert { type: 'json' }

const dictionaries = {
  en: () => enJson,
  'zh-CN': () => zhCNJson
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]();