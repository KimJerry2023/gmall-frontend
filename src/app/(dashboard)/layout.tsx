'use client'
import { Layout } from '@/components/layout'

const dashboardLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <Layout>
      {children}
    </Layout>
  )
}
export default dashboardLayout
