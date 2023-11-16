import { useEffect, useState } from 'react'
import React, { useRef } from 'react'
import { useInView } from "framer-motion"
import bg2 from '../assets/highlight.jpg'

const Highlights = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)
    const [flav, setFlav] = useState(0)
    const [top, setTop] = useState(0)
    const [cus, setCus] = useState(0)

    useEffect(() => {

        if (isInView && flav < 50) {
            setTimeout(() => {
                setFlav(flav + 1)
            }, 50)
            console.log('true');
        }

        if (isInView && top < 20) {
            setTimeout(() => {
                setTop(top + 1)
            }, 100)
            console.log('true');
        }

        if (isInView && cus < 100) {
            setTimeout(() => {
                setCus(cus + 1)
            }, 30)
            console.log('true');
        }

    }, [isInView, flav, top, cus])

    return (
        <div className='hidden md:block'>
            <div className='relative'>
                <img className=' ' src={bg2} />
                <div className='absolute top-12 left-20 font-robo md:text-8xl text-[#a52a2a]'>
                    <h1>Highlights of our Shop</h1>
                    <hr className='h-1 mt-10 bg-[#212529] rounded-full opacity-90' />
                </div>
                <div ref={ref} className='absolute text-[#212529] left-12 top-64 md:flex md:text-6xl font-robo'>
                    <h2 className='mx-3'> {flav}+ <span className='text-[#a52a2a]'>Flavours</span> </h2>
                    <h2 className='mx-40'> {top}+ <span className='text-[#a52a2a]'>Toppings</span> </h2>
                    <h2 className='mx-3'> {cus}+ <span className='text-[#a52a2a]'>Daily customers</span> </h2>

                </div>
            </div>





        </div>
    )
}

export default Highlights
