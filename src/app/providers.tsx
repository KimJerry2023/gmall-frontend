'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from '@/components/layout'

export const Providers = ({ children }: { children: React.ReactNode}) => {
  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <Layout>
          {children}
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
