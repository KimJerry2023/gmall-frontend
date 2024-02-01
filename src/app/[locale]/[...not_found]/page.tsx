import NotFound from "@/components/NotFound";
import type { Locale } from '@/i18n/config'
import { getDictionary } from "@/i18n/getDictionary";
// import TranslationsProvider from '@/components/Language/TranslationsProvider';

// const i18nNamespaces = ['home'];

export default async function NotFoundCatchAll({ params: { locale } }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(locale)

  return (
    <NotFound {...dictionary} />
  )
}