import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-xl font-bold '>Hello!</h1>  
      
    </main>
  )
}

// "use client";

// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
// import { gql } from "@apollo/client";

// const query = gql`query Now {
//   now
// }`;

// export default function Page() {
//   const { data } = useSuspenseQuery(query);

//   return <main>{data.now}</main>;
// }