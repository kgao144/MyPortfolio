import React from 'react';
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

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className = 'w-full px-32 pt-6 pb-8 font-medium flex items-center justify-between border-b-2 border-solid dark:text-light'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4 font-large text-lg'/>
                <CustomLink href="/about" title="About" className='mx-4 font-large text-lg'/>
                <CustomLink href="/projects" title="Projects" className='mx-4 font-large text-lg'/>
                <CustomLink href="mailto:kevin.gao144@gmail.com" title="Contact" className='ml-4 font-large text-lg'/>
            </nav>
            
            <div className='relative-left-[50%] top-2 translate-x-[-100px]'>
                <Logo/>
            </div>

            <nav className = "flex items-center justify-center flex-wrap">
                <motion.a href="https://github.com/kgao144" target= {"_blank"}
                whileHover = {{y:-5}}
                whileTap = {{scale:0.5}}
                className = "w-10 mx-2 bg-white rounded-full"
                >
                    <div>
                        <GlowGithub />
                    </div>
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/kevingao144/" target= {"_blank"}
                whileHover = {{y:-5}}
                whileTap= {{scale:0.5}}
                className = "w-10 mx-2 bg-white border-2 border-solid border-white  rounded-xl"
                >
                    <div className='w-[90%] translate-x-0.5'>
                        <LinkedInIcon />
                    </div>
                </motion.a>

                

                <button onClick ={() => setMode(mode === "light" ? "dark" : "light") }
                className={`ml-10 flex items-center justify-center rounded-full p-1 
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}>
                    {
                        mode === "dark" ?
                        <SunIcon className={"fill-dark"} /> 
                        : <MoonIcon className={"fill-dark"} />
                    }
                </button>
            </nav>

            
        </header>
    )
}

export default NavBar