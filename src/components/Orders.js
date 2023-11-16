import React from 'react'
import order1 from '../assets/service-2.jpg'
import order2 from '../assets/product-2.jpg'
import order3 from '../assets/product-5.jpg'
import order4 from '../assets/product-4.jpg'
import order5 from '../assets/product-3.jpg'
import { Button } from "@material-tailwind/react";

const Orders = () => {
    return (
        <div id='order'>
            <h1 className='text-4xl md:text-6xl text-center font-robo md:mt-20 md:pb-2 my-5 text-[#a52a2a] px-2'>
                Best Prices We Offer For Ice Cream Lovers!
            </h1>
            <div className='container md:mx-auto'>
                <div className='grid md:grid-cols-5 grid-cols-2 bg-white  rounded-xl'>

                    {/* Service-1 */}
                    <div className='mx-auto md:m-16 m-10'>
                        <div className='border py-4 bg-[#0dcaf0] text-center text-white text-2xl font-bold rounded-xl'>
                            Rs.99
                        </div>
                        <div className='group'>
                            <div className='rounded-full h-40 w-40 bg-[#0dcaf0] overflow-hidden group-hover:bg-white transition-transform duration-300' >
                                <img src={order1} className='rounded-full h-28 w-28 mx-auto my-6 group-hover:scale-125 transition-transform duration-300' />
                            </div>
                        </div>
                        <h1 className='text-center py-6 font-robo text-2xl'>Vanilla</h1>
                        <div className='ml-7'> <button className='flex justify-center bg-[#0b5ed7] py-2 px-3 rounded-md text-white' >Order now</button>
                        </div>
                    </div>

                    {/* Service-2 */}
                    <div className='mx-auto md:m-16 m-10'>
                        <div className='border py-4 bg-[#0dcaf0] text-center text-white text-2xl font-bold rounded-xl'>
                            Rs.129
                        </div>
                        <div className='group'>
                            <div className='rounded-full h-40 w-40 bg-[#0dcaf0] overflow-hidden group-hover:bg-white transition-transform duration-300' >
                                <img src={order2} className='rounded-full h-28 w-28 mx-auto my-6 group-hover:scale-125 transition-transform duration-300' />
                            </div>
                        </div>
                        <h1 className='text-center py-6 font-robo text-2xl text-[#a52a2a]'>Chocolate</h1>
                        <div className='ml-7'> <button className='flex justify-center bg-[#0b5ed7] py-2 px-3 rounded-md text-white' >Order now</button>
                        </div>

                    </div>

                    {/* Service-3 */}
                    <div className='mx-auto md:m-16 m-10'>
                        <div className='border py-4 bg-[#0dcaf0] text-center text-white text-2xl font-bold rounded-xl'>
                            Rs.109
                        </div>
                        <div className='group'>
                            <div className='rounded-full h-40 w-40 bg-[#0dcaf0] overflow-hidden group-hover:bg-white transition-transform duration-300' >
                                <img src={order3} className='rounded-full h-28 w-28 mx-auto my-6 group-hover:scale-125 transition-transform duration-300' />
                            </div>
                        </div>
                        <h1 className='text-center py-6 font-robo text-2xl text-[#ffc0cb]'>Strawberry</h1>
                        <div className='ml-7'> <button className='flex justify-center bg-[#0b5ed7] py-2 px-3 rounded-md text-white' >Order now</button>
                        </div>

                    </div>

                    {/* Service-4 */}
                    <div className='mx-auto md:m-16 m-10'>
                        <div className='border py-4 bg-[#0dcaf0] text-center text-white text-2xl font-bold rounded-xl'>
                            Rs.169
                        </div>
                        <div className='group'>
                            <div className='rounded-full h-40 w-40 bg-[#0dcaf0] overflow-hidden group-hover:bg-white transition-transform duration-300' >
                                <img src={order4} className='rounded-full h-28 w-28 mx-auto my-6 group-hover:scale-125 transition-transform duration-300' />
                            </div>
                        </div>
                        <h1 className='text-center py-6 font-robo text-2xl text-[#800090]'>Blackcurrant</h1>
                        <div className='ml-7'> <button className='flex justify-center bg-[#0b5ed7] py-2 px-3 rounded-md text-white' >Order now</button>
                        </div>

                    </div>

                    {/* Service-5 */}
                    <div className='mx-auto md:m-16 m-10'>
                        <div className='border py-4 bg-[#0dcaf0] text-center text-white text-2xl font-bold rounded-xl'>
                            Rs.149
                        </div>
                        <div className='group'>
                            <div className='rounded-full h-40 w-40 bg-[#0dcaf0] overflow-hidden group-hover:bg-white transition-transform duration-300' >
                                <img src={order5} className='rounded-full h-28 w-28 mx-auto my-6 group-hover:scale-125 transition-transform duration-300' />
                            </div>
                        </div>
                        <h1 className='text-center py-6 font-robo text-2xl text-[#bcbc5b]'>Butterskotch</h1>
                        <div className='ml-7'> <button className='flex justify-center bg-[#0b5ed7] py-2 px-3 rounded-md text-white' >Order now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto my-7'>
                <Button fullWidth className='bg-green-600 hover:bg-[#0b5ed7]'>View orders</Button>
            </div>


        </div>
    )
}

export default Orders
