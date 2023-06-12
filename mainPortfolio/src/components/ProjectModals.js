import React, {useState} from 'react'
import Modal from 'react-modal'
import {motion} from 'framer-motion'
import NextJsCarousel from './nxCarousel'




const ProjectModals = ({title2, type2, desc2, img12, img22, img32, img42, time2}) => {
    const [isOpen, setIsOpen] = useState(false)
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(12px)',
        },
        content: {
            top: '50%',
            left: '50%',
            width: '60vw', 
            height: '70vh',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(231, 233, 237, 1)',
            
        },
    }

    return (
        <div>
            <button onClick={() => setIsOpen(true)} 
            className='text-lg font-semibold lg:text-md md:text-sm'>
                Click to View
            </button>
            
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                <div className='col-span-6 flex flex-row items-center justify-center'>
                    <NextJsCarousel 
                    title3={title2} type3={type2} desc3={desc2} time3={time2}
                    img13={img12} img23={img22} img33={img32} img43={img42} />
                </div>

                <motion.button onClick={() => setIsOpen(false)} 
                whileHover={{scale:1.2}}
                transition={{duration:0.1}}
                className='absolute top-1.5 left-1.5 border-2 rounded-md px-[6px]  font-bold
                bg-light dark:bg-dark hover:bg-dark dark:hover:bg-light
                text-dark dark:text-light hover:text-light dark:hover:text-dark
                border-dark dark:border-light hover:border-light dark:hover:border-dark'>
                    X
                </motion.button>
            </Modal>
            
        </div>
    )
}

export default ProjectModals