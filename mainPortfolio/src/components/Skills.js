import React from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import growth from "../../public/images/assets/studying.png";
import {FaJava} from 'react-icons/fa'

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex w-[13%] h-[15%] items-center justify-center rounded-3xl font-semibold
            bg-dark text-light dark:bg-light/95 dark:text-dark py-3 px-6 my-8 shadow-dark cursor-pointer absolute'
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
            <h2 className='font-bold text-8xl mb-10 mt-12 w-full text-center dark:text-light'>
                Skills
            </h2>
            <div className="flex grid-cols-3 gap-x-20 mx-20 mb-5 pl-40 items-center justify-between">
                <div className='w-[25%]'>
                    <Image 
                    src={growth} 
                    alt="about me portfolio picture" 
                    className='w-full h-auto rounded' />
                </div>
                <div className='flex w-[75%] px-20 mx-20 items-center justify-center'>
                    <p className='font-large mx-20 text-lg font-semibold text-dark/75 dark:text-light/90'>
                        Throughout my university curricula, I gained extensive experience and utilized a wide range of skills pertaining to computer science and mechanical engineering. 
                        <br></br><br></br>
                        Currently, I am dedicating my time to engaging in side-projects that further enhance my familiarity and proficiency with these skills.
                    </p>
                </div>
                
            </div>
            
            
            <div className='flex w-full h-screen'>
                
                <div className='flex w-full mt-10 pt-10 justify-center bg-dark/5 dark:bg-dark'>

                <Skill name="Java"          x='-37vw'   y='0vw'/> 
                <Skill name="Python"        x='-37vw'   y='10vw'/>
                <Skill name="C"             x='-37vw'   y='20vw'/>
                <Skill name="C++"           x='-37vw'   y='30vw'/>

                <Skill name="CSS"           x='-18.5vw' y='0vw'/>
                <Skill name="HTML"          x='-18.5vw' y='10vw'/>
                <Skill name="JavaScript"    x='-18.5vw' y='20vw'/>
                <Skill name="React"         x='-18.5vw' y='30vw'/>
                
                <Skill name="NodeJS"        x='0vw'     y='0vw'/>
                <Skill name="NextJS"        x='0vw'     y='10vw'/>
                <Skill name="TailwindCSS"   x='0vw'     y='20vw'/>
                <Skill name="Framer-Motion" x='0vw'     y='30vw'/>

                <Skill name="Bootstrap"     x='18.5vw'  y='0vw'/>
                <Skill name="MySQL"         x='18.5vw'  y='10vw'/>
                <Skill name="Github"        x='18.5vw'  y='20vw'/>
                <Skill name="Wireshark"     x='18.5vw'  y='30vw'/>

                
                <Skill name="MATLAB"        x='37vw'    y='0vw'/>
                <Skill name="Simulink"      x='37vw'    y='10vw'/>
                <Skill name="SOLIDWORKS"    x='37vw'    y='20vw'/>
                <Skill name="ANSYS"         x='37vw'    y='30vw'/>

                
                </div>
            </div>
        </>
    )
}

export default Skills