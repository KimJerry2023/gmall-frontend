import "@/styles/global.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { i18n } from "@/i18n/config";
import { Providers } from "./providers";

export function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale }))
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
    <html lang={locale} className="dark" suppressHydrationWarning>
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