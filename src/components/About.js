import React from 'react'
import bg from '../bg-img.jpg'
import logo from '../logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function About() {
    return (
        <div id='about' className='relative h-screen w-full bg-gray-800 text-white bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-black/70 to-black/60' />
            <img className='h-[20rem] absolute right-[5%] top-[10%]' src={logo} alt=""/>
            <h1 className='absolute left-4 top-4 font-headingText text-3xl'>#<span className='text-orange-600'>Fitness</span><span className='text-white'>First</span><span className='text-green-600'>Festival</span></h1>
            <div className="about-details absolute top-[20%] left-[6%]">
                <div className='flex flex-col gap-2'>
                    <h1 className='font-aboutFont text-[3rem] font-semibold'>Be <span className='text-orange-600'>Fit.</span></h1>
                    <h1 className='font-aboutFont text-[3rem] font-semibold'>Be <span className=''>St<span className='text-blue-500'>ro</span>ng.</span></h1>
                    <h1 className='font-aboutFont text-[3rem] font-semibold'>Be <span className='text-green-600'>Enthusiastic.</span></h1>
                    <p className='text-lg font-bannerfont'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis.</p>
                    <h1 className='text-6xl font-bannerfont'>~</h1>
                </div>
                <p className='max-w-2xl text-xl font-bannerfont text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et odit maxime excepturi, ullam enim aliquid nemo error nobis perspiciatis iste aperiam fuga fugiat qui quos molestias in asperiores quia iure repellat voluptatibus perferendis quisquam minima. Odit repudiandae ipsa quia vitae praesentium id dicta, nihil tempora quas totam repellendus tempore iure, aut voluptatibus earum consequatur nemo. Eius unde possimus provident quas, aperiam nemo laborum earum aliquid ipsa deleniti molestiae dolores quos sed aspernatur. Tenetur minus, natus autem molestiae fugit tempora odit assumenda voluptatum cumque nesciunt cupiditate voluptas. Impedit, dicta debitis, asperiores quia rem et eos eligendi vero quas, itaque maiores!</p>
            </div>
        </div>
    )
}

export default About