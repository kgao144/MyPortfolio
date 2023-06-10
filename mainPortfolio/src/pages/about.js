import Head from 'next/head';
import Image from 'next/image';
import React, {useEffect, useRef} from 'react';
import { useMotionValue, useSpring, useInView } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import dev2 from "../../public/images/profile/dev2.png";


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000})
const isInView = useInView(ref, {once: true});  
    
    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title> Kevin's Portfolio | About Me</title>
                <meta name="description" content="any description"/>
            </Head>

            <main className='flex w-full flex-col item-center justify-center dark:bg-[#2c2c2c]'>
            <AnimatedText text="Write code, push boundaries!" className='my-3'/>
                
                <Layout className='pt-16'>

                <div className='grid w-full grid-cols-8 gap-16 '>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8'>
                        <Image 
                        src={dev2} 
                        alt="about me portfolio picture" 
                        className='w-full h-auto rounded-2xl'
                        priority
                        sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                    </div>

                    <div className='col-span-3 flex flex-col items-start justify-start ml-5'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                        <p className='font-medium text-lg dark:text-light'>
                            Nice to meet you! I'm Kevin.
                        </p>
                        <p className='my-4 font-medium text-md dark:text-light'>
                            I'm a motivated graduate from Georgia Southern University with a passion for technology and problem-solving. 
                            With degrees in both Computer Science and Mechanical Engineering, I'm driven to explore challenging problems and apply innovative solutions. 
                            During my academic journey, I developed solid foundations in both fields allowing me to view approach problems from a multidisciplinary perspective.                        </p>
                        <p className='my-4 font-medium text-md dark:text-light'>
                            In addition to my academic journey, I enjoy video editing and tinkering with new technologies in my free time. 
                            These activities not only fuel my creativity but also keep me updated with the latest trends. 
                            I embrace my curiousity and have a strong commitment to continuously expanding my skills.
                        </p>
                        <p className='mt-4 font-medium text-md dark:text-light'>
                            I'm excited to embark on the next chapter of my career to make meaningful impacts in professional settings. 
                            Whether it's developing software solutions or engineering mechanical systems, I bring a collaborative mindset to engage effectively.
                            I excel in teams that value innovation and foster a dynamic atmosphere, allowing me to bring substantial and meaningful contributions.
                        </p>
                    </div>
                    
                    <div className='col-span-2 flex flex-col item-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex flex-col items-end text-7xl font-bold dark:text-light'><AnimatedNumbers value={3}/></span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex flex-col items-end text-7xl font-bold dark:text-light'><AnimatedNumbers value={1}/></span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Satisfied Clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex flex-col items-end text-7xl font-bold dark:text-light'><AnimatedNumbers value={1}/></span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years of Experience</h2>
                        </div>
                    </div>
                </div>
                
                </Layout>

                <Education />

                <Skills/>
                
            </main>
        </>
    )
}

export default about