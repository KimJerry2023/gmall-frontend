'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Layout } from '@/components/layout'

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
