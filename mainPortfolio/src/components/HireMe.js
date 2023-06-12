import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'


const HireMe = () => {
    return (
        <div className='fixed flex items-center justify-center overflow-hidden 
        left-2 bottom-[100px] 
        xl:left-auto xl:right-5 xl:top-20 xl:bottom-auto xl:pt-10
        lg:bottom-0 lg:top-auto lg:absolute lg:pt-10
        md:left-4 md:right-auto md:bottom-20 md:top-auto 
        sm:hidden
        '>
            <div className='w-48 h-48 flex items-center justify-center relative '>
                <CircularText className="fill-dark dark:fill-light text-dark dark:text-light " />
                <Link
                    href="mailto:kevin.gao144@gmail.com" 
                    className='flex items-center justify-center 
                    w-20 h-20 font-semibold shadow-2xl 
                    absolute left-1/2 top-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    border border-solid rounded-full border-dark dark:border-light
                    bg-dark text-light dark:bg-light dark:text-dark 
                    hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light
                    '>
                    Hire Me
                </Link>
            </div>    
        </div>
    )
}

export default HireMe