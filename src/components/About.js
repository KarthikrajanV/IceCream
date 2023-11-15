import abt from '../assets/about.jpg'
import { FaCheck } from "react-icons/fa";
const About = () => {
    return (
        <div id='about'>
            <h1 className='md:text-6xl text-4xl font-robo text-center text-[#a52a2a]'>
                Traditional & Delicious Ice Cream Since 1950 !
            </h1>
            <div className='container mx-auto md:flex md:my-20 my-5'>
                <div className='md:w-1/3  py-4 px-7 mx-auto' >
                    <div className='pb-8'><span className='font-robo md:text-4xl text-3xl text-[#a52a2a] '>About us</span></div>
                    <p className='text-justify text-xl font-serif mb-10 font-semibold'>Devoted to delivering the exceptionally best-frozen yogurt and sorbet, <span className='text-green-900'>Frozen Treats</span> opened in August 2004 on Orchard Street in Lower Manhattan.</p>
                    <p>We’re hitched and eat plentiful measures of frozen yogurt. We’d cheerfully have a scoop for breakfast, lunch, and supper on the off chance that we could.</p>
                </div>
                <div className='md:block w-1/3 hidden  overflow-hidden rounded-xl mx-4 ' >
                    <img src={abt} className='transition-transform duration-300 hover:scale-125 ' />
                </div>
                <div className='md:w-1/3  py-4 mx-auto px-7' >
                    <div className='pb-8'><span className='font-robo md:text-4xl text-3xl text-[#a52a2a] '>Our Features</span></div>
                    <p className='text-justify text-xl font-serif mb-10 font-semibold'>As a beloved institution in the world of <span className='text-green-900 font-bold'>Frozen Treats</span>, we take pride in continuing the legacy of creating frozen delights that bring smiles and joy to all who savor them.</p>

                    <div className='text-xl'>
                        <p className='flex my-3'><span className='text-2xl text-green-800 mr-3'><FaCheck /></span> Wide Range of Flavours.</p>
                        <p className='flex my-3'><span className='text-2xl text-green-800 mr-3'><FaCheck /></span> Wide Range of Flavours.</p>
                        <p className='flex my-3'><span className='text-2xl text-green-800 mr-3'><FaCheck /></span> Wide Range of Flavours.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
