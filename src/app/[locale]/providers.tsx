'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Layout } from '@/components/layout'

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider defaultTheme="system" attribute="class">
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
