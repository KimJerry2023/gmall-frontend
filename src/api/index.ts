import { request } from '@/utils/request'

export async function getPing() {
    return request({
        url: '/ping',
        method: 'get'
    })
}