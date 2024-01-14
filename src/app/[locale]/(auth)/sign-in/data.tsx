'use client'
import { usePing } from '@/services'

export default function Data() {
  const { data } = usePing()
  console.log('data: ', data)
  return (
    <div />
  )
}