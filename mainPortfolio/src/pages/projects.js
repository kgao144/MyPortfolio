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

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[104%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'/>

            <Link href={link} target="_blank" className='w-full h-full cursor-pointer overflow-hidden rounded-3xl '>
                <FramerImage 
                src={img} 
                alt={title} 
                className='w-full h-auto rounded-3xl p-2'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 py-3'>
                <span className='text-blue-700 dark:text-[#64dbff] font-semibold text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-large text-xl font-semibold text-dark/75 dark:text-light/75'>Project Summary:</p>
                <p className='my-2 mr-6 font-large text-xl text-dark dark:text-light'>{summary}</p>
                
                <div className='flex items-center mt-5 pt-1'>
                    <motion.div
                    whileHover = {{y:-6}}
                    >
                        <Link href={github} target="_blank" className=' dark:bg-light rounded-full dark:text-light'>
                            <GlowGithub />
                        </Link>
                    </motion.div>
                    
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark border border-solid border-dark hover:bg-light hover:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light p-2 px-6 text-lg font-semibold'>
                        Visit the Project!
                    </Link>
                </div>

            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return (
        <article className='w-full h-[90%] flex flex-col item-end justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[99%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>

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

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-blue-700 dark:text-[#64dbff] font-semibold text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='mt-4 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
                </Link>
                
                <div className='w-full flex items-center mt-5 justify-between dark:text-light'>
                    <Link href={link} target="_blank" className='pr-6 text-lg font-semibold '>
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
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:bg-[#2c2c2c]'>
        <AnimatedText text="Projects and Endeavors!" className='my-3'/>
            <Layout className='pt-16'>
                
                <div className='grid grid-col-12 gap-24'>
                    <div className='col-span-12 mb-20'>
                        <FeaturedProject 
                        title="Online Portfolio"
                        img={portfolio}
                        summary="This project is to add onto my resume to show what I've worked on and have been exposed to. The project was designed and developed to be a visually appealing online portfolio while showcasing my web development skills."
                        link="/"
                        github="/"
                        type="Featured Project"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                        title="Online Portfolio"
                        img={portfolio}
                        link="/"
                        github="/"
                        type="Web Application"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                        title="Capstone Project: Digital Twin"
                        img={ueplane}
                        link="/"
                        github="/"
                        type="Research & Develop: Simulink & Unreal Engine 5 Communication"
                        />
                    </div>
                    
                    <div className='col-span-6'>
                        <Project 
                        title="Modified Eliza Chatbot"
                        img={eliza}
                        link="/"
                        github="/"
                        type="Python Application"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                        title="Placeholder Title"
                        img={placeholder}
                        link="/"
                        github="/"
                        type="Placeholder type"
                        />
                    </div>

                </div>
                
            </Layout>
        </main>
        </>
    )
}

export default projects