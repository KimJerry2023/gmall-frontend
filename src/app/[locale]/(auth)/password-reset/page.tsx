

import TranslationsProvider from '@/components/Language/TranslationsProvider'
// import LanguageChanger from '@/components/Language/LanguageChange'
import initTranslations from '@/app/i18n'
import Content from './content'


const i18nNamespaces = ['home']

export default async function PasswordReset({
  params: { locale }
}: Readonly<{ params: { locale: string } }>) {
  const { resources, t } = await initTranslations(locale, i18nNamespaces)
  
  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <Content />
    </TranslationsProvider>
  )
}
