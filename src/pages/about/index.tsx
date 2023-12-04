import { useState } from 'react'
import { http } from "@/utils/request";
function About({ data }: any) {
  // const { isLoading, data } = useQuery('ping', getPing)
  const [text, setText] = useState('React')
  return <div>About {data} And {text}</div>;
}

export async function getServerSideProps() {
  const res = await http({
    url: "/ping",
    method: "get",
  });
  console.log("res: ", res);
  return {
    props: { data: res.data },
  };
}
export default About;
