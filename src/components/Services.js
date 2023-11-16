import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'

const Services = () => {
    return (
        <div id='services' className='container mx-auto my-20'>
            <div className="container  mx-auto text-center font mt-7 mb-2 text-[#a52a2a]">
                <h1 className='font-robo text-4xl md:text-6xl' >Best Services We Provide <br /> For Our Clients!
                </h1>
            </div>
            <div className='md:flex justify-between'>
                {/* Card-1 */}
                <Card className="mt-10 md:w-96 hover:bg-[#ffebcd] shadow-2xl h-[470px] md:mx-auto mx-4">
                    <CardHeader className="relative h-40 w-40 rounded-full mx-auto hover:scale-125 transition-transform duration-300  bg-[#ffc0cb]">
                        <img
                            src={service1}
                            alt="card-image" className='hover:rotate-360 transition-transform duration-300 ease-in-out  h-40 w-40 rounded-full'
                        />
                    </CardHeader>
                    <CardBody >
                        <Typography variant="h5" color="blue-gray" className="mt-5 text-blue-900 text-center font-bold font-robo text-2xl">
                            Quality Maintain
                        </Typography>
                        <Typography className='my-9 text-justify'>
                            The composition of ice cream varies in different regions and different markets. Generally, a good ice cream contains 12% fat, 11% milk solids-not-fat (MSNF), 15% sugar, 0.3% stabilizer and emulsifier, and 38.3% total solids.
                        </Typography>
                    </CardBody>

                </Card>

                {/* Card-2 */}
                <Card className="mt-10 md:w-96 hover:bg-[#ffebcd] shadow-2xl h-[470px] md:mx-auto mx-4">
                    <CardHeader className="relative h-40 w-40 rounded-full mx-auto hover:scale-125 transition-transform duration-300  bg-[#ffc0cb]">
                        <img
                            src={service2}
                            alt="card-image" className='hover:rotate-360 transition-transform duration-300 ease-in-out  h-40 w-40 rounded-full'
                        />
                    </CardHeader>
                    <CardBody >
                        <Typography variant="h5" color="blue-gray" className="mt-5 text-blue-900 text-center font-bold font-robo text-2xl">
                            Individual Approach
                        </Typography>
                        <Typography className='my-9 text-justify'>
                            Frozen Treats typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches.
                        </Typography>
                    </CardBody>

                </Card>

                {/* Card-3 */}
                <Card className="mt-10 md:w-96 hover:bg-[#ffebcd] shadow-2xl h-[470px] md:mx-auto mx-4">
                    <CardHeader className="relative h-40 w-40 rounded-full mx-auto hover:scale-125 transition-transform duration-300  bg-[#ffc0cb]">
                        <img
                            src={service3}
                            alt="card-image" className='hover:rotate-360 transition-transform duration-300 ease-in-out  h-40 w-40 rounded-full'
                        />
                    </CardHeader>
                    <CardBody >
                        <Typography variant="h5" color="blue-gray" className="mt-5 text-blue-900 text-center font-bold font-robo text-2xl">
                            Individual Approach
                        </Typography>
                        <Typography className='my-9 text-justify'>
                            Frozen Treats typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches.
                        </Typography>
                    </CardBody>

                </Card>

            </div>

        </div>
    )
}

export default Services