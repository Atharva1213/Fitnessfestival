import React from 'react'
import { useEffect } from 'react';
import {
    Carousel,
    initTE,
} from "tw-elements";


function EventCorousel() {
    useEffect(() => {
        initTE({ Carousel });
    }, []);
    return (   
         <div
        id="carouselDarkVariant"
        className="relative w-[100%]"
        data-te-carousel-init
        data-te-ride="carousel">
        {/* <!-- Carousel indicators --> */}
        <div
            className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators>
            <button
                data-te-target="#carouselDarkVariant"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"></button>
            <button
                data-te-target="#carouselDarkVariant"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                data-te-slide-to="1"
                aria-label="Slide 1"></button>
            <button
                data-te-target="#carouselDarkVariant"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                data-te-slide-to="2"
                aria-label="Slide 1"></button>
        </div>

        {/* <!-- Carousel items --> */}
        <div
            className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!-- First item --> */}
            <div
                className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item
                data-te-carousel-active>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                    className="block w-full"
                    alt="Motorbike Smoke" />
                <div
                    className="absolute top-[25%] left-[35%] hidden py-5 text-center text-white md:block">
                    <h5 className="text-xl">First slide label</h5>
                    <p className='  text-6xl mt-8'>
                        Event Name - Date
                    </p>
                    <div className='flex justify-evenly items-center mt-14'>
                        <button className=' px-8 py-2 font-bold  border-2 border-white'>Register Now</button>
                        <p className=' font-bold'>Price - 100Rs</p>
                    </div>
                    <button className=' px-8 py-2 font-bold  border-2 border-white mt-40 '>Know More+</button>


                </div>
            </div>
            {/* <!-- Second item --> */}
            <div
                className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                    className="block w-full"
                    alt="Mountaintop" />
                <div
                    className="absolute top-[25%] left-[35%] hidden py-5 text-center text-white md:block">
                    <h5 className="text-xl">Second slide label</h5>
                    <p className='  text-6xl mt-8'>
                        Event Name - Date
                    </p>
                    <div className='flex justify-evenly items-center mt-14'>
                        <button className=' px-8 py-2 font-bold  border-2 border-white'>Register Now</button>
                        <p className=' font-bold'>Price - 100Rs</p>
                    </div>
                    <button className=' px-8 py-2 font-bold  border-2 border-white mt-40 '>Know More+</button>
                </div>
            </div>
            {/* <!-- Third item --> */}
            <div
                className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item>
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                    className="block w-full"
                    alt="Woman Reading a Book" />
                <div
                    className="absolute top-[25%] left-[35%] hidden py-5 text-center text-white md:block">
                    <h5 className="text-xl">Third slide label</h5>
                    <p className='  text-6xl mt-8'>
                        Event Name - Date
                    </p>
                    <div className='flex justify-evenly items-center mt-14'>
                        <button className=' px-8 py-2 font-bold  border-2 border-white'>Register Now</button>
                        <p className=' font-bold'>Price - 100Rs</p>
                    </div>
                    <button className=' px-8 py-2 font-bold  border-2 border-white mt-40 '>Know More+</button>
                </div>
            </div>
        </div>

        {/* <!-- Carousel controls - prev item--> */}
        <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselDarkVariant"
            data-te-slide="prev">
            <span className="inline-block h-8 w-8 dark:grayscale">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-10 w-10">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Previous</span>
        </button>
        {/* <!-- Carousel controls - next item--> */}
        <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselDarkVariant"
            data-te-slide="next">
            <span className="inline-block h-8 w-8 dark:grayscale">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-10 w-10">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Next</span>
        </button>
    </div>
    )
}

export default EventCorousel