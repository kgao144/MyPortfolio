import React from 'react'
import {motion} from "framer-motion"
import { Ring } from '@uiball/loaders'



const TransitionEffect = () => {
    return (
        <>

        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light' 
        initial={{x:'100%', width:'100%'}}
        animate={{x:'0%', width:'0%'}}
        transition={{duration:1.1, ease:'easeInOut'}}
        />

        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-dark' 
        initial={{x:'100%', width:'100%'}}
        animate={{x:'0%', width:'0%'}}
        transition={{delay:0.2, duration:1.1, ease:'easeInOut'}}
        />    

        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark/50' 
        initial={{x:'100%', width:'100%'}}
        animate={{x:'0%', width:'0%'}}
        transition={{delay:0.3, duration:1.1, ease:'easeInOut'}}
        />

        </>
    )
}

export default TransitionEffect