import "@/styles/global.css";
import { dir } from 'i18next'
import i18nConfig from "@/i18nConfig";
import { Providers } from "./providers";

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode,
  params: { locale: string }
  }>) {
  return (
    <html lang={locale} dir={dir(locale)} className="dark" suppressHydrationWarning>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <head />
      <body className="dark" suppressHydrationWarning>
        <Providers>
          {children}
       </Providers>
      </body>
    </html>
  )
}