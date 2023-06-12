import React, { Component } from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class nxCarousel extends Component {

    render() {

        const {title3, type3, desc3, img13, img23, img33, img43, time3} = this.props;

        return (
            <div className='p-4'>
                <div className='grid grid-cols-2 mb-4 border-2 border-dark/25 rounded-lg'>
                    <h1 className='col-span-2 text-4xl flex flex-col items-center justify-center font-bold'>
                        {title3}
                    </h1>
                    <div className='col-span-2 text-xl flex flex-col items-center justify-center text-blue-700 font-semibold'>
                        {type3}
                    </div>
                </div>

                <Carousel className='border-2 rounded-lg border-dark/25 pt-10'>
                    <div>
                        <Image 
                        src={img13} alt="image1" sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                        <p className="legend">
                            Image 1
                        </p>
                    </div>
                    <div>
                        <Image 
                        src={img23} alt="image2" sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                        <p className="legend">
                            Image 2
                        </p>
                    </div>
                    <div>
                        <Image 
                        src={img33} alt="image3" sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                        <p className="legend">
                            Image 3
                        </p>
                    </div>
                    <div>
                        <Image 
                        src={img43} alt="image4" sizes= "(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                        <p className="legend">
                            Image 4
                        </p>
                    </div>
                </Carousel>

                <div className='border-2 rounded-xl mt-4'>
                    <div className='grid grid-cols-12 border-2 border-dark/25 rounded-lg'>
                        <h2 className='col-span-6 flex flex-row items-center justify-start mx-5 my-3 text-2xl font-medium'>
                            Project Description
                        </h2>
                        <h2 className='col-span-6 flex flex-row items-center justify-end mx-5 text-xl font-semibold'>
                            {time3}
                        </h2>
                        <div className='col-span-12 flex flex-row items-start justify-start mx-3 mb-3 text-xl border-2 border-dark/25 rounded-lg p-2'>
                            {desc3}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};