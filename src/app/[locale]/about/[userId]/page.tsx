export default function Page({
  params,
} : {
  params: { userId: string }
}) {
  return <div>User Id: {params.userId}</div>
}