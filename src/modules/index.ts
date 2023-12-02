export const ping = {
    index: '/ping'
} as const
export const values = Object.values(ping)
export type PingPerms = typeof values[number]
export default PingPerms
