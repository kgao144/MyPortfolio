import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { GithubIcon, FramerMotionIcon, NextJSIcon, TailwindIcon, GlowGithub} from '@/components/Icons'
import portfolio from '../../public/images/projects/portfoliomain.png'
import eliza from '../../public/images/projects/eliza.png'
import placeholder from '../../public/images/projects/placeholder.png'
import ueplane from '../../public/images/projects/ueplane.png'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        
        <article className='w-full flex items-center justify-between relative shadow-2xl
        rounded-br-2xl rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[104%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl 
            xs:-right-2 lg:h-[102%] xs:rounded-[1.5rem]'/>

            <Link href={link} target="_blank" className='w-full h-full cursor-pointer overflow-hidden rounded-3xl'>
                <FramerImage 
                src={img} 
                alt={title} 
                className='w-full h-auto rounded-3xl p-2'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 py-3 lg:w-full lg:pl-3 lg:pt-6'>
                <span className='text-blue-700 dark:text-[#64dbff] font-semibold text-xl xs:text-base sm:text-lg'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl lg:text-3xl'>{title}</h2>
                </Link>
                <p className='my-2 font-large text-xl font-semibold text-dark/75 dark:text-light/75 lg:text-lg sm:text-md'>Project Summary:</p>
                <p className='my-2 mr-6 font-large text-xl text-dark dark:text-light lg:text-lg lg:my-1 sm:text-md xs:text-sm'>{summary}</p>
                
                <div className='flex items-center mt-5 pt-1'>
                    <motion.div
                    whileHover = {{y:-6}}
                    >
                        <Link href={github} target="_blank" className=' dark:bg-light rounded-full dark:text-light'>
                            <GlowGithub />
                        </Link>
                    </motion.div>
                    
                    <Link href={link} target="_blank" className='ml-4 rounded-lg p-2 px-6 text-lg font-semibold
                    bg-dark text-light dark:bg-light dark:text-dark 
                    border border-solid border-dark 
                    hover:bg-light hover:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light 
                    sm:px-4 sm:text-base
                    '>
                        Visit the Project!
                    </Link>
                </div>

            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return (
        <article className='w-full h-[90%] flex flex-col item-end justify-center 
        rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative
        
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[99%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl
            xs:rounded-[1.5rem]'/>

            <Link href={link} target="_blank" className='w-full h-[75%] cursor-pointer overflow-hidden rounded-3xl'>
                <FramerImage 
                src={img} 
                alt={title} 
                className='w-full h-auto rounded-3xl p-2 '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4 md:mt-2'>
                <span className='text-blue-700 dark:text-[#64dbff] font-semibold text-xl lg:text-lg md:text-sm mt-3'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='mt-4 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl md:text-xl md:mt-2'>{title}</h2>
                </Link>
                
                <div className='w-full flex items-center mt-5 justify-between dark:text-light'>
                    <Link href={link} target="_blank" className='pr-6 text-lg font-semibold lg:text-md md:text-sm'>
                        View
                    </Link>
                    
                    <Link href={github} target="_blank" className='w-8'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title> Kevin's Portfolio | Projects</title>
                <meta name="description" content="any description" />
            </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:bg-[#2c2c2c] lg:mb-8 xl:mb-12 2xl:mb-14'>
        <TransitionEffect />
        <AnimatedText text="Projects and Endeavors!" className='my-3 
        2xl:pl-10 xs:pl-0 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xs:mx-5'/>
            <Layout className='pt-16 xs:pt-6 lg:pt-8 xl:pt-12 2xl:pt-12'>
                
                <div className='grid grid-col-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0'>
                    <div className='col-span-12 mb-20'>
                        <FeaturedProject 
                        title="Online Portfolio"
                        img={portfolio}
                        summary="This project was my first attempt on an online portfolio. It was developed to be visually appealing while showcasing my web development skills."
                        link="/"
                        github="https://github.com/kgao144/MyPortfolio"
                        type="Featured Project"
                        />
                    </div>

                    <div className='col-span-4 xl:col-span-6 sm:col-span-12'>
                        <Project 
                        title="Online Portfolio"
                        img={portfolio}
                        link="/"
                        github="https://github.com/kgao144/MyPortfolio"
                        type="Web Application"
                        />
                    </div>

                    <div className='col-span-4 xl:col-span-6 sm:col-span-12'>
                        <Project 
                        title="Capstone Project: Digital Twin"
                        img={ueplane}
                        link="/"
                        github="/"
                        type="Research & Develop: Simulink & Unreal Engine 5 Communication"
                        />
                    </div>
                    
                    <div className='col-span-4 xl:col-span-6 sm:col-span-12'>
                        <Project 
                        title="Modified Eliza Chatbot"
                        img={eliza}
                        link="/"
                        github="https://github.com/kgao144/CSCI-4322---Term-Project"
                        type="Python Application"
                        />
                    </div>

                    <div className='col-span-4 xl:col-span-6 sm:col-span-12'>
                        <Project 
                        title="My Next Project!"
                        img={placeholder}
                        link="/projects"
                        github="/"
                        type="Future Project"
                        />
                    </div>

                </div>
                
            </Layout>
        </main>
        </>
    )
}

export default projects