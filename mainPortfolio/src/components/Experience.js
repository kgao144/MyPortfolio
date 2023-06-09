import {React, useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            translation={{duration:0.6, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl dark:text-light'>
                    {position}&nbsp;<a href={companyLink} target="_blank" className='text-[#005bb1] dark:text-[#64dbff] capitalize'>@ {company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full dark:text-light'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}


const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className='bg-light dark:bg-dark'>
            <h2 className='font-bold text-8xl my-8 w-full text-center dark:text-light'>Experience</h2>
        
            <div ref={ref} className='w-[65%] mx-auto relative'>

                <motion.div 
                    style = {{scaleY: scrollYProgress}}
                    className = 'absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top '/>
                    
                
                <ul className='w-full flex flex-col my-10 items-start justify-between ml-4'>
                    <Details
                    position="Job Title"
                    company="Company Name"
                    time="Start - End/Present"
                    companyLink="https://google.com"
                    address="Location"
                    work="Work Description"
                    />
                </ul>

                <ul className='w-full flex flex-col my-10 items-start justify-between ml-4'>
                    <Details
                    position="Cashier / Server"
                    company="Southern Crab House"
                    time="Nov 2022 - Present"
                    companyLink=""
                    address="468 South Main St, Statesboro, GA 30458"
                    work="Work Description"
                    />
                </ul>

                <ul className='w-full flex flex-col my-10 items-start justify-between ml-4'>
                    <Details
                    position="Cashier / Server"
                    company="Linda's Seafood Market"
                    time="Jan 2018 - Jan 2022"
                    companyLink=""
                    address="1241 Wheaton St, Savannah, GA 31404"
                    work="Work Description"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience