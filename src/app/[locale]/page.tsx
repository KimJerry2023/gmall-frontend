import { Link, Snippet, Code } from '@nextui-org/react'
import { button as buttonStyles } from '@nextui-org/theme'
import { Layout } from '@/components/layout'
import TranslationsProvider from '@/components/Language/TranslationsProvider'
import initTranslations from '@/app/i18n'

const i18nNamespaces = ['home']

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      (
      <Layout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center"></div>
          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({
                color: 'primary',
                radius: 'full',
                variant: 'shadow',
              })}
            >
              {t('header')}
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: 'bordered', radius: 'full' })}
            >
              GitHub
            </Link>
          </div>

          <div className="mt-8">
            <Snippet hideSymbol hideCopyButton variant="flat">
              <span>
                Get started by editing <Code color="primary">app/page.tsx</Code>
              </span>
            </Snippet>
          </div>
        </section>
      </Layout>
      );
    </TranslationsProvider>
  )
}
export default Home
