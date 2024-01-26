import { useQuery } from "@tanstack/react-query";
import { http } from '@/utils/request'

export const getPing = async () => {
  const res = await http({
    method: 'get',
    url: '/ping'
  })
  return res
}

export const usePing = () => {
  return useQuery({
    queryKey: ['ping'],
    queryFn: () => getPing()
  })
}

export const getSales = async () => {
  const res = await http({
    method: 'get',
    url: '/sales'
  })
  return res
}

export const useSales = () => {
  return useQuery({
    queryKey: ['sales'],
    queryFn: () => getSales()
  })
}

export const getDaySales = async () => {
  const res = await http({
    method: 'get',
    url: '/day/sales'
  })
  return res
}

export const useDaySales = () => {
  return useQuery({
    queryKey: ['day_sales'],
    queryFn: () => getDaySales()
  })
}