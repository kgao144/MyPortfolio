import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import {SiNextdotjs} from 'react-icons/si';

const Footer = () => {
    return (
        <footer className='w-full font-medium text-lg shadow-inner
        border-t border-solid border-dark dark:border-light
        bg-light dark:bg-dark 
        sm:text-base
        xs:text-sm'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 xl:py-7 xs:flex-col md:py-5 sm:py-4 xs:py-4'>
                <span className='dark:text-light'> 
                    {new Date().getFullYear()} &copy; 
                    All Rights Reserved.
                </span>
                
                <div className='flex items-center dark:text-light lg:py-2'>
                    <Link href="https://nextjs.org/">
                        Built With
                    </Link>
                    <span 
                        className='text-color:black text-2xl px-3 dark:text-light'>
                        <Link href="https://nextjs.org/">
                            <SiNextdotjs />
                        </Link>
                    </span>
                    <Link 
                        href="/" 
                        className='underline underline-offset-2 dark:text-light'>
                        By Kevin Gao
                    </Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer