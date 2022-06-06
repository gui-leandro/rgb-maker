import type { NextPage } from 'next'
import Head from 'next/head'

import { IoMdColorFilter } from 'react-icons/io';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>I Want RGB</title>
        <meta name="description" content="Generated by Guilherme Leandro Rolim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="
          flex flex-col 
          items-center justify-center 
          bg-[#363940] 
          min-h-screen 
          border px-2"
      >
        <div className="w-full max-w-3xl">
          <h1 className="sm:text-5xl text-3xl text-center text-white font-bold mb-6">
            I Want RGB
          </h1>
          <div 
            className="
              flex 
              items-center
              text-white 
              py-3 px-6 
              rounded-md
              mb-6
              bg-[#44474E]"
          >
            <IoMdColorFilter size={25} className="sm:mr-2" />
            <p className="text-lg font-medium">26/08/2022 - 23:59</p>
          </div>
          <div 
            className="
              flex 
              items-center
              text-white 
              py-3 px-6 
              rounded-md
              mb-6
              bg-[#44474E]"
          >
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
