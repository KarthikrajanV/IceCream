import carousel1 from '../assets/carousel-1.jpg';
import carousel2 from '../assets/carousel-2.jpg';
import { Carousel } from "@material-tailwind/react";
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Carousel1 = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        // Trigger the animation once when the element comes into view
    });

    const animationVariants = {
        initial: {
            x: "-100%"
        },
        visible: {
            x: "0%",
            transition: {
                type: "spring",
                duration: 2,
                stiffness: 50
            }
        }
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
            console.log('true');
        }
        else {
            controls.start("initial")
        }
    }, [controls, inView]);

    return (
        <div id='home' className="rounded md:h-[700px] mt-10 relative">
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
            <motion.div
                ref={ref}
                variants={animationVariants}
                animate={controls}
                className='absolute md:text-[230px] text-5xl grid place-items-center md:top-52 top-20 md:left-44 left-14 font-robo'>
                <span className='text-[#212529] font-extrabold'>Frozen <span className='text-[#a52a2a]'>Treats!</span> </span>
            </motion.div>
        </div>
    );
};

export default Carousel1;
