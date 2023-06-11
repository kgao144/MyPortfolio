import React from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import growth from "../../public/images/assets/studying.png";

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex w-[13%] h-[15%] items-center justify-center rounded-3xl font-semibold text-lg
            bg-dark text-light dark:bg-light/95 dark:text-dark py-3 px-6 my-8 shadow-dark cursor-pointer absolute
            2xl:h-[12%] 2xl:text-md 
            xl:h-[10%] xl:text-base 
            lg:h-[6%] lg:w-[15%] lg:text-sm
            md:h-[4%] md:text-xs 
            sm:w-[17%]
            '
            whileHover={{scale:1.1}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={{duration:0.5}}
            viewport={{once: true}}
            >
            {name}
        </motion.div>
        
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mb-10 mt-12 w-full text-center dark:text-light md:text-6xl md:mt-10 lg:text-7xl sm:text-4xl xs:mb-0 '>
                Skills
            </h2>
            <div className="flex grid-cols-4 gap-x-20 pl-20 items-center justify-between xl:flex-col xl:pl-0 sm:pl-0 ">
                <div className='w-[25%] col-span-2 xl:w-[30%] lg:w-[40%] xl:mb-[20px] md:w-[50%] sm:w-[50%] xs:hidden'>
                    <Image 
                    src={growth} 
                    alt="about me portfolio picture" 
                    className='w-full h-auto rounded' />
                </div>
                <div className='flex w-[75%] px-10 mx-10 items-center justify-center col-span-2 2xl:px-0 2xl:mt-0 2xl:mx-10 xl:w-full xl:pt-10 sm:mb-10'>
                    <p className='font-large mx-20 text-lg font-semibold text-dark/75 dark:text-light/90 lg:ml-20 sm:mx-10 sm:text-base'>
                        Throughout my university curricula, I gained comprehensive experience utilizing a wide range of skills pertaining to computer science and mechanical engineering. 
                        <br></br><br></br>
                        I am currently devoting my time to side projects and hobbies that help me continuously develop my skills and become more familiar with them.
                    </p>
                </div>
                
            </div>
            
            <div className='flex w-full h-[95vh] 2xl:h-[80vh] xl:h-[70vh] lg:h-[60vh] md:h-[50vh] sm:h-[40vh] xs:h-[30vh] xs:hidden'>
                
                <div className='flex w-full mt-10 pt-10 justify-center bg-dark/5 dark:bg-dark md:mt-0 md:pt-0 '>

                <Skill name="Java"          x='-37vw'   y='0vw' /> 
                <Skill name="Python"        x='-37vw'   y='10vw'/>
                <Skill name="C"             x='-37vw'   y='20vw'/>
                <Skill name="C++"           x='-37vw'   y='30vw'/>

                <Skill name="CSS"           x='-18.5vw' y='0vw'/>
                <Skill name="HTML"          x='-18.5vw' y='10vw'/>
                <Skill name="Javascript"    x='-18.5vw' y='20vw'/>
                <Skill name="React"         x='-18.5vw' y='30vw'/>
                
                <Skill name="NodeJS"        x='0vw'     y='0vw'/>
                <Skill name="NextJS"        x='0vw'     y='10vw'/>
                <Skill name="Tailwind"      x='0vw'     y='20vw'/>
                <Skill name="Framer-Motion" x='0vw'     y='30vw'/>

                <Skill name="Bootstrap"     x='18.5vw'  y='0vw'/>
                <Skill name="MySQL"         x='18.5vw'  y='10vw'/>
                <Skill name="Github"        x='18.5vw'  y='20vw'/>
                <Skill name="Wireshark"     x='18.5vw'  y='30vw'/>

                
                <Skill name="MATLAB"        x='37vw'    y='0vw'/>
                <Skill name="Simulink"      x='37vw'    y='10vw'/>
                <Skill name="Solidworks"    x='37vw'    y='20vw'/>
                <Skill name="ANSYS"         x='37vw'    y='30vw'/>

                
                </div>
            </div>
        </>
    )
}

export default Skills