import "@/styles/global.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { dir } from 'i18next'
import i18nConfig from "@/i18nConfig";
import { Providers } from "./providers";

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }))
}

export const metadata: Metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

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
      <head>
        <ColorSchemeScript />
      </head>
      <body className="dark" suppressHydrationWarning>
        <Providers>
          <MantineProvider>{children}</MantineProvider>
        </Providers>
      </body>
    </html>
  )
}