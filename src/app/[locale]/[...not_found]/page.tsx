import NotFound from "@/components/NotFound";
import TranslationsProvider from '@/components/Language/TranslationsProvider';
import initTranslations from "@/app/i18n";

const i18nNamespaces = ['home'];

export default async function NotFoundCatchAll({ params: { locale } }: { params: { locale: string } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}>
        <NotFound />
      </TranslationsProvider>
  )
}