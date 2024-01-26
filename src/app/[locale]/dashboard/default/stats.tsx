'use client'

import { StatsGrid } from "@/components"
import { useDaySales } from "@/services"

export default function StatsList() {
  const { data, isError, isLoading } = useDaySales()
  return (
    <StatsGrid
      data={data}
      loading={isLoading}
      error={isError}
      />
  )
}