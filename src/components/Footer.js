import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div id='contact'>
            <div className='container mx-auto h-96 bg-[#ffc0cb] mt-20 rounded-t-2xl '>
                <div className='mx-auto w-min flex pt-24 pb-5'>
                    <div className='border border-gray-800 mx-5 px-3 py-2 hover:bg-gray-600 hover:text-white rounded-full transition-transform duration-1000'>
                        <a href='#'> <FaLinkedinIn className='text-2xl ' /></a>
                    </div>

                    <div className='border border-black mx-5 px-3 py-2 hover:bg-gray-600 hover:text-white rounded-full'>
                        <a href='#'> <IoLogoInstagram className='text-2xl ' /></a>
                    </div>

                    <div className='border border-black mx-5 px-3 py-2 hover:bg-gray-600 hover:text-white rounded-full'>
                        <a href='#'> <FaXTwitter className='text-2xl ' /></a>
                    </div>
                </div>


                <div className='mx-auto w-min flex py-5 justify-between'>
                    <div className='w-max'>
                        <p>
                            <p className='text-2xl font-robo pr-16'>Get In Touch</p> <br />
                            123 Street, <br />New York,
                            USA <br />  +012 345 67890
                        </p>
                    </div>

                    <div className='hidden md:block font-robo text-8xl px-10'>
                        <span className='text-[#212529] font-extrabold'>Frozen
                            <span className='text-[#a52a2a]'>Treats!</span> </span>
                    </div>

                    <div className='w-max pl-16'>
                        <p className='text-2xl font-robo'>Opening Hours</p> <br />
                        Mon – Sat,<br /> 8AM – 5PM <br />
                        Sunday: Closed
                    </div>

                </div>

                <div className='w-max mx-auto mt-5'>
                    © All Rights Reserved. Designed by <a href='#' className='text-blue-900 font-robo text-xl'>Karthikrajan V</a>.
                </div>

            </div>
        </div>
    )
}

export default Footer
