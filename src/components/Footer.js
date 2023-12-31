import React, { useRef } from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "framer-motion"

const Footer = () => {
    
    return (
        <div id='contact'>
            <div className='md:container md:mx-auto h-96 bg-[#ffc0cb] mt-20 rounded-t-2xl w-full '>
                <div className='mx-auto w-min flex pt-24 pb-5'>
                    <div className='border border-gray-800 mx-5 px-3 py-2 hover:bg-gray-600 hover:text-white rounded-full transition-transform duration-1000'>
                        <a href='https://www.linkedin.com/in/karthikrajanv'> <FaLinkedinIn className='text-2xl ' /></a>
                    </div>

                    <div className='border border-black mx-5 px-3 py-2 hover:bg-gray-600 hover:text-white rounded-full'>
                        <a href='https://www.instagram.com/karthikrajan_vijayakumar/'> <IoLogoInstagram className='text-2xl ' /></a>
                    </div>

                    <div className='border border-black mx-5 px-3 py-2 hover:bg-gray-600 hover:text-white rounded-full'>
                        <a href='#'> <FaXTwitter className='text-2xl ' /></a>
                    </div>
                </div>


                <div className='mx-auto w-min flex py-5 justify-between'>
                    <div className='w-max'>
                        <p>
                            <p className='text-2xl font-robo pr-12'>Get In Touch</p> <br />
                            123 Street, <br />New York,
                            USA <br />  +012 345 67890
                        </p>
                    </div>

                    <div className='hidden md:block font-robo text-8xl px-10'>
                        <span className='text-[#212529] font-extrabold'>Frozen
                            <span className='text-[#a52a2a]'>Treats!</span> </span>
                    </div>

                    <div className='w-max pl-12'>
                        <p className='text-2xl font-robo'>Opening Hours</p> <br />
                        Mon – Sat,<br /> 8AM – 5PM <br />
                        Sunday: Closed
                    </div>

                </div>

                <div className='w-max mx-auto mt-2 text-center'>
                    © All Rights Reserved. <br /> Designed by <a href='https://www.linkedin.com/in/karthikrajanv' className='text-blue-900 font-robo text-xl'>Karthikrajan V</a>.
                </div>

            </div>
        </div>
    )
}

export default Footer
