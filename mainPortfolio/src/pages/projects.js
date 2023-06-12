import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import ProjectModals from '@/components/ProjectModals'
import { GithubIcon, GlowGithub} from '@/components/Icons'

import portfolio from '../../public/images/projects/portfoliomain.png'
import ElizaMain from '../../public/images/projects/eliza.png'
import Placeholder from '../../public/images/projects/placeholder.png'
import Ueplane from '../../public/images/projects/ueplane.png'
import basicMATLAB from '../../public/images/projects/basicMATLABModel.png'
import simulinkModel from '../../public/images/projects/basicSimulinkModel.png'
import basicSimulink from '../../public/images/projects/simulinkSender.png'
import UDPReceiverBlueprint from '../../public/images/projects/UDPReceiverBlueprint.png'
import eshow1 from '../../public/images/projects/eshow1.png'
import eshow2 from '../../public/images/projects/eshow2.png'
import eshow3 from '../../public/images/projects/eshow3.png'
import eshow4 from '../../public/images/projects/eshow4.png'

import pshow1 from '../../public/images/projects/pshow1.png'
import pshow2 from '../../public/images/projects/pshow2.png'
import pshow3 from '../../public/images/projects/pshow3.png'
import pshow4 from '../../public/images/projects/pshow4.png'






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

const Project = ({type, title, img, link, github, img1, img2, img3, img4, desc, time}) => {
    return (
        <article className='w-full h-[90%] flex flex-col item-end justify-center 
        rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative
        
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[99%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl
            xs:rounded-[1.5rem]'/>

            <div className='w-full h-[75%] cursor-pointer overflow-hidden rounded-3xl'>
                <FramerImage 
                src={img} 
                alt={title} 
                className='w-full h-auto rounded-3xl p-2 '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>

            <div className='w-full flex flex-col items-start justify-between mt-4 md:mt-2'>
                <span className='text-blue-700 dark:text-[#64dbff] font-semibold text-xl lg:text-lg md:text-sm mt-3'>{type}</span>
                
                
                <div className='w-full grid grid-cols-12 items-center justify-between dark:text-light'>

                    <h2 className='col-span-12 my-4 flex w-full text-left text-3xl font-bold dark:text-light lg:text-2xl md:text-xl md:mt-2'>{title}</h2>
                    <div className='col-span-6 flex '>
                        <ProjectModals 
                        title2={title} type2={type} desc2={desc} time2={time}
                        img12={img1} img22={img2} img32={img3} img42={img4} 
                        />
                    </div>
                    
                    <div className='col-span-6 flex items-end justify-end'>
                        <Link href={github} target="_blank" className='w-8'>
                            <GithubIcon />
                        </Link>
                    </div>
                    
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
        2xl:pl-10 xs:pl-0 lg:!text-7xl sm:mb-3 sm:!text-6xl xs:!text-4xl xs:mx-5'/>
            <Layout className='pt-16 sm:pt-6 lg:pt-8 xl:pt-12 2xl:pt-12'>
                
                <div className='grid grid-col-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0'>
                    <div className='col-span-12 mb-20 xl:mb-10'>
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
                        img={portfolio}
                        link="/projects"
                        github="https://github.com/kgao144/MyPortfolio"

                        title="Online Portfolio"
                        type="Web Application"
                        desc=
                        "The framework & tools used in the creation of this project were Next.js, TailwindCSS, Framer-Motion, as well as other React elements. The goal for this project was to gain familiarity with building simple web applications all while learning from documentation of new tools. NextJS was chosen as the framework because of the ease of deployment with server-rendering capabilities as well as the accessibility to TailwindCSS to obtain visible features fast. Framer-motion was also used to gain more visually pleasing animations for individual components on the portfolio."
                        time='June 2023'
                        img1={pshow1}
                        img2={pshow2}
                        img3={pshow3}
                        img4={pshow4}
                        />
                    </div>

                    <div className='col-span-4 xl:col-span-6 sm:col-span-12'>
                        <Project 
                        img={Ueplane}
                        link="/projects"
                        github="/"
                        title="Digital Twin Project"
                        type="Capstone: Research & Develop"
                        desc=
                        "The goal set for my team was to research and attempt communication between Simulink and Unreal Engine 5 in the preliminary stages of the digital twin project for our client. Prior to this project the main source of communication between the two was through a Mathworks plugin with Unreal Engine 4, but the plugin became outdated when Unreal Engine 5 updated. I was the team lead of four members and acted as a point of communication between my team, professor, and the client. As team lead I was able to guide the team in an AGILE environment where I would host & attend team, class, and virtual standup meetings with the professor and client. My role on the project focused on managing our documentation & Github, creating MATLAB & Simulink models and scripts, and cleaning up Unreal Engine scripts."
                        time='Jan 2023 - April 2023'
                        img1={basicSimulink}
                        img2={simulinkModel}
                        img3={basicMATLAB}
                        img4={UDPReceiverBlueprint}
                        />
                    </div>
                    
                    <div className='col-span-4 xl:col-span-6 sm:col-span-12'>
                        <Project 
                        img={ElizaMain}
                        link="/"
                        github="https://github.com/kgao144/CSCI-4322---Term-Project"

                        title="Modified Eliza Chatbot"
                        type="Python Application"
                        desc="This project was made as a final assignment for my Software Development course. We formed teams in which were assigned to improve upon or modify the Eliza chatbot program. The stated Eliza chatbot is a program that is used to demonstrate human-computer interaction originaly through a terminal. So in order to enhance the original program my team chose to modify and add a portion of the programs responses as well as creating a user interface in the form of a .exe file using Tkinter."
                        time='March 2023 - April 2023'
                        img1={eshow1}       
                        img2={eshow2}
                        img3={eshow3}
                        img4={eshow4}
                        />
                    </div>

                    <div className='col-span-4 xl:col-span-6 sm:col-span-12'>
                        <Project 
                        img={Placeholder}
                        link="/projects"
                        github="/"

                        title="My Next Project!"
                        type="Future Project"
                        desc="Sample Description"
                        time='Present - '
                        img1={Placeholder}
                        img2={Placeholder}
                        img3={Placeholder}
                        img4={Placeholder}
                        />
                    </div>

                </div>
                
                
            </Layout>
        </main>
        </>
    )
}

export default projects