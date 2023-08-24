import React from 'react';
import bg from '../timBg.jpg';
import food from '../Images/food.jpg'
import trekking from '../Images/trekking.jpg'
import marathon from '../marathon.jpg'
import Card from '../components/Card'
import Navbar from './Navbar';

export default function Banner() {

    return (
        <div>
            <div className='h-screen w-full bg-cover bg-center relative ' style={{ backgroundImage: `url(${bg})` }}>
                <div id="alert-1" className="hidden gap-2 lg:block absolute top-6 left-[25%] items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-sm font-medium">
                        This site is still <span className="font-semibold">Under Develompent, so some tabs,buttons,components wont work</span>.
                    </div>
                </div>

                <Navbar />

                <div className="title z-20 text-white absolute leading-1 text-left left-[4%] top-[17%]">
                    <h3 className='text-3xl pl-1 text-white stroke-black font-semibold font-bannerFont2 ' >Pimpri Chinchwad College of Engineering's</h3>
                    <h1 className='text-[5.0rem] font-bannerFont2 bg-gradient-to-r from-orange-600 via-[#ff0054] to-[#ff0054] bg-clip-text text-transparent font-semibold '>Fitness First Festival</h1>
                    <h3 className='text-3xl pl-1 font-bannerFont2 font-semibold text-cyan-500'>2023-24</h3>

                    <button className='border border-1 px-6 py-2 text-xl mt-10 rounded-md hover:bg-[#ff0054] hover:border-[#ff0054] transition duration-300 font-bannerfont '>Xplore More</button>

                    <div className="card-view flex justify-between gap-5 mt-10">
                        <Card status="Upcoming" cardImg={trekking} sportType='Trekking' cov="object-cover" pos="object-center" competition='Trek with Tree Plantation' date='26/08/2023'/>
                        <Card status="Upcoming" cardImg={marathon} sportType='Walking' cov="bg-cover" pos="bg-center" competition='Walkathon' date='09/09/2023'/>
                        <Card status="Upcoming" cardImg={food} sportType='Fair' cov="bg-cover" pos="bg-bottom" competition='Healthy Food Fair' date='23/09/2023'/>
                    </div>
                </div>

                <div className="hover-4 quote absolute lg:right-[4%] lg:bottom-[8%] bottom-[1px] text-white max-w-xl p-5">
                    <h3 className='a lg:text-xl font-bannerfont italic'>Fitness is not just about the body; it's a journey that strengthens the mind, nourishes the soul, and empowers us to embrace life's challenges with vitality.</h3>
                    <h4 className='text-lg mt-4 font-bannerfont'> - Alex Trevor</h4>
                </div>

            </div>
        </div>
    );
}