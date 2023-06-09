import React from 'react'
import { CircularText, CircularText1 } from './Icons'
import Link from 'next/link'


const HireMe = () => {
    return (
        <div className='fixed left-2 bottom-0 flex items-center justify-center overflow-hidden'>
            <div className='w-48 h-81 flex items-center justify-center relative'>
                <CircularText className={"fill-dark dark:fill-light"} />
                <Link
                    href="mailto:kevin.gao144@gmail.com" 
                    className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:bg-light dark:text-dark shadow-2xl border border-solid border-dark dark:border-light w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light'>
                    Hire Me
                </Link>
            </div>    
        </div>
    )
}

export default HireMe