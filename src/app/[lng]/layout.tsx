import "@/styles/global.css";
import { dir } from 'i18next'
import { languages } from "@/i18n/settings";
import { Providers } from "./providers";

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }: Readonly<{ children: React.ReactNode, params: Record<string, any> }>) {
  return (
    <html lang={lng} dir={dir(lng)} className="dark" suppressHydrationWarning>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
