import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className = 'flex items-center justify-center mt-2'>
            <MotionLink href= "/" 
            className = 'w-16 h-16 bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center rounded-full text-2x1 font-bold border border-solid border-transparent dark:border-light'
            whileHover={{
                transition:{duration:0.2},
                scale:1.2,
            }}
            >KG</MotionLink>
        </div>
    )
}

export default Logo