import { request } from '@/utils/request'

export function getPing() {
    return request({
        url: '/ping',
        method: 'get'
    })
}