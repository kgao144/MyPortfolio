import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {TwitterIcon, GithubIcon, DribbbleIcon, LinkedInIcon, PinterestIcon, MoonIcon, SunIcon, GlowGithub, RoundLinkedIn, CircularText} from './Icons'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {motion} from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';


const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    console.log(router);
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    console.log(router);
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`
            h-[2px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className = 'w-full px-32 pt-6 pb-8 font-medium flex items-center justify-between border-b-2 border-solid dark:text-light relative z-10 lg:px-16 md:px-12 sm:px8'>
            
            
            <button className='flex-col items-center justify-center mt-1 hidden lg:flex py-4 rounded-full bg-white dark:bg-dark' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-1 w-7 rounded-sm -translate-y-1 ${isOpen ? 'w-8 rotate-45 -translate-y-0' : '-translate-y-1'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-1 w-7 rounded-sm translate-y-1 -my-1 ${isOpen ? 'translate-x-4 opacity-0' : 'translate-x-1 opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-1 w-7 rounded-sm translate-y-3 ${isOpen ? 'w-8 -rotate-45 -translate-y-0' : 'translate-y-1'}`}></span>
            </button>


            <div className='w-full flex items-center justify-between lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4 font-large text-lg'/>
                    <CustomLink href="/about" title="About" className='mx-4 font-large text-lg'/>
                    <CustomLink href="/projects" title="Projects" className='mx-4 font-large text-lg'/>
                    <CustomLink href="mailto:kevin.gao144@gmail.com" title="Contact" className='ml-4 font-large text-lg'/>
                </nav>

                <nav className = "flex items-center justify-center flex-wrap">
                    <motion.a href="https://github.com/kgao144" target= {"_blank"}
                    whileHover = {{y:-5}}
                    whileTap = {{scale:0.5}}
                    className = "w-11 mx-2 bg-dark text-white border border-white dark:border-transparent rounded-full"
                    >
                        <div>
                            <GithubIcon />
                        </div>
                    </motion.a>

                    <motion.a href="https://www.linkedin.com/in/kevingao144/" target= {"_blank"}
                    whileHover = {{y:-5}}
                    whileTap= {{scale:0.5}}
                    className = "w-11 mx-2 border-2 border-dark text-white dark:bg-light dark:text-dark rounded-full"
                    >
                        <div className='-translate-x-0.5'>
                            <RoundLinkedIn />
                        </div>
                    </motion.a>

                    

                    <button onClick ={() => setMode(mode === "light" ? "dark" : "light") }
                    className={`ml-4 flex items-center justify-center rounded-full p-1 
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}>
                        {
                            mode === "dark" ?
                            <SunIcon className={"fill-dark"} /> 
                            : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>
            

            {
                isOpen ?
                <motion.div 
                initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                animate={{scale:1, opacity:1}}
                transition={{ease: "linear", duration:0.3}}
                className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink href="/" title="Home" toggle={handleClick}/>
                        <CustomMobileLink href="/about" title="About" toggle={handleClick}/>
                        <CustomMobileLink href="/projects" title="Projects" toggle={handleClick}/>
                        <CustomMobileLink href="mailto:kevin.gao144@gmail.com" title="Contact" toggle={handleClick}/>
                    </nav>

                    <nav className = "flex items-center justify-center flex-wrap mt-2 pr-2">
                        <motion.a href="https://github.com/kgao144" target= {"_blank"}
                        whileHover = {{y:-5}}
                        whileTap = {{scale:0.5}}
                        className = "w-10 mx-2 rounded-full sm:mx-1"
                        >
                            <div className='rounded-full bg-dark dark:bg-light text-light dark:text-dark'>
                                <GithubIcon />
                            </div>
                        </motion.a>

                        <motion.a href="https://www.linkedin.com/in/kevingao144/" target= {"_blank"}
                        whileHover = {{y:-5}}
                        whileTap= {{scale:0.5}}
                        className = "w-10 mx-2 bg-light rounded-full sm:mx-1"
                        >
                            <div className=' -translate-x-[2px]'>
                                <RoundLinkedIn />
                            </div>
                        </motion.a>

                        
                        <button onClick ={() => setMode(mode === "light" ? "dark" : "light") }
                        className={`ml-3 flex items-center justify-center rounded-full p-2 sm:mx-1
                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                        `}>
                            {
                                mode === "dark" ?
                                <SunIcon className={"fill-dark"} /> 
                                : <MoonIcon className={"fill-dark"} />
                            }
                        </button>
                    </nav>
                </motion.div>

            : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50px]'>
                <Logo/>
            </div>

        </header>
    )
}

export default NavBar