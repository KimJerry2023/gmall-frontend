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
