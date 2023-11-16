import carousel1 from '../assets/carousel-1.jpg'
import carousel2 from '../assets/carousel-2.jpg'
import { Carousel } from "@material-tailwind/react";
import React from 'react'

const Carousel1 = () => {
    return (
        <div id='home' className="rounded md:h-[700px] mt-10">
            <Carousel transition={{ duration: 1.5 }} autoplay={true} loop={true} >
                <img
                    src={carousel2}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src={carousel1}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src={carousel2}
                    className="h-full w-full object-cover"
                />
            </Carousel>
            <div className='absolute  md:text-[230px] text-5xl  grid  place-items-center md:top-52 top-32 md:left-44 left-14 font-robo'>
                <span className='text-[#212529] font-extrabold'>Frozen <span className='text-[#a52a2a]'>Treats!</span> </span>


            </div>
        </div>
    )
}

export default Carousel1




