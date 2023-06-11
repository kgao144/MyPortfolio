import {React, useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({type, time, place, college, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between lg:w-[90%]'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            translation={{duration:0.6, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl dark:text-light sm:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm'>
                    {time} | {place} 
                    <br></br>
                    {college}
                </span>
                <br></br><br className='xs:hidden'></br>

                <p className='font-large w-full dark:text-light md:text-md sm:hidden'>Relevant Course Work:</p>
                <p className='font-medium w-full dark:text-light lg:text-sm md:text-sm sm:hidden'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}


const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className=''>
            <h2 className='font-bold text-8xl my-8 w-full text-center dark:text-light md:text-6xl md:mt-10 lg:text-7xl sm:text-4xl xs:mb-0 '>Education</h2>
            <div ref={ref} className='w-[65%] mx-auto relative'>

                <motion.div 
                    style = {{scaleY: scrollYProgress}}
                    className = 'absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top lg:-left-11'>
                </motion.div>
                    

                <ul className='w-full flex flex-col my-10 items-start justify-between ml-4 xs:my-5 lg:ml-0'>
                    <Details
                    type="Bachelor of Science in Computer Science"
                    time="2020-2023"
                    place="Georgia Southern University"
                    college="College of Engineering and Computing"
                    info="Discrete Mathematics, Data Structures, Database Systems, Intro to Software Engineering, Software Testing & QA, Distributed Web Systems Design, Data Communication & Networking, Computer Security"
                    />
                </ul>

                <ul className='w-full flex flex-col my-10 pt-10 items-start justify-between ml-4 xs:my-5 lg:ml-0 xl:pt-0'>
                    <Details
                    type="Bachelor of Science in Mechanical Engineering"
                    time="2016-2020"
                    place="Georgia Southern University"
                    college="College of Engineering and Computing"
                    info="Computing in Mechanical Engineering, Solid Modeling & Finite Element Analysis, Materials Science, Dynamics & Fluid Mechanics, Electrical & Circuit Analysis, Thermodynamics & Heat Transfer"
                    />
                </ul>

            </div>
        </div>
    )
}

export default Education