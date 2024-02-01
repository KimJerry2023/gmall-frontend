'use client'
import { ProjectsTable } from '@/components'
import { useSales } from '@/services'

export default function Task() {
  const { data, isError, isLoading } = useSales()
  return (
    <ProjectsTable
      data={data?.slice(0, 6)}
      isError={isError}
      loading={isLoading}
    />
  )
}
