
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { LinkArrow } from '@/components/Icons';
import dev0 from "../../public/images/profile/dev0.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin's Portfolio | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center bg-light dark:bg-dark dark:border-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
        

          <div className="flex items-center justify-center w-full lg:flex-col">
            <div className='w-1/2 flex flex-col items-center self-center mx-20 lg:w-full lg:text-center'>
              <AnimatedText 
              text="Hello and Welcome to my portfolio!" 
              className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-2xl '/>
              
              <p className='my-4 text-xl font-medium pr-5 md:text-lg sm:text-md xs:text-sm'>
                My name is Kevin Gao and I am a passionate university graduate who is eager to contribute to a software engineering environment. 
                Feel free to explore my portfolio and check out my resume. 
                <br></br>
                <br></br>
                If you're curious of the pictures on the portfolio were made using a Stable Diffusion image generation model!
              </p>
              
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link 
                  href="/KGaoResume2023.pdf" 
                  target={"_blank"} 
                  className="flex items-center
                  p-2.5 px-6 rounded-lg text-lg font-semibold 
                  border-2 border-solid border-transpartent 
                  hover:border-dark dark:hover:border-light
                  bg-dark text-light dark:bg-light dark:text-dark 
                  hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light 
                  md:p-2 md:px-4 md:text-base
                  sm:p-1 sm:px-2 sm:text-base
                  
                  "
                  download={true}>
                  Resume
                  <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                
              </div>
            </div>

            <div className='pt-10 w-1/2 md:w=full items-center '>
              <Image 
              src={dev0} 
              alt="main portfolio picture" 
              className='w-full h-auto rounded-full md:inline-block md:w-full '
              priority 
              sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
          </div>

          <HireMe />

        </Layout>
      </main>
    </>
  )
}
