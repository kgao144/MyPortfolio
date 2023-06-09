import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import {SiNextdotjs} from 'react-icons/si';

const Footer = () => {
    return (
        <footer className='w-full bg-light border-t border-solid border-dark dark:border-light dark:bg-dark font-medium text-lg shadow-inner'>
            <Layout className='py-8 flex items-center justify-between'>
                <span className='dark:text-light'> 
                    {new Date().getFullYear()} &copy; 
                    All Rights Reserved.
                </span>
                
                <div className='flex items-center dark:text-light'>
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